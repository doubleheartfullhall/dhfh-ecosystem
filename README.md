# DHFH Ecosystem

Experience design concept for Double Heart Full Hall (DHFH), a bilingual learning ecosystem that blends stories, tactile play, and AI-guided conversation. This repository houses a Next.js 14 App Router project using TypeScript and Tailwind CSS.

## Development setup

### Local machine (full toolchain available)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000) to explore the experience. Hot reloading is enabled for files under `app/`, `components/`, `lib/`, and `data/`.

### Cloud environments (Codespaces, Vercel preview, or restricted npm installs)
If npm registry access is blocked, skip `npm install` and run the Next.js dev server with the dependencies preinstalled by the platform:
```bash
npm run dev
```
- **Vercel**: connect the repo and set the environment variables below. Vercel will handle installs/builds; use `npm run build` and `npm run start` for production previews when dependencies are available.
- **GitHub Codespaces**: create a codespace, then run `npm install` (if permitted) followed by `npm run dev`. If installs are blocked, use the Vercel preview flow for testing.

### Helpful scripts
- `npm run dev` – start the Next.js development server
- `npm run build` – generate a production build
- `npm run start` – run the production server
- `npm run lint` – lint the project (stubbed when ESLint deps are unavailable)
- `npm run typecheck` – run TypeScript in strict mode
- `npm run test` – execute the Pinyin toggle unit test

## Environment variables
Configure the following variables for deployments. Keep secrets in `.env.local` (do **not** commit this file).

| Variable | Purpose |
| --- | --- |
| `NODE_ENV` | Standard Next.js runtime environment flag |
| `NEXT_PUBLIC_SITE_URL` | Base URL used for generating shareable links |
| `SUPABASE_URL` | Placeholder for future Supabase integration |
| `SUPABASE_ANON_KEY` | Placeholder anonymous key for Supabase |
| `STRIPE_SECRET_KEY` | Reserved for future billing integration |
| `STRIPE_WEBHOOK_SECRET` | Reserved for Stripe webhook verification |

## Project structure

```
.
├── app/                    # App Router routes and layouts
│   ├── api/                # Route handlers (claim, consent)
│   ├── onboarding/         # Onboarding flow pages
│   ├── reader/             # Story reader experience
│   └── world/              # World selection hub
├── components/             # Shared UI components (toggles, cards, headers)
│   └── auth/               # In-memory auth provider & guard
├── data/                   # Sample story JSON payloads
├── lib/                    # Auth, content, i18n, and pinyin helpers
├── public/
│   └── dhfh/               # Brand assets used across the app
│       ├── characters/
│       ├── icons/
│       ├── stories/
│       └── worlds/
├── tests/                  # Vitest unit tests
├── types/                  # Ambient TypeScript declarations
└── README.md
```

## Smoke test checklist
1. Visit `/qr?code=DHFH-KITCHEN-STARTER-001`.
2. Submit the code and ensure the Kitchen realm appears as unlocked on `/world`.
3. Open the reader for the unlocked story.
4. Use the pinyin toggle to switch between **Show**, **Hide**, and **Tap** modes to confirm text rendering.

## Architecture notes
- The app currently uses an in-memory auth and profile client (`lib/auth/memoryClient.ts`) that stores state in the browser. Replace this with Supabase or another persistent backend when ready.
- Localization strings are centralized in `lib/i18n.ts` for English and Simplified Chinese copy.
- Story rendering consumes JSON content under `data/` to make local iteration straightforward.

## Deployment
The project is designed for [Vercel](https://vercel.com/) but can deploy anywhere that supports Next.js. For production builds, run:
```bash
npm run build
npm run start
```
Ensure the environment variables above are configured in your hosting provider before deploying.
