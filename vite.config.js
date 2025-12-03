import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// NOTE: Pre-rendering configuration
// The problem statement requests vite-plugin-prerender@^1.4.0, but this version does not exist.
// The latest available version (1.0.8) has compatibility issues with Vite 7+ due to ES module
// require() usage that causes build failures.
//
// For pre-rendering functionality in the future, consider using modern alternatives:
// - vite-react-ssg (https://github.com/Daydreamer-riri/vite-react-ssg)
// - vite-ssg (https://github.com/antfu-collective/vite-ssg)
//
// The critical SEO improvements are already implemented:
// 1. BrowserRouter for clean URLs (in src/main.jsx)
// 2. .htaccess for proper Apache routing (in public/.htaccess)
//
// Example configuration if using a compatible pre-rendering plugin:
// import vitePrerender from "vite-plugin-prerender";
// import path from "path";
// import { fileURLToPath } from "url";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// plugins: [
//   react(),
//   vitePrerender({
//     staticDir: path.join(__dirname, 'dist'),
//     routes: ['/', '/About', '/Doctors', '/Gallery', '/Contact', '/Blog', '/Testimonials', '/Bookappoinment', '/Insurance']
//   })
// ]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/" // use root base so assets resolve correctly on Vercel
});
