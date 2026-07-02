import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
// 8-bit refresh: color scales are remapped to the palette sampled from the
// pixel logo (public/logo8bit.png), radii are squared off, and shadows are
// hard ink offsets. Pages keep their existing utility classes and inherit
// the new look through these tokens.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Logo coral-ruby family (letters #ff5545, shadow #7c000a).
        ruby: {
          50: "#fff1f0",
          100: "#ffe0dd",
          200: "#ffc4bf",
          300: "#ff9d94",
          400: "#ff6e60",
          500: "#ff5545",
          600: "#e03427",
          700: "#b52e27",
          800: "#8f1610",
          900: "#7c000a",
          950: "#4a0006",
        },
        dark: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        // Logo sky family (dither blues #62bbee / #3ea3dd).
        sky: {
          50: "#f0f9ff",
          100: "#e1f2fc",
          200: "#c3e5f9",
          300: "#93d2f4",
          400: "#62bbee",
          500: "#3ea3dd",
          600: "#2b86bd",
          700: "#236a97",
          800: "#1d5378",
          900: "#123a57",
          950: "#0a2740",
        },
        // Logo royal blues (SAN FRANCISCO badge #0047eb on #002d95).
        indigo: {
          50: "#eef3ff",
          100: "#dbe5ff",
          200: "#b8caff",
          300: "#8aa6fc",
          400: "#5379f6",
          500: "#0047eb",
          600: "#003cc7",
          700: "#002d95",
          800: "#022571",
          900: "#071f56",
          950: "#04123a",
        },
        // Coral-light stand-in so existing ruby→pink gradients stay coherent.
        pink: {
          50: "#fff2f0",
          100: "#ffe4e0",
          200: "#ffcdc6",
          300: "#ffaba0",
          400: "#ff8d82",
          500: "#ff6e60",
          600: "#ff5545",
          700: "#c73325",
          800: "#8f1610",
          900: "#7c000a",
          950: "#4a0006",
        },
        // Coin gold + CONFERENCE-bar orange.
        gold: {
          100: "#fff3bf",
          300: "#ffe14d",
          400: "#fcd21f",
          500: "#f4c700",
          600: "#c8a300",
          700: "#8f7500",
        },
        pumpkin: {
          500: "#da5513",
          600: "#b14416",
        },
        // Outline ink (near-black navy) + fog shade.
        ink: "#00040c",
        cloudshade: "#c4d6ef",
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
        sm: "2px 2px 0 0 rgba(0, 4, 12, 0.9)",
        DEFAULT: "3px 3px 0 0 rgba(0, 4, 12, 0.9)",
        md: "4px 4px 0 0 rgba(0, 4, 12, 0.9)",
        lg: "6px 6px 0 0 rgba(0, 4, 12, 0.9)",
        xl: "8px 8px 0 0 rgba(0, 4, 12, 0.9)",
        "2xl": "10px 10px 0 0 rgba(0, 4, 12, 0.9)",
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
