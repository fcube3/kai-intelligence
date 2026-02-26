# Kai Intelligence

Market intelligence dashboard — strategic briefing for hard assets (gold, silver, crypto, macro).

## Local Setup

```bash
npm install
npm run dev
# Open http://localhost:3000
```

No env vars required — this app is public (no auth).

## Features

- Live gold/silver/BTC price ticker (via goldprice.org API)
- Daily intel briefing from `data/daily-intel.json`
- Social intelligence stream
- Institutional forecasts
- Prediction funnel
- Archive browser (historical briefings from `public/data/archive/`)
- Multi-language support (EN/中文/عربي)

## Env Vars

None required. This app has no server-side secrets.

## Deploy

```bash
vercel --prod
```

## Updating Content

Edit `src/data/daily-intel.json` for daily briefings. Add archive files to `public/data/archive/YYYY-MM-DD.json`.

## Cron

The OpenClaw cron that updates `daily-intel.json` should target this repo's data file and redeploy.
