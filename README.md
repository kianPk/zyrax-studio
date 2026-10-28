# Zyrax Studio

**Kian Zarandi** (`@kianPk`) — 3D & interactive studio homepage.

Live: [kianpk.github.io/zyrax-studio](https://kianpk.github.io/zyrax-studio/)

Visual / layout homage to [lusion.co](https://lusion.co/) — Aeonik-style type, jack balloon hero (`.buf` geometry + packed EXR matcap + physics), branded for Zyrax / Kian. Not affiliated with Lusion.

## Stack

- Vite · Three.js · GSAP · Lenis
- Frontend: GitHub Pages (`docs/`)
- API: Cloudflare Worker (`worker/`) — projects + contact → Telegram

## Run (frontend)

```bash
npm install
cp .env.example .env   # optional: set VITE_API_URL
npm run dev
npm run build          # writes to docs/ for Pages
```

## API (Cloudflare Worker)

Free always-on Worker: `GET /api/health`, `GET /api/projects`, `POST /api/contact`.

```bash
npx wrangler login
npm run worker:dev       # local API on :8787
npm run worker:deploy    # publish to *.workers.dev
```

Telegram secrets (required for contact form delivery):

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN --config worker/wrangler.toml
npx wrangler secret put TELEGRAM_CHAT_ID --config worker/wrangler.toml
```

Then set `VITE_API_URL` to your Worker URL (no trailing slash), rebuild, and push `docs/` / `main` for Pages.

If the Worker is down or unset, the site falls back to static `src/projects.js` and the contact form points to [Telegram](https://t.me/Kian_asli).
