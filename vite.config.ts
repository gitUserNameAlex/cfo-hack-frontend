import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/App': '/src/App',
      '@/components': '/src/components',
      '@/store': '/src/store',
      '@/types': '/src/types',
      '@/config': '/src/config',
      '@/styles': '/src/styles',
    },
  },
});
