import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/REMIX-001/',
  plugins: [
    remix({
      basename: '/REMIX-001/',
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
