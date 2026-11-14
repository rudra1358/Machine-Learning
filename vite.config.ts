import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [cloudflare()],
  environments: {
    client: {
      build: {
        rollupOptions: {
          input: {
            main: resolve(root, "index.html"),
            machineLearning: resolve(root, "ml.html"),
            topic: resolve(root, "topic.html"),
            deepLearning: resolve(root, "deep-learning.html"),
          },
        },
      },
    },
  },
});
