import { getMigrations } from "better-auth/db/migration";
import { betterAuth } from "better-auth";

const authApiPath = "/api/auth";
const authBaseUrl = "https://ml-field-guide.rudra1358.workers.dev";
const authLocalOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

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
    advanced: {
      ipAddress: {
        ipAddressHeaders: ["cf-connecting-ip"],
      },
    },
  });
}

async function matchesSecret(expected: string, authorization: string | null) {
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return false;
  }

  const candidate = authorization.slice(7);
  if (!candidate || candidate.length > 256) {
    return false;
  }

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

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith(`${authApiPath}/`)) {
      return new Response("Not found", { status: 404 });
    }

    const auth = createAuth(env);
    if (url.pathname === `${authApiPath}/_migrate`) {
      if (request.method !== "POST") {
        return new Response("Method not allowed", {
          status: 405,
          headers: { Allow: "POST" },
        });
      }

      const authorized = await matchesSecret(
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

    return auth.handler(request);
  },
};
