import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/recipe_project2/', // Ensure this matches your GitHub repository name
});


