import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import * as consts from "./src/consts.ts";


export default defineConfig({
  site: /** @type {any} */ (consts).SITE_URL ?? "http://localhost:3000",
  base: import.meta.env.PROD ? "/portafolio" : undefined,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
});
