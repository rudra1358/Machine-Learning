import { getMigrations } from "better-auth/db/migration";
import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";

const authApiPath = "/api/auth";
const authBaseUrl = "https://ml-field-guide.rudra1358.workers.dev";
const authLocalOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
const publicPaths = new Set([
  "/",
  "/index.html",
  "/home.css",
  "/auth.css",
  "/auth-client.js",
]);

function createAuth(env: Env) {
  const allowedOrigins = [authBaseUrl, ...authLocalOrigins];
  const allowedHosts = [
    new URL(authBaseUrl).host,
    ...authLocalOrigins.map((origin) => new URL(origin).host),
  ];

  return betterAuth({
    appName: "Fieldnotes AI Learning Studio",
    baseURL: {
      allowedHosts,
      fallback: authBaseUrl,
      protocol: "auto",
    },
    trustedOrigins: allowedOrigins,
    secret: env.BETTER_AUTH_SECRET,
    database: env.AUTH_DB,
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
    },
    databaseHooks: {
      user: {
        create: {
          before: async (user) => {
            if (!isAuthorizedEmail(env, user.email)) {
              throw new APIError("FORBIDDEN", {
                message: "This email address has not been granted access.",
              });
            }
            return { data: user };
          },
        },
      },
    },
    advanced: {
      ipAddress: {
        ipAddressHeaders: ["cf-connecting-ip"],
      },
    },
  });
}

function isAuthorizedEmail(env: Env, email: string) {
  const allowedEmails = (env.AUTHORIZED_EMAILS || "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  return allowedEmails.includes(email.trim().toLowerCase());
}

async function matchesSecret(expected: string, candidate: string | null) {
  if (!candidate || candidate.length > 256) return false;

  const encoder = new TextEncoder();
  const [expectedHash, candidateHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
    crypto.subtle.digest("SHA-256", encoder.encode(candidate)),
  ]);
  const expectedBytes = new Uint8Array(expectedHash);
  const candidateBytes = new Uint8Array(candidateHash);
  let difference = 0;

  for (let index = 0; index < expectedBytes.length; index += 1) {
    difference |= expectedBytes[index] ^ candidateBytes[index];
  }

  return difference === 0;
}

async function isPublicHomeAsset(request: Request, env: Env) {
  const url = new URL(request.url);
  if (
    publicPaths.has(url.pathname) ||
    url.pathname.startsWith("/@vite/") ||
    url.pathname.startsWith("/node_modules/.vite/")
  ) {
    return true;
  }

  const homeUrl = new URL("/index.html", url);
  const homeResponse = await env.ASSETS.fetch(new Request(homeUrl));
  if (!homeResponse.ok) {
    throw new Error(`Could not load the public home page: ${homeResponse.status}`);
  }

  const homeHtml = await homeResponse.text();
  const assetReferences = homeHtml.matchAll(
    /<(?:script|link)\b[^>]*(?:src|href)=["']([^"']+)["'][^>]*>/gi,
  );
  for (const [, reference] of assetReferences) {
    if (!reference || reference.startsWith("data:")) continue;
    if (new URL(reference, homeUrl).pathname === url.pathname) return true;
  }
  return false;
}

async function matchesBearerSecret(expected: string, authorization: string | null) {
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return false;
  }

  const candidate = authorization.slice(7);
  return matchesSecret(expected, candidate);
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith(`${authApiPath}/`)) {
      const auth = createAuth(env);
      if (url.pathname === `${authApiPath}/_migrate`) {
        if (request.method !== "POST") {
          return new Response("Method not allowed", {
            status: 405,
            headers: { Allow: "POST" },
          });
        }

        const authorized = await matchesBearerSecret(
          env.BETTER_AUTH_SECRET,
          request.headers.get("Authorization"),
        );
        if (!authorized) {
          return new Response("Not found", { status: 404 });
        }

        const migrations = await getMigrations(auth.options);
        await migrations.runMigrations();
        return Response.json({
          status: "ok",
          created: migrations.toBeCreated.map(({ table }) => table),
          added: migrations.toBeAdded.map(({ table }) => table),
        });
      }

      if (url.pathname === `${authApiPath}/sign-up/email` && request.method === "POST") {
        let payload: unknown;
        try {
          payload = await request.clone().json();
        } catch {
          return auth.handler(request);
        }

        if (
          typeof payload !== "object" ||
          payload === null ||
          !("email" in payload) ||
          typeof payload.email !== "string" ||
          !("inviteCode" in payload) ||
          typeof payload.inviteCode !== "string" ||
          !isAuthorizedEmail(env, payload.email) ||
          !(await matchesSecret(env.SIGNUP_INVITE_CODE, payload.inviteCode))
        ) {
          return Response.json(
            { message: "This account cannot be created. Check your invitation details." },
            { status: 403 },
          );
        }

        const signupPayload = { ...payload };
        delete signupPayload.inviteCode;
        return auth.handler(
          new Request(request, { body: JSON.stringify(signupPayload) }),
        );
      }

      if (url.pathname === `${authApiPath}/sign-in/email` && request.method === "POST") {
        let payload: unknown;
        try {
          payload = await request.clone().json();
        } catch {
          return auth.handler(request);
        }

        if (
          typeof payload === "object" &&
          payload !== null &&
          "email" in payload &&
          typeof payload.email === "string" &&
          !isAuthorizedEmail(env, payload.email)
        ) {
          return Response.json(
            { message: "This email address has not been granted access." },
            { status: 403 },
          );
        }
      }

      return auth.handler(request);
    }

    if (await isPublicHomeAsset(request, env)) {
      return env.ASSETS.fetch(request);
    }

    const auth = createAuth(env);
    const session = await auth.api.getSession({ headers: request.headers });
    if (session && isAuthorizedEmail(env, session.user.email)) {
      return env.ASSETS.fetch(request);
    }

    if (request.method === "GET" && request.headers.get("Accept")?.includes("text/html")) {
      return Response.redirect(new URL("/index.html?access=required", request.url), 302);
    }

    return new Response("Sign in with an approved account to access this course.", {
      status: 401,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
};
