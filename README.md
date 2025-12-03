# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## SEO-Friendly cPanel Deployment

This application is configured for SEO-friendly static deployment on cPanel with the following features:

### 1. Clean URLs (BrowserRouter)
- Uses `BrowserRouter` instead of `HashRouter` for clean URLs
- URLs like `/about` instead of `/#/about` for better SEO

### 2. Apache Rewrite Rules (.htaccess)
- Includes `.htaccess` file in `public/` directory
- Enables client-side routing to work correctly on Apache servers
- Ensures page refreshes work properly for all routes

### 3. Deployment Instructions

To deploy to cPanel:

1. Build the application:
   ```bash
   npm install
   npm run build
   ```

2. Upload the contents of the `dist/` folder to your cPanel public_html directory

3. The `.htaccess` file will ensure all routes work correctly

### Pre-rendering Note

The initial configuration called for `vite-plugin-prerender@^1.4.0`, but this version does not exist. The latest available version (1.0.8) has compatibility issues with Vite 7+ due to ES module `require()` usage that causes build failures.

#### Why Pre-rendering?
Pre-rendering generates static HTML files for each route at build time, which improves:
- Initial page load time
- SEO (search engines get fully rendered HTML)
- Performance on slow connections

#### Alternative Solutions
For pre-rendering functionality in the future, consider using modern alternatives:
- [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) - React-specific SSG for Vite
- [vite-ssg](https://github.com/antfu-collective/vite-ssg) - General SSG plugin for Vite

#### Example Configuration
If using a compatible pre-rendering plugin, the configuration would be:

```javascript
// vite.config.js
import vitePrerender from "vite-plugin-prerender";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/About', '/Doctors', '/Gallery', '/Contact', '/Blog', '/Testimonials', '/Bookappoinment', '/Insurance']
    })
  ]
});
```

The critical SEO improvements (BrowserRouter + .htaccess) are fully functional without pre-rendering.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
