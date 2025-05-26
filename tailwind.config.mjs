/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ruby: {
          50: 'oklch(97% 0.02 0)',
          100: 'oklch(95% 0.04 25)',
          200: 'oklch(90% 0.08 25)',
          300: 'oklch(85% 0.12 25)',
          400: 'oklch(75% 0.16 25)',
          500: 'oklch(65% 0.25 25)', // Primary ruby red
          600: 'oklch(55% 0.25 25)',
          700: 'oklch(45% 0.20 25)',
          800: 'oklch(35% 0.15 25)',
          900: 'oklch(25% 0.10 25)',
          950: 'oklch(15% 0.05 25)',
        },
        sky: {
          50: 'oklch(97% 0.17 250)',
          100: 'oklch(95% 0.17 250)',
          200: 'oklch(90% 0.17 250)',
          300: 'oklch(85% 0.17 250)',
          400: 'oklch(75% 0.17 250)',
          500: 'oklch(68% 0.17 250)', // Bright blue
          600: 'oklch(55% 0.25 250)',
          700: 'oklch(45% 0.17 250)',
          800: 'oklch(35% 0.17 250)',
          900: 'oklch(25% 0.17 250)',
          950: 'oklch(15% 0.17 250)',
        },
        cloud: {
          50: 'oklch(100% 0 0)',
          100: 'oklch(98% 0.01 0)',
          200: 'oklch(95% 0.02 0)',
          300: 'oklch(90% 0.03 0)',
          400: 'oklch(85% 0.04 0)',
          500: 'oklch(100% 0 0)', // Pure white
          600: 'oklch(75% 0.05 0)',
          700: 'oklch(65% 0.06 0)',
          800: 'oklch(45% 0.07 0)',
          900: 'oklch(25% 0.08 0)',
          950: 'oklch(15% 0.09 0)',
        }
      },
      fontFamily: {
        sans: ['Martian Mono', 'sans-serif'],
        display: ['Martian Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}