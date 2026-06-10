import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://sfruby.com",
  output: "static",
  devOverlay: {
    enabled: false,
  },
  redirects: {
    "/talks": "/videos",
  },
  integrations: [tailwind()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
