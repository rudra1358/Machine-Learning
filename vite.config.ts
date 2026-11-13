import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ command }) => ({
  plugins: command === "build" ? [cloudflare()] : [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        topic: resolve(root, "topic.html"),
      },
    },
  },
}));
