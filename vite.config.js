// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@assets': path.resolve('./src/assets'),
      '@constants': path.resolve('./src/constants'),
      '@styles': path.resolve('./src/styles'),
    },
  },
  server: {
    port: 4321,
    host: "0.0.0.0",
    strictPort: true,
    hmr: {
      overlay: true,
    },    // Allow ngrok, Vercel, and other domains as needed
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      // ngrok hosts
      '*.ngrok-free.app',
      '2618-2a09-bac1-3680-3ef8-00-1c5-72.ngrok-free.app',
      // Vercel hosts
      '*.vercel.app',
      'vercel.app',
      '*.now.sh',
      // Allow any domain for production
      'localhost:4321'
    ],
    // Required for Vercel hosting
    cors: true
  }
});
