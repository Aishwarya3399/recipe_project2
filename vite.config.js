import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  base: '/recipe_project2/', // Ensure base path is correct for GitHub Pages
  build: {
    outDir: 'dist', // Ensure the build goes to the 'dist' folder
    rollupOptions: {
      input: 'index.html', // Ensure Vite knows where to find the main HTML entry file
    },
  },
});

