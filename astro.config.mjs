import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    esbuild: {
      target: 'es2020'
    },
    optimizeDeps: {
      include: ['animejs']
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'anime': ['animejs'],
          }
        }
      }
    },
    ssr: {
      noExternal: ['animejs']
    }
  }
});