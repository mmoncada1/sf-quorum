# SF Quorum

**A public accountability portal for the San Francisco Board of Supervisors.**

Track every ordinance, resolution, and motion before the Board — translated into
plain English — alongside a live, sports-style scorecard of how each of the 11
district supervisors actually votes, what they focus on, and who gets things
done.

> Independent, nonpartisan civic transparency. Data comes straight from the
> City's own public legislative record.

---

## What it does

- **Live legislation feed** — recent items from the Board and its committees,
  each with an auto-generated plain-English ("ELI5") summary.
- **Supervisor dossiers** — per-district voting record, attendance, focus areas,
  authored legislation, and an auto-written "scouting report".
- **The Leaderboard** — supervisors ranked like athletes on Impact, Activity,
  Attendance, and Independence, with letter grades.
- **Roll-call breakdowns** — exactly how each supervisor voted on each action.

## Data source

San Francisco publishes its legislative record through Legistar at
`sfgov.legistar.com`. The official Legistar Web API mirror for SF stopped
updating around 2018, so SF Quorum reads the **live public site** directly:

```
Calendar.aspx (per-year)  ->  meetings
MeetingDetail.aspx        ->  agenda items (legislation)
LegislationDetail.aspx    ->  metadata + sponsors + action history
HistoryDetail.aspx        ->  per-supervisor roll-call votes
```

Fetches are cached on disk (`.cache/`) and rate-limited to be polite.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- **Prisma** + **SQLite** for storage
- **cheerio** for HTML parsing of the live record
- Plain-English summaries are pluggable: deterministic heuristic by default, or
  an LLM if `OPENAI_API_KEY` is set.

## Getting started

> Requires **Node 20+** (the scraper's HTTP stack needs the `File` global).
> An `.nvmrc` is included — run `nvm use`.

```bash
npm install
npm run db:push        # create the SQLite schema
npm run refresh        # ingest + enrich + compute (pulls live SF data)
npm run dev            # http://localhost:3000
```

### The data pipeline

```bash
npm run ingest         # crawl sfgov.legistar.com -> SQLite
npm run enrich         # classify topics + write plain-English summaries
npm run compute        # compute supervisor stats + leaderboard rankings
npm run refresh        # all three, in order
```

Useful environment knobs (see `.env`):

| Variable | Default | Purpose |
| --- | --- | --- |
| `INGEST_YEARS` | current year | Comma-separated years to crawl |
| `INGEST_MAX_MEETINGS` | `12` | Most-recent meetings to ingest |
| `INGEST_BOARD_ONLY` | unset | Only full Board of Supervisors meetings |
| `ENRICH_FORCE` | unset | Re-summarize everything |
| `OPENAI_API_KEY` | unset | Enable LLM summaries |

Re-running is cheap and idempotent: HTML is cached and all DB writes are upserts.

## Scoring

Sub-scores are **relative to the current Board** (category leader = 100). Overall
= 40% Impact + 30% Activity + 20% Attendance + 10% Independence. Full details on
the in-app **Methodology** page (`/methodology`).

## Disclaimer

Not affiliated with the City & County of San Francisco or any official, campaign,
or party. Scores are computed mechanically from public data and are a starting
point for scrutiny, not a verdict. Always consult the official record for legal
specifics.
