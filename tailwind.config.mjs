/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ruby: {
          50: 'oklch(97% 0.25 25)',
          100: 'oklch(95% 0.25 25)',
          200: 'oklch(90% 0.25 25)',
          300: 'oklch(85% 0.25 25)',
          400: 'oklch(75% 0.25 25)',
          500: 'oklch(65% 0.25 25)', // Primary ruby red
          600: 'oklch(55% 0.25 25)',
          700: 'oklch(45% 0.25 25)',
          800: 'oklch(35% 0.25 25)',
          900: 'oklch(25% 0.25 25)',
          950: 'oklch(15% 0.25 25)',
        },
        sky: {
          50: 'oklch(97% 0.17 250)',
          100: 'oklch(95% 0.17 250)',
          200: 'oklch(90% 0.17 250)',
          300: 'oklch(85% 0.17 250)',
          400: 'oklch(75% 0.17 250)',
          500: 'oklch(65% 0.17 250)', // Bright blue
          600: 'oklch(55% 0.17 250)',
          700: 'oklch(45% 0.17 250)',
          800: 'oklch(35% 0.17 250)',
          900: 'oklch(25% 0.17 250)',
          950: 'oklch(15% 0.17 250)',
        },
        cloud: {
          50: 'oklch(100% 0 0)', // Pure white
          100: 'oklch(95% 0.0 0)',
          200: 'oklch(90% 0.0 0)',
          300: 'oklch(85% 0.0 0)',
          400: 'oklch(75% 0.0 0)',
          500: 'oklch(65% 0.0 0)', 
          600: 'oklch(55% 0.0 0)',
          700: 'oklch(45% 0.0 0)',
          800: 'oklch(35% 0.0 0)',
          900: 'oklch(25% 0.0 0)',
          950: 'oklch(15% 0.0 0)', //dark grey
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