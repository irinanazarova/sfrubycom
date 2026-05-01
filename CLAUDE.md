# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SF Ruby Community website (sfruby.com) - a static site for the San Francisco Ruby community featuring conference talks, jobs, startups, and meetups.

## Tech Stack

- **Framework**: Astro 5.8 with TypeScript
- **Styling**: Tailwind CSS 3.4 with tailwindcss-animate
- **Hosting**: Netlify (static build to `dist/`)
- **Node**: 18+

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Fetch external data + build (production)
npm run build:dev    # Build without fetching data (faster for local dev)
npm run preview      # Preview production build
npm run fetch-data   # Fetch Google Sheets + Luma events data
```

## Architecture

### Data Flow

Content comes from three sources:
1. **Google Sheets** - Talks, startups, news (fetched via `scripts/fetch-sheets.js`)
2. **Luma API** - Meetup events (fetched via `scripts/fetch-luma-events.js`)
3. **Hand-maintained JS files** - Jobs (`src/data/jobs.js`), meetup recordings (`src/data/meetup-recordings.js`), hosts, sponsors, speakers, schedule

Sheet/Luma data is fetched at build time and saved to `src/content/*.json`. The `src/data/*.js` files export this data with helper functions. Jobs do **not** flow through Google Sheets — edit `src/data/jobs.js` directly.

### Directory Structure

- `src/pages/` - Astro page routes (index, talks, startups, jobs, news, photos, about)
- `src/components/` - Reusable Astro components (cards, modals, layout elements)
- `src/layouts/` - BaseLayout.astro and Layout.astro page wrappers
- `src/data/` - JavaScript data exports with helpers (talks, speakers, jobs, startups, sponsors, schedule)
- `src/content/` - JSON data fetched from external sources
- `src/utils/` - TypeScript utilities and type definitions
- `scripts/` - Build-time data fetching scripts

### Key Types (src/utils/types.ts)

- `Startup` - Company info with funding stage, team size, Ruby usage
- `Job` - Job listing with company, location, experience level
- `Talk` - Conference talk with speaker, YouTube link, topic tags
- `Meetup` - Event from Luma with date, location, registration count
- `NewsItem` - News article with category, source, startup reference

### Environment Variables

Required for `npm run build` (data fetching):
- `SHEET_STARTUPS_CSV_URL`, `SHEET_NEWS_CSV_URL`, `SHEET_TALKS_CSV_URL` - Google Sheets CSV export URLs
- `LUMA_API_KEY`, `LUMA_CALENDAR_ID` - Luma API access

## Key Patterns

- **Static Generation**: All pages pre-rendered; no server-side runtime
- **Minimal JS**: Uses inline `<script>` tags in components for interactivity (modals, filtering)
- **Modal System**: TalkModal, StartupModal, EmailModal components use embedded JavaScript
- **URL Parameters**: Shareable URLs for talks via `?talk=id` query param

## Allowed Tools

- **Playwright**: Using Playwright MCP or browser automation is allowed for testing and visual inspection of the site
