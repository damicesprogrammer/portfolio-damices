import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// GitHub Pages build: set PAGES_BASE_PATH (e.g. "/portfolio-damices/") to
// prerender the site to static HTML served under that path. Without it the
// build produces a regular SSR server through Nitro.
const pagesBase = process.env["PAGES_BASE_PATH"];

export default defineConfig({
  base: pagesBase || "/",
  css: { transformer: "lightningcss" },
  server: { port: 8080 },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      ...(pagesBase && { prerender: { enabled: true, failOnError: true } }),
    }),
    ...(pagesBase ? [] : [nitro()]),
    viteReact(),
  ],
});
