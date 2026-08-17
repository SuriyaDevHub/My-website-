import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from a GitHub Pages project site (https://<user>.github.io/My-website-/),
// so assets must resolve relative to that subpath rather than the domain root.
export default defineConfig({
  plugins: [react()],
  base: './',
});
