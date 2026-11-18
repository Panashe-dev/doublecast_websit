import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Inline PostCSS config stops Vite from picking up a stray
  // postcss.config.js in a parent directory (e.g. the user's home folder).
  css: { postcss: {} },
});
