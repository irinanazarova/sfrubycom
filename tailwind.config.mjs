/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ruby: {
          50: '#fdf2f5',
          100: '#fce0e9',
          200: '#fac6d8',
          300: '#f69fb9',
          400: '#f06b91',
          500: '#e0115f', // Primary ruby red
          600: '#cf0f56',
          700: '#ad0c47',
          800: '#8e0a3b',
          900: '#76083f',
          950: '#4f0224',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b', // Secondary dark blue
          900: '#0f172a',
          950: '#020617',
        },
        gold: {
          50: '#fefee8',
          100: '#fffdc2',
          200: '#fffa89',
          300: '#fff446',
          400: '#ffea14',
          500: '#ffd700', // Accent gold
          600: '#e2a500',
          700: '#c57a00',
          800: '#9c5f07',
          900: '#7c4d0b',
          950: '#472804',
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