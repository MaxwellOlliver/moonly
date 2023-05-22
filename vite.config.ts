import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPath from 'vite-tsconfig-paths';
//import eslintPlugin from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: true }), svgr(), tsconfigPath()],
  base: '/moonly/',
});
