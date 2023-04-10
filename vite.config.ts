import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import eslintPlugin from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: true })],
});
