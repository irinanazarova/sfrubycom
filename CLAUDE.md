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

Sheet/Luma data is fetched at build time and saved to `src/content/*.json`. The `src/data/*.js` files export this data with helper functions. Jobs do **not** flow through Google Sheets — edit `src/data/jobs.js` directly. (`src/content/jobs.json` is unused; the plumbing was removed in commit `833216b`.)

### Directory Structure

- `src/pages/` - Astro page routes (index, talks, startups, jobs, news, photos, about)
- `src/components/` - Reusable Astro components (cards, modals, layout elements)
- `src/layouts/` - BaseLayout.astro and Layout.astro page wrappers
- `src/data/` - JavaScript data exports with helpers (talks, speakers, jobs, startups, sponsors, schedule)
- `src/content/` - JSON data fetched from external sources
- `src/utils/` - TypeScript utilities and type definitions
- `scripts/` - Build-time data fetching scripts
- `drafts/` - Gitignored. Monthly Substack drafts live here as a pair: `substack-YYYY-MM-[month].md` (working draft) and `.html` (paste-ready, since Substack's editor doesn't parse Markdown).
- `src/pages/news/YYYY-MM.astro` - Per-issue archive pages. When publishing a new monthly issue, keep prior issue pages intact for archive linking.

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

## Data Quality & Editorial Conventions

These rules apply to all content edits (jobs, talks, news, startups, meetup recordings, drafts).

### Verify names against authoritative sources

- **Speaker names**: rubyevents.org is canonical. Match its spelling exactly (recent corrections: "Sergy Sergyenko", "Ronan Potage", "Anonoz Chong").
- **Project / gem / library names**: confirm via `rubygems.org/api/v1/gems/<name>.json`, the speaker's GitHub, or the project landing page.
- **YouTube auto-captions mangle Ruby vocabulary.** Past mishears that almost shipped: "Reagance" → **Ragents**, "ametronet-js" → **garnet-js**, "Ubloud" → **ubicloud**, "gem.cop" → **gem.coop**. If a captioned name looks like an English word, assume it's wrong and verify. Prefer URLs/repo names shown on-screen over caption transcriptions.

### Ruby ≠ Rails

Several major Ruby companies don't use Rails. Don't say "Rails" when you mean "Ruby":

- **Stripe** — Sinatra + internal framework. Not Rails.
- **Ubicloud** — Roda. Not Rails.

Use "Ruby-based" when mixing Rails and non-Rails companies. Use "Rails" only when confirmed via the company's tech blog or current job postings.

### Editorial voice for SF Ruby copy

When writing news, social posts, or homepage copy: lead with what Ruby **IS** (winning, dynamic, shipping, growing), not what it isn't. Avoid the "Rails is dead" trope in any form — even ironic subversion centers the frame we're trying to displace.

## Maintenance Workflows

### Jobs board audit (`src/data/jobs.js`)

Audit URLs monthly alongside the News refresh. Stale listings erode site credibility.

- **Content-check, don't trust HTTP status.** Greenhouse, Ashby, and Thatch return 200 even for closed jobs — grep the response body for "Job not found", "Sorry, we couldn't find", or "page you're looking for isn't here".
- **JS-heavy career pages** (Whop, Persona, CompanyCam, Chime) defeat WebFetch. Use Playwright MCP, then evaluate `document.body.innerText` or extract `/jobs/` anchors.
- **Replace, don't just remove.** When a listing closes, check the same company's careers page for an equivalent Ruby/Rails opening and swap in-place. Drop entirely only if no equivalent exists.
- **Keep a paper trail.** Move closed listings to commented-out blocks at the bottom of `jobs.js` under the `ARCHIVED` header.
- After deploying, re-content-check every outbound job URL on prod.

### Verifying changes locally

- `npm run build:dev` — fast syntax check without env vars or external fetch. Use this after editing data files.
- `npm run build` — full build, requires Sheet/Luma env vars.

### Mobile experience review (run after any layout/card/list change)

Most of our traffic is mobile, and the site should feel like a native iOS app, not a desktop page shrunk down. Default to designing the mobile layout first, then widening for desktop with `sm:`/`lg:` modifiers. Reuse desktop structure on mobile only when it genuinely fits.

After changing any card, list, or content layout, review it with Playwright MCP at 390x844 against this checklist:

- **Vertical density.** Cards/rows should not waste height. Measure: aim for 3+ list items visible per screen. The classic trap (which bit `/jobs`): a desktop multi-column horizontal `flex` (logo │ content │ action) forced onto mobile starves the middle column to ~140px, so meta chips that should flow as a horizontal wrapping row instead stack vertically and wrap internally. Fix by stacking columns on mobile (`flex-wrap` + a `w-full` action row, or `flex-col sm:flex-row`) so content gets the full width. Verify by measuring `.getBoundingClientRect().height` before/after.
- **Touch targets.** Interactive elements ≥ 44x44px (iOS HIG). Buttons full-width or comfortably wide; don't rely on hover-only affordances (touch has no hover, e.g. the copy-link is forced visible under `max-width: 1023px`).
- **Native-feel details.** Momentum scroll not trapped in inner scrollers (`overscroll-behavior: contain` on sheets); sticky bars use `backdrop-blur` and sit at the right z-index; respect safe-area insets on notched devices (`env(safe-area-inset-*)`) for any fixed bottom bar; no horizontal overflow (assert `document.documentElement.scrollWidth <= innerWidth`). Keep the brand fonts (Martian Grotesk/Mono); don't swap to a system stack.
- **Tap feedback.** Primary actions give a pressed state (use the global `.tap-press` helper, which only fires on `(hover: none)` touch devices). The global tap-highlight flash is already suppressed in `global.css`.
- **No layout shift / starved text.** Titles shouldn't wrap to 3+ lines from a squeezed column; long values (salary, location) shouldn't break mid-word.

Take a screenshot and actually look at it. Numbers confirm density; eyes confirm it reads like an app.

### Mobile chrome architecture (tab bar + sheet)

The mobile experience has two pieces of native-style chrome. When adding pages or fixed/sticky UI, respect their z-index contract:

- **Bottom tab bar** (`src/components/BottomNav.astro`): fixed bottom, mobile-only (`lg:hidden`), `ogplus:hidden`, at **`z-40`**. It is the **sole mobile nav** (the hamburger menu was removed on mobile), so it carries every destination: the first five (Home / Jobs / Slack / Videos / Join) fill the screen and the rest (Sponsor / Conf / News / Startups / About) are reached by scrolling the bar horizontally. The tab list is data-driven (`tabs` array in the component); add destinations there. The bar scrolls via `.tab-scroll` (hidden scrollbar, right-edge mask fade hints there is more). Pages give content bottom clearance with the `pb-tabbar` body class, and the bar pads its own `pb-safe`. **The site has three page-shell patterns and the tab bar must be in all of them:** `BaseLayout.astro`, `Layout.astro`, and the standalone pages that build their own `<body>` (`index.astro`, `sponsor-2026.astro`, `conference-2026.astro`). A new top-level page that defines its own `<body>` must import `BottomNav`, add `pb-tabbar` to the body, and use the `viewport-fit=cover` meta (so safe-area insets resolve).
- **Jobs filter sheet** (`/jobs`, `#filter-panel` + `#filter-backdrop`): an iOS bottom sheet (rounded top, grab handle, drag-to-dismiss, dim backdrop). Backdrop `z-45`, sheet `z-46`, both above the tab bar so the sheet covers it. Pattern to reuse for any future mobile sheet.

The hamburger trigger (`#mobile-menu-button` in `Header.astro` / `Navigation.astro`) is hidden on every viewport; desktop uses the inline horizontal `<nav>`, mobile uses the tab bar.

z-index ladder (mobile): page stickies `≤ z-30` < tab bar `z-40` < jobs sheet `z-45/46`.

Quick check (390x844): `document.getElementById('bottom-nav')` exists; at full scroll the lowest content link clears the tab bar top; no horizontal overflow.

### Header logo contrast (`darkHero` contract)

`Header.astro` (the `BaseLayout` shell) starts as a **transparent** header with the **white** logo, then swaps to a solid white header with the **dark** logo once scrolled past 50px. That transparent/white-logo state only reads on a **dark hero**. A `BaseLayout` page whose top section is light (`bg-white`, `bg-gray-50`, `from-gray-50`, etc.) must pass **`darkHero={false}`**, which starts the header solid with the dark logo so the logo isn't invisible on a light background at the top.

Pages currently marked `darkHero={false}`: `about`, `news/index`, `startups/index`, `jobs/post`, `404`, `design-system`. Dark-hero pages (`/`, `/jobs`, `/videos`, `/photos`, `/host`, the monthly `news/YYYY-MM`, `conference-2026`, `sponsor-2026`) keep the default `darkHero={true}`. `Navigation.astro` (the `Layout` shell) always uses the dark logo on a solid header, so it is unaffected.

When adding a `BaseLayout` page, check the first section's background and set `darkHero` accordingly. QA: at 390x844, the header logo must be legible at scroll-top (`.header-logo-white` visible only over a dark hero; otherwise `.header-logo-dark` on a solid header).

### Mobile regression check (run after any header/overlay/sticky change)

There is no hamburger menu on mobile; the bottom tab bar is the only mobile nav (the `#mobile-menu-button` is hidden on all viewports). Page-level `sticky`/`fixed` bars must stay `≤ z-30` so they sit below the tab bar (`z-40`) and jobs sheet (`z-45/46`).

Verify with Playwright at 390x844 for each top-level route (`/`, `/jobs`, `/videos`, `/startups`, `/about`, `/news`, `/sponsor-2026`):

1. `#bottom-nav` exists and is visible; it scrolls horizontally to reveal all ten tabs (`.tab-scroll` scrollWidth > clientWidth).
2. `#mobile-menu-button` is not visible (`display: none`).
3. No horizontal overflow: `document.documentElement.scrollWidth <= innerWidth`.
4. Header logo is legible at scroll-top (see `darkHero` contract above).

A standalone Playwright runner lives in scratchpad during development (`node _qa.mjs` from the project root, since it needs the project's `node_modules`); the MCP browser is often locked by a live session.

## Allowed Tools

- **Playwright**: Using Playwright MCP or browser automation is allowed for testing and visual inspection of the site
