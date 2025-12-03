import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// NOTE: Pre-rendering is not configured because vite-plugin-prerender@^1.4.0 does not exist
// and version 1.0.8 has compatibility issues with Vite 7+.
// See README.md for details and alternative solutions.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/" // use root base so assets resolve correctly on Vercel
});
