import plugin from "tailwindcss/plugin";
import { cssPalette, pixelSizes, shadowInk } from "./src/design/tokens.mjs";

/** @type {import('tailwindcss').Config} */
// 8-bit refresh: color scales, pixel type sizes, and shadows come from the
// token source of truth in src/design/tokens.mjs. Radii are squared and
// shadows are hard ink offsets; pages inherit the look through these tokens.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ...cssPalette,
      },
      fontSize: {
        ...pixelSizes,
      },
      fontFamily: {
        // Body: Martian Mono — its fixed-width rhythm echoes the pixel grid.
        sans: ["Martian Mono", "ui-monospace", "monospace"],
        // Long headings: Martian Grotesk (wide grotesk, reads at length).
        // Short display moments use .px-font / font-pixel (Press Start 2P).
        display: [
          "Martian Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        pixel: ["Press Start 2P", "Martian Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "slide-in": "slideIn 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      // Everything is square in an 8-bit world.
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      // Hard offset "sprite" shadows instead of blurred elevation.
      boxShadow: {
        sm: `2px 2px 0 0 ${shadowInk}`,
        DEFAULT: `3px 3px 0 0 ${shadowInk}`,
        md: `4px 4px 0 0 ${shadowInk}`,
        lg: `6px 6px 0 0 ${shadowInk}`,
        xl: `8px 8px 0 0 ${shadowInk}`,
        "2xl": `10px 10px 0 0 ${shadowInk}`,
        inner: "inset 3px 3px 0 0 rgba(0, 4, 12, 0.12)",
        none: "none",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      addVariant("ogplus", ":where([data-ogplus]) &");
    }),
  ],
};
