# DHFH Ecosystem

Experience design concept for Double Heart Full Hall (DHFH), a bilingual learning ecosystem that weaves stories, tactile exploration, and AI-guided conversation. This repository contains a Next.js 14 App Router project with Tailwind CSS for styling.

## Getting started

Install dependencies:

```bash
npm install
```

Run a local development server:

```bash
npm run dev
```

Then navigate to [http://localhost:3000](http://localhost:3000) to view the site. Edits to files inside the `app` directory will hot reload instantly.

## Project structure

- `app/layout.tsx` – root layout including global metadata and fonts
- `app/page.tsx` – assembles the homepage sections
- `app/components/` – reusable UI sections such as the hero, programs, and pilot cohort areas
- `app/globals.css` – Tailwind CSS layers and global theme overrides
- `lib/content.ts` – central data and copy used across the landing page
- `public/` – static assets served directly by Next.js

## Scripts

- `npm run dev` – start the Next.js dev server
- `npm run build` – create a production build
- `npm run start` – run the production server
- `npm run lint` – lint the project using ESLint

## Deployment

The project can be deployed to any platform that supports Next.js, such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Build the app with `npm run build` and serve with `npm run start`.
