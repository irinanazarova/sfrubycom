import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://sfruby.com",
  output: "static",
  devOverlay: {
    enabled: false,
  },
  redirects: {
    "/talks": "/videos",
  },
  integrations: [tailwind(), icon()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
