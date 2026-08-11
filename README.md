# sfruby.com

Source for [sfruby.com](https://sfruby.com), the home of the SF Ruby community: the San Francisco Ruby Startup Conference, monthly meetups, a curated Ruby/Rails jobs board, a directory of startups building on Ruby, and a running feed of Ruby company news.

Built with [Astro](https://astro.build) 5 and Tailwind CSS, deployed as a static site on Netlify. The visual language is a custom 8-bit design system generated from design tokens; browse it live at [sfruby.com/design-system](https://sfruby.com/design-system).

## What's on the site

- **The conference**: the homepage sells the [San Francisco Ruby Startup Conference](https://sfruby.com/), November 10-12, 2026 at SFJAZZ.
- **[Meetups](https://sfruby.com/meetup)**: the monthly SF Ruby meetup, with recordings of past sessions in [Videos](https://sfruby.com/videos).
- **[Jobs](https://sfruby.com/jobs)**: Ruby and Rails roles at SF-area startups, hand-curated and audited monthly.
- **[Startups](https://sfruby.com/startups)** and **[News](https://sfruby.com/news)**: companies building on Ruby and their milestones, with an [RSS feed](https://sfruby.com/news/rss.xml).
- **LLM-friendly**: every main page has a Markdown twin (append `.md` to its URL) and the site publishes [llms.txt](https://sfruby.com/llms.txt).

## Getting started

```bash
npm install
npm run dev        # dev server at localhost:4321
```

## Commands

| Command             | Action                                              |
| :------------------ | :-------------------------------------------------- |
| `npm run dev`       | Start the dev server at `localhost:4321`            |
| `npm run build`     | Fetch external data, then build to `./dist/`        |
| `npm run build:dev` | Build without fetching external data (no env vars needed) |
| `npm run preview`   | Preview the production build locally                |
| `npm run fetch-data`| Fetch Luma events data                              |
| `npm run qa`        | Mobile/desktop QA sweep of all routes (Playwright)  |

Use `npm run build:dev` for local work: it skips the external fetches and builds from the JSON already committed in `src/content/`.

## How content flows

Content comes from two sources:

1. **Luma API**: meetup events, fetched at build time by `scripts/fetch-luma-events.js` into `src/content/`.
2. **Hand-maintained files**: jobs, startups, meetup recordings, hosts, sponsors, speakers, and schedule in `src/data/`; news and talks in `src/content/news.json` and `src/content/talks.json`.

A scheduled GitHub Action rebuilds and redeploys the site weekly so Luma updates ship without a commit.

## Environment variables

Only needed for the full `npm run build` (data fetching); see `.env.example`:

- `LUMA_API_KEY`, `LUMA_CALENDAR_ID`: Luma API access

## Project structure

- `src/pages/`: routes (index, talks, startups, jobs, news, photos, about)
- `src/components/`: reusable Astro components
- `src/data/`: JavaScript data exports with helpers
- `src/content/`: JSON data (fetched Luma events, hand-edited news and talks)
- `src/design/tokens.mjs`: design tokens for the 8-bit design system (see `/design-system` on the site)
- `scripts/`: build-time data fetching and asset generation

## License

The code is released under the [MIT License](LICENSE). Site content (talk summaries, news, job descriptions, photos) and third-party brand assets (company logos in `public/`) belong to their respective owners and are excluded from the license.

## Contributing

Spotted a stale job listing, a wrong speaker name, or a missing meetup recording? Issues and pull requests are welcome. For content conventions (name verification, editorial voice), see [CLAUDE.md](CLAUDE.md).
