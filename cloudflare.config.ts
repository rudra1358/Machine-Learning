import { bindings, defineConfig } from "cf/config";
import {
  authDatabaseId,
  authDatabaseName,
  workerCompatibilityDate,
  workerName,
} from "./auth-settings.js";

export default defineConfig({
  worker: {
    name: workerName,
    compatibilityDate: workerCompatibilityDate,
    compatibilityFlags: ["nodejs_compat"],
    entrypoint: "./auth-worker.ts",
    assets: {
      runWorkerFirst: ["/api/auth/*"],
    },
    env: {
      AUTH_DB: bindings.d1({ name: authDatabaseName, id: authDatabaseId }),
      BETTER_AUTH_SECRET: bindings.secret(),
    },
    "observability": {
      enabled: true,
      redactQueryString: true,
      traces: {
        enabled: true,
        headSamplingRate: 0.1,
      },
    },
  },
});
