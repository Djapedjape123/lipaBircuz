# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Build i SEO (prerender)

`npm run build` radi tri koraka: `vite build` (klijent), `vite build --ssr` (server bundle) i `scripts/prerender.mjs`,
koji za svaku rutu upisuje statički HTML u `dist/` (sadržaj stranice + njen title, description i canonical) i `dist/404.html`.
Izgled se ne menja: u browseru React hidrira isti HTML. Botovi bez JavaScript-a (Facebook, Viber, AI crawleri) vide pravi sadržaj.

Nova stranica:

1. dodaj rutu u `src/routes.jsx` (stranica treba da koristi `<SEO ... />`; za stranice koje ne idu u pretragu `<SEO noindex />`)
2. dodaj URL u `public/sitemap.xml` (osim ako je `noindex`)
3. dodaj putanju u listu `rewrites` u `vercel.json`

Posle `npm run build` u `dist/` mora da postoji `dist/<ruta>/index.html`.

Napomena: u dev režimu (`npm run dev`) React StrictMode i `react-helmet-async` privremeno brišu meta tagove (title, description, canonical) iz head-a. To se dešava samo u dev-u; u build-u radi ispravno.
SEO tagove proveravaj preko `npm run build && npm run preview` (ili u `dist/`).
