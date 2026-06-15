# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Manacode Portfolio

  Professional landing page for Manacode, an app developer company.

  ## Tech stack

  - React
  - TypeScript
  - Vite
  - GitHub Pages

  ## Local development

  Run dev server:

  ```bash
  npm run dev
  ```

  Build production bundle:

  ```bash
  npm run build
  ```

  ## Deployment

  Push to `main`, then GitHub Actions deploys `dist` to GitHub Pages.

  Repository settings needed:

  1. Open `Settings` → `Pages`.
  2. Set `Source` to `GitHub Actions`.
  3. Push this project to `https://github.com/manarul04/manacode-portfolio`.

  Public URL after deployment:

  `https://manarul04.github.io/manacode-portfolio/`
      // Other configs...
