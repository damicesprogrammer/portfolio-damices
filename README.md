# Augusto D' Amices — Portfolio

Personal portfolio focused on Python, Machine Learning, AI engineering, Oracle SQL / PL/SQL, REST APIs and system integrations. Available in English and Portuguese.

Live site: https://damicesprogrammer.github.io/portfolio-damices/

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing)
- TypeScript
- Tailwind CSS 4
- Vite
- Vitest + Testing Library

## Editing content

All text, links and project data live in `src/content/portfolio.ts` (one block per language).

## Local development

Requires Node.js 22+ and npm.

```sh
git clone https://github.com/damicesprogrammer/portfolio-damices.git
cd portfolio-damices
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Tests and checks

```sh
npm test          # unit tests (Vitest)
npm run lint      # ESLint
npx tsc --noEmit  # type check
```

## Production build

```sh
npm run build
```

Produces an SSR build in `.output/` (Nitro). Run it with `node .output/server/index.mjs`.

## GitHub Pages

The site is deployed as static HTML by `.github/workflows/deploy-pages.yml` on every push to `main`. The workflow builds with `PAGES_BASE_PATH` set, which prerenders every page under that base path:

```sh
PAGES_BASE_PATH=/portfolio-damices/ npm run build
```

The static site is written to `dist/client`.
