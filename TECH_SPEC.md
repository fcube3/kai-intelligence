# Tech Spec — Kai Intelligence

## Architecture

```
┌─────────────────────────────────────┐
│  Next.js App (Vercel)               │
│                                     │
│  page.tsx ─── daily-intel.json      │
│  /archive/[date] ─── public/data/   │
│  /api/prices ─── goldprice.org      │
│  /api/archive ─── reads public/     │
│                                     │
│  Components: LivePriceTicker,       │
│  PredictionFunnel, ArchiveList,     │
│  InstitutionalForecasts, etc.       │
└─────────────────────────────────────┘
```

## Data Flow

1. `daily-intel.json` — static JSON, updated by OpenClaw cron, committed to repo
2. `/api/prices` — proxies goldprice.org for live XAU/XAG/BTC prices (10s cache)
3. `/api/archive` — reads `public/data/archive/` directory for past briefings
4. Archive pages fetch JSON from `public/data/archive/YYYY-MM-DD.json`

## KV Schema

None. This app uses no KV storage.

## API Routes

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/prices` | None | Live gold/silver/crypto prices |
| GET | `/api/archive` | None | List of archived briefing dates |

## Auth Model

None — public dashboard.

## Env Vars

None required.

## Known Limitations

- Price API depends on goldprice.org availability
- Daily intel is static JSON — requires cron/manual update
- Archive relies on filesystem; works on Vercel but limited by deployment contents
