<h1 align="center">first-website</h1>

<p align="center">A small website built from a Payload CMS backend and a Next.js frontend that renders pages from CMS-defined content blocks.</p>

## Why

Page content lives in the CMS as an ordered list of blocks, so an editor can build and rearrange pages in the admin panel without touching frontend code. The frontend fetches each page by slug and renders its blocks.

This is a learning project. There is no hosted demo, screenshot or test suite in the repo.

## Layout

- `src/` is the Payload 2 backend (Express, MongoDB). It defines the `pages`, `typicalHero`, `media` and `users` collections, the `header` and `footer` globals, and the form builder plugin. Block definitions are in `src/blocks/`: call to action, form, hero, rich text, slider, two column.
- `own-website-frontend/` is the Next.js 14 frontend (Pages Router, Tailwind, SCSS). `src/pages/[[...slug]].js` requests `/api/pages` at build time, then renders each page's `layout`. `src/blocks/blockList.js` maps block types to React components.

## Run it locally

Needs Node, Yarn and a MongoDB instance.

Backend:

1. `cp .env.example .env` and set `DATABASE_URI` and `PAYLOAD_SECRET`.
2. `yarn` then `yarn dev`. The server listens on port 4000 and redirects `/` to `/admin`.
3. Open `http://localhost:4000/admin` and create the first admin user.

Frontend:

1. In `own-website-frontend/`, create `.env.local` with `NEXT_PUBLIC_BACKEND_URL=http://localhost:4000`.
2. `npm install` then `npm run dev`, and open `http://localhost:3000`.

The frontend's `dev` and `build` scripts first run `scripts/fetchGlobalData.js`, which needs the backend running to fetch the header and footer globals. CORS in `src/payload.config.ts` only allows `http://localhost:3000`.

## Production build

`yarn build` builds the admin bundle and compiles the server into `dist/`; `yarn serve` runs it. For the frontend, `npm run build` then `npm run start`.

## Known rough edges

- The backend `dev` script in `package.json` runs `nodemon server.js`, but `nodemon.json` overrides the command with `ts-node src/server.ts`.
- `scripts/fetchGlobalData.js` writes to `src/globalData/`, while the committed directory is `src/GlobalData/`, and the imports of those JSON files in `Header.jsx` and `Footer.jsx` are commented out. On a case-sensitive filesystem the write will fail unless that directory exists.
- `.env.example` is still the Payload blank template's; it has no frontend variable.
