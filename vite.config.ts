import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Use automatic JSX runtime (React 19)
      jsxRuntime: 'automatic',
    }),
  ],
  base: '/',
  build: {
    // Output to dist directory
    outDir: 'dist',
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
        unused: true,
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep vendor code separate for better caching
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Generate source maps for debugging (disable for production)
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Asset optimization
    assetsInlineLimit: 4096, // inline assets < 4kb
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@sections': '/src/sections',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
