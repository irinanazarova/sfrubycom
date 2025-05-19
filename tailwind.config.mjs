/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ruby: {
          50: '#fff1f4',
          100: '#ffe4ea',
          200: '#ffccd8',
          300: '#ffa3ba',
          400: '#ff6b8e',
          500: '#ff1f57', // Primary ruby red from logo
          600: '#ed0d44',
          700: '#d60736',
          800: '#b00630',
          900: '#8c072d',
          950: '#4c0016',
        },
        sky: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe3fe',
          300: '#91d2fc',
          400: '#5eb5f9',
          500: '#0066ff', // Bright blue from logo
          600: '#2575ef',
          700: '#1d5fc9',
          800: '#1e4da1',
          900: '#1e437f',
          950: '#172a4f',
        },
        cloud: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
          500: '#ffffff', // Pure white from cloud
          600: '#a3a3a3',
          700: '#737373',
          800: '#525252',
          900: '#404040',
          950: '#262626',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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