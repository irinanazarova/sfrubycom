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
npm run fetch-data   # Fetch Luma events data
```

## Architecture

### Data Flow

Content comes from two sources:
1. **Luma API** - Meetup events (fetched via `scripts/fetch-luma-events.js`)
2. **Hand-maintained files** - Jobs (`src/data/jobs.js`), startups (`src/data/startups.js`), meetup recordings (`src/data/meetup-recordings.js`), hosts, sponsors, speakers, schedule; news (`src/content/news.json`) and talks (`src/content/talks.json`)

Luma data is fetched at build time and saved to `src/content/*.json`. The `src/data/*.js` files export this data with helper functions. Everything else is edited directly in the repo — the old Google Sheets plumbing for news/talks and jobs/startups has been removed (jobs in commit `833216b`).

### Directory Structure

- `src/pages/` - Astro page routes (index, talks, startups, jobs, news, photos, about)
- `src/components/` - Reusable Astro components (cards, modals, layout elements)
- `src/layouts/` - BaseLayout.astro and Layout.astro page wrappers
- `src/data/` - JavaScript data exports with helpers (talks, speakers, jobs, startups, sponsors, schedule)
- `src/content/` - JSON data (fetched Luma events; hand-edited news and talks)
- `src/utils/` - TypeScript utilities and type definitions
- `scripts/` - Build-time data fetching scripts
- `drafts/` - Gitignored. Monthly Substack drafts live here as a pair: `substack-YYYY-MM-[month].md` (working draft) and `.html` (paste-ready, since Substack's editor doesn't parse Markdown).
- `src/pages/speakers.astro` - The 2026 lineup in full: a character-select jump index, then one profile card per speaker. Merges two sources on `speakerKey` (`src/utils/cfpTalks.js`): `src/data/conference-2026.js` owns who is confirmed plus the sprite and bio, the CFP feed owns the talk title and abstract. Titles/abstracts are baked in from the `src/content/cfp-talks.json` snapshot and refreshed client-side from the live API, the same contract `SpeakerRoster.astro` uses on the homepage. The 2025 lineup lives on unchanged at `/speakers-2025` (`speakers-2025.astro`), which `/schedule-2025` and `getSpeakerOGMetadata` deep-link into. The 2025 schedule moved alongside it: `schedule-2025.astro`, with `/schedule` 302ing there until a 2026 schedule takes that URL.
- `src/pages/index.astro` - The conference homepage, ordered hero → `Pier` → `SpeakerRoster` (4 speakers) → `WhatYouHear` → `ConferenceNetworking` → `TicketLadder` → venue → sponsors → tickets → community → `IslandNav`. Its message follows the launch post, [Why engineers should come to the SF Ruby Startup Conference in 2026](https://evilmartians.com/chronicles/why-engineers-should-come-to-the-sf-ruby-startup-conference): the program is built for engineers who read and write Ruby, and founders come to meet them. Keep hero copy, meta description and section headings on that line; the homepage roster is a 4-speaker teaser whose CTA carries the rest to `/speakers`.
- `src/components/Pier.astro` - The Pier (clouds.sfruby.com), the pre-conference game, sitting directly under the hero because a ticket is what unlocks it. Everything in it is exported from the live game rather than written here: `public/pier-map-1600.webp` is the game's own OG map (`public/pier-map-detail.webp` is a crop around SFJAZZ for phones, served through a `<picture>` so only one is fetched), the quest list carries the game's real point values, and `public/cloudcard_2026_*.webp` are published Cloud Cards. Refresh them from the game when the quests change; a quest list that disagrees with the game is worse than no quest list. It replaced `ConferenceQuest.astro`, which described the game without showing it.
- `src/components/WhatYouHear.astro` - The two content arguments for a ticket, in the launch post's order: agentic Rails already in production (Fin, Anthropic, Order.co, RubyLLM) and the authors of the gems in your Gemfile (Solid Queue, GoodJob, Sidekiq, AnyCable, Yabeda, Herb, Ruby core). Talk titles deliberately stay on `/speakers`, where the CFP refresh owns them; this section describes what each person works on, which does not go stale.
- `src/pages/news/index.astro` - The news page: a single running feed of items from `src/content/news.json`, with search + category filters, rendered as a dense multi-column list. `src/pages/news/rss.xml.ts` generates the `/news/rss.xml` feed from the same data. There are no per-issue archive pages: the old `news/YYYY-MM.astro` monthly pages were retired in favor of the feed (with a `netlify.toml` 301 from `/news/2026-*` to `/news`). The monthly issue still ships on Substack; the site just links to it.

### Key Types (src/utils/types.ts)

- `Startup` - Company info with funding stage, team size, Ruby usage
- `Job` - Job listing with company, location, experience level
- `Talk` - Conference talk with speaker, YouTube link, topic tags
- `Meetup` - Event from Luma with date, location, registration count
- `NewsItem` - News article with category, source, startup reference

### Environment Variables

Required for `npm run build` (data fetching):
- `LUMA_API_KEY`, `LUMA_CALENDAR_ID` - Luma API access

## Key Patterns

- **Static Generation**: All pages pre-rendered; no server-side runtime
- **Minimal JS**: Uses inline `<script>` tags in components for interactivity (modals, filtering)
- **Modal System**: TalkModal, StartupModal, EmailModal components use embedded JavaScript
- **URL Parameters**: Shareable URLs for talks via `?talk=id` query param

## 8-bit Design System (2026 refresh)

The visual language derives from the pixel logo (`public/logo8bit.png`).

- **Tokens**: `src/design/tokens.mjs` is the single source of truth (palette, pixel type sizes, sky ramps, sprite legend). Consumed by `tailwind.config.mjs` and the generator scripts. After editing run `node scripts/sync-tokens.mjs && node scripts/px-gradients.mjs && node scripts/px-sprites.mjs` — never edit `src/styles/tokens.css` (generated) or the `public/px-*.png` assets by hand.
- **No raw hex outside the registry**: every color must be registered in `tokens.mjs` (including third-party brand colors like `slack`, `linkedin`, `python`). Use Tailwind palette classes (`text-ruby-600`, `bg-slack-500`), generated CSS vars in `<style>` blocks (`var(--dark-500)`, full palette emitted to `tokens.css`), or `import { palette }` for JS/canvas/meta values. `npm run lint:colors` (`scripts/check-colors.mjs`) enforces this and runs before every build; the RubyConfTH microsite and past-meetup slide pages are the only allowlisted legacy exceptions. Hex is the machine source in `tokens.mjs`; everything CSS-facing is emitted as oklch.
- **Components**: `src/styles/pixel.css` holds the `px-*` classes (px-card, px-plate, px-btn, px-dialog, px-bubble, px-crenel, px-island-btn, px-night, dithered skies). `IslandNav.astro` renders island-button rows; `NewsRunner.astro` is the news mini game. `Button`/`Badge`/`SocialLink` carry the pixel chrome — prefer them over hand-rolled markup.
- **Type**: Press Start 2P only for short display strings via `.px-font`/`font-pixel` at the pixel sizes `text-px8/px9/px10`; Martian Grotesk (`font-display`) for long headings; Martian Mono body. Never fake-bold the pixel font.
- **Docs**: `/design-system#pixel` renders the palette live from the token source.

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

### Job matching chips (`chips` on each job record)

Every job carries a hand-curated `chips: [...]` array, rendered as pills on the card so an applicant can scan the factors they match on. Chips are **manual, not parsed** — regex over-tags (e.g. "we use AI tools" is not an AI/ML role). Add or refresh them whenever you add or edit a listing.

**The controlled vocabulary lives in `CHIP_KIND` (`src/utils/jobFacets.js`).** Add a new label there first (pick its kind), then use it. Three kinds, styled distinctly and displayed focus → stack → signal:

- **focus** — what kind of work it is: `Fullstack`, `Backend`, `Frontend`, `Platform`, `Infra`, `DevOps`, `Data`, `AI/ML`, `Security`, `Payments`, `Product Eng`, `Mobile`.
- **stack** — the *differentiating* tools they'll actually use: `Hotwire`, `ViewComponent`, `Packwerk`, `Sidekiq`, `React`, `React Native`, `Vue`, `Next.js`, `TypeScript`, `GraphQL`, `PostgreSQL`, `MySQL`, `ClickHouse`, `Kafka`, `Terraform`, `Go`, `Roda`.
- **signal** — deal-makers / breakers: `Polyglot`, `Founding role`, `AI-native`, `Mentorship`, `High compliance`, `Open source`, `Profitable`, `Public benefit`.

**How to pick chips for a posting (aim for 3–5):**

1. Read the posting's stack line and "what you'll do" — chip only what *differentiates* this role. Skip the obvious: **Rails/Ruby is never a chip** (every listing is Rails), and don't chip generic Postgres/AWS unless it's a notable part of the pitch.
2. One or two **focus** chips capturing the actual work (a "Software Engineer, Backend" on an ad platform → `Backend` + `Data`, not `Fullstack`).
3. One to three **stack** chips for the tools an engineer self-selects on: Hotwire vs React frontend, Sidekiq, Packwerk (modular monolith), GraphQL, non-default DBs (ClickHouse), or a non-Rails runtime (`Roda`, and pair with the fact it's not Rails).
4. **signal** chips only when genuinely present and decision-relevant: `Polyglot` when Ruby is one-of-several backend languages (this is the Verse-Medical filter — Ruby listed alongside Python/Go/Node), `Founding role`, `High compliance` (HIPAA/PCI/SOC), `Open source`, `Profitable`, `Public benefit`, `AI-native` (AI tooling *expected in the workflow*), `Mentorship` (leads/staff who mentor).
5. Prefer fewer, high-signal chips over a full stack dump. Two chips on a thin posting is fine.

After editing, `npm run build:dev` (a validation snippet can assert every chip is in `CHIP_KIND`), then eyeball the `/jobs` cards at 390x844 — the chip row must not push the card past 3-per-screen density or cause horizontal overflow.

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

The mobile experience has native-style chrome modeled on the iOS 26 "Liquid Glass" tab bar. When adding pages or fixed/sticky UI, respect its z-index contract:

- **Bottom nav** (`src/components/BottomNav.astro`): a floating frosted-glass **pill** plus a detached accent **CTA circle**, mobile-only (`lg:hidden`), `ogplus:hidden`. It is the **sole mobile nav** (the hamburger was removed). The pill (`#bottom-nav`) holds four primary tabs (Home / Meetup / Slack / Jobs) **+ a "More" tab** that opens a bottom-sheet menu (`#more-sheet`) for the overflow destinations (Videos / Startups / Sponsor / News / About). The detached ruby circle (`#join-fab`) is the Join CTA. **No horizontal scrolling** (overflow lives in the More sheet, so every destination is discoverable). The `.bottom-dock` wrapper is `pointer-events-none` with the pill/circle `pointer-events-auto`, so the transparent margins stay tappable to the page; content scrolls under the glass. Tabs are data-driven (`tabs` + `moreItems` arrays); **display/visibility come from utility classes** (`flex lg:hidden ogplus:hidden` on the dock) so the hide variants win the cascade over the scoped glass styles. Icons are **Phosphor** via `astro-icon` + `@iconify-json/ph` (`ph:<name>-light` idle, `-fill` active), inlined at build (no client JS). Pages give content bottom clearance with the `pb-tabbar` body class (`5.25rem`, tuned to the floating pill height + lift). **The site has three page-shell patterns and the nav must be in all of them:** `BaseLayout.astro`, `Layout.astro`, and the standalone pages that build their own `<body>` (`index.astro`, `sponsor-2026.astro`). A new top-level page that defines its own `<body>` must import `BottomNav`, add `pb-tabbar` to the body, and use the `viewport-fit=cover` meta (so safe-area insets resolve).
- **More sheet** (`#more-sheet` + `#more-backdrop`): an iOS bottom sheet (rounded top, grab handle, drag-to-dismiss, dim backdrop, Escape/backdrop close, body scroll-lock). Backdrop `z-50`, sheet `z-51`.
- **Jobs filter sheet** (`/jobs`, `#filter-panel` + `#filter-backdrop`): same bottom-sheet pattern. Backdrop `z-45`, sheet `z-46`, above the nav so the sheet covers it. Reuse this pattern for any future mobile sheet.

The hamburger trigger (`#mobile-menu-button` in `Header.astro` / `Navigation.astro`) is hidden on every viewport; desktop uses the inline horizontal `<nav>`, mobile uses the glass nav.

z-index ladder (mobile): page stickies `≤ z-30` < bottom nav `z-40` < jobs filter sheet `z-45/46` < More sheet `z-50/51`.

Quick check (390x844): `document.getElementById('bottom-nav')` exists and is visible; the More tab opens `#more-sheet`; at full scroll the lowest content link clears `.bottom-dock`; no horizontal overflow. Or just run `npm run qa`.

### Header logo contrast (`darkHero` contract)

`Header.astro` (the `BaseLayout` shell) starts as a **transparent** header with the **white** logo, then swaps to a solid white header with the **dark** logo once scrolled past 50px. That transparent/white-logo state only reads on a **dark hero**. A `BaseLayout` page whose top section is light (`bg-white`, `bg-gray-50`, `from-gray-50`, etc.) must pass **`darkHero={false}`**, which starts the header solid with the dark logo so the logo isn't invisible on a light background at the top.

Pages currently marked `darkHero={false}`: `about`, `news/index`, `startups/index`, `jobs/post`, `404`, `design-system`. Dark-hero pages (`/`, `/meetup`, `/jobs`, `/videos`, `/photos`, `/host`, `speakers`, `sponsor-2026`) keep the default `darkHero={true}`. `Navigation.astro` (the `Layout` shell) always uses the dark logo on a solid header, so it is unaffected.

When adding a `BaseLayout` page, check the first section's background and set `darkHero` accordingly. QA: at 390x844, the header logo must be legible at scroll-top (`.header-logo-white` visible only over a dark hero; otherwise `.header-logo-dark` on a solid header).

### Anchor scrolling across pages (`HashScroll`)

`global.css` opts into native cross-document view transitions (`@view-transition { navigation: auto }`). Chrome runs one on same-origin navigation and **drops the fragment scroll while it does**, so a link from another page on the site (`/speakers#peter-zhu`) lands at the top of the destination with the hash still in the URL. A cold load of the same URL has no transition and lands correctly, which is why `npm run qa`'s deep-link check never caught it: that check only cold-loads.

`src/components/HashScroll.astro` does the jump itself, on `pagereveal` and again after load, and backs off once the reader has scrolled. It is rendered by `BaseLayout`, `Layout`, and the standalone shells (`index.astro`, `sponsor-2026.astro`) — a new page shell must include it, the same way it must include `BottomNav`.

A page that steers the hash itself passes **`hashScroll="manual"`** to its layout, so two handlers never race for the scroll position. Currently manual: `jobs/index` (its own converge loop, which lands with a header-aware offset) and `schedule-2025` (`#day1`-`#day3` select a tab, `#talk-id` opens a modal). Slide decks on `PresentationLayout` never had it.

### Mobile regression check (run after any header/overlay/sticky change)

There is no hamburger menu on mobile; the floating glass nav is the only mobile nav (the `#mobile-menu-button` is hidden on all viewports). Page-level `sticky`/`fixed` bars must stay `≤ z-30` so they sit below the bottom nav (`z-40`), jobs filter sheet (`z-45/46`), and More sheet (`z-50/51`).

Verify with Playwright at 390x844 for each top-level route (`/`, `/jobs`, `/videos`, `/startups`, `/about`, `/news`, `/sponsor-2026`):

1. `#bottom-nav` exists and is visible (pill + `#join-fab` circle); the More tab opens `#more-sheet`.
2. `#mobile-menu-button` is not visible; `#bottom-nav` is not visible at `≥ lg`.
3. No horizontal overflow: `document.documentElement.scrollWidth <= innerWidth`.
4. Header logo is legible at scroll-top (see `darkHero` contract above).

Run the committed sweep with **`npm run qa`** (`scripts/qa-mobile.mjs`): it builds, spawns `astro preview`, then checks every route at 390x844 and 1440x900 for horizontal overflow, bottom-nav presence (`>= MIN_TABS`, counting the More button) / desktop hiding / hamburger absence, header-logo legibility (asserted against each page's `data-dark-hero`), and cold-load deep links (`/jobs#id`). Screenshots land in `.qa-shots/` (gitignored); it exits non-zero on failure. Point it at a running server with `BASE_URL=… npm run qa`. (Requires the chromium binary once: `npx playwright install chromium`.)

## Allowed Tools

- **Playwright**: Using Playwright MCP or browser automation is allowed for testing and visual inspection of the site
