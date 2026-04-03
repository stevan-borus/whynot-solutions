import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://why-not-solutions.com",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "sr",
    locales: ["sr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
