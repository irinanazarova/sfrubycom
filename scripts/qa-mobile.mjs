// Mobile/desktop QA sweep with Playwright.
//
//   npm run qa            # builds, spawns `astro preview`, runs checks, tears down
//   BASE_URL=http://localhost:4321 npm run qa   # check an already-running server
//
// Asserts, per route at 390x844 (mobile) and 1440x900 (desktop):
//   - no horizontal overflow (decks in DECKS are exempt)
//   - mobile: #bottom-nav present with >= MIN_TABS tabs; hamburger hidden
//   - desktop: #bottom-nav hidden
//   - header logo legible at scroll-top: on Header-based pages the visible
//     logo must match the page's `data-dark-hero` contract (white over a dark
//     hero, dark otherwise). Navigation-based pages have no #main-header and
//     are skipped (they always render the dark logo on a solid header).
// Plus a cold-load deep-link check on /jobs#<id>.
// Screenshots are written to .qa-shots/ (gitignored). Exits non-zero on failure.
//
// The preview port is read back from the server banner, not assumed: `astro
// preview` silently binds the next free port when PORT is taken, and the sweep
// would otherwise test whatever else is listening. A marker check on / then
// makes a wrong server one clear error instead of 20 bogus per-route failures.
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";

const ROUTES = [
    "/", "/jobs", "/jobs/post", "/videos", "/startups", "/about", "/news",
    "/sponsor-2026", "/meetup", "/schedule", "/speakers", "/sponsors-2025",
    "/photos", "/scholarship", "/host", "/contact", "/register",
    "/startup-demos", "/wifi", "/404",
];
// Fixed-canvas slide decks legitimately overflow / have no tab bar.
const DECKS = new Set(["/meetup-2026-06"]);
// The tab bar carries the primary destinations plus a "More" overflow. Kept as
// a floor (not an exact count) so editorial tab changes don't break QA; gross
// breakage (tabs failing to render) still trips it.
const MIN_TABS = 5;
const VIEWPORTS = [
    { name: "mobile", width: 390, height: 844, isMobile: true },
    { name: "desktop", width: 1440, height: 900, isMobile: false },
];
const OUT = ".qa-shots";
// Uncommon port so the sweep doesn't collide with a dev server on 4321/4322.
const PORT = 4329;

async function waitForServer(url, ms = 30000) {
    const deadline = Date.now() + ms;
    while (Date.now() < deadline) {
        try {
            const r = await fetch(url);
            if (r.ok) return true;
        } catch {}
        await new Promise((r) => setTimeout(r, 300));
    }
    return false;
}

// `astro preview` does not fail on a busy port, it silently binds the next free
// one. Assuming PORT then means the sweep happily tests whatever else is
// listening (any other project's dev server), and every route 404s. So read the
// port back from the server's own banner rather than trusting PORT.
function spawnPreview(port) {
    const proc = spawn("npm", ["run", "preview", "--", "--port", String(port)], {
        stdio: ["ignore", "pipe", "pipe"],
        detached: true,
    });
    const url = new Promise((resolve, reject) => {
        let buf = "";
        const onChunk = (c) => {
            buf += c;
            const m = buf.match(/https?:\/\/localhost:(\d+)\/?/);
            if (m) resolve(`http://localhost:${m[1]}`);
        };
        proc.stdout.on("data", onChunk);
        proc.stderr.on("data", onChunk);
        proc.on("exit", (code) =>
            reject(new Error(`preview exited (code ${code}) before reporting a URL:\n${buf}`)),
        );
        setTimeout(
            () => reject(new Error(`preview never reported a URL within 30s:\n${buf}`)),
            30000,
        );
    });
    return { proc, url };
}

// A reachable server is not necessarily *our* server. Without this, a squatter on
// the port produces 20 confident "bottom tab bar missing" failures instead of one
// honest "wrong site" error.
async function assertIsThisSite(base) {
    const res = await fetch(base + "/");
    const html = await res.text();
    if (!/sfruby\.com|SF Ruby/i.test(html)) {
        throw new Error(
            `${base} is serving something else (no SF Ruby marker in / ).\n` +
                `Another dev server is probably on that port. Free it, or pass BASE_URL=<url>.`,
        );
    }
}

async function run(base) {
    mkdirSync(OUT, { recursive: true });
    const browser = await chromium.launch();
    const failures = [];
    const note = (msg) => console.log("  " + msg);

    for (const vp of VIEWPORTS) {
        const ctx = await browser.newContext({
            viewport: { width: vp.width, height: vp.height },
            deviceScaleFactor: 2,
            isMobile: vp.isMobile,
        });
        const page = await ctx.newPage();
        const errors = [];
        page.on("pageerror", (e) => errors.push(String(e)));

        for (const route of ROUTES) {
            errors.length = 0;
            try {
                await page.goto(base + route, { waitUntil: "load", timeout: 20000 });
                await page.waitForTimeout(250);
            } catch (e) {
                failures.push(`${vp.name} ${route}: load error ${String(e).slice(0, 60)}`);
                continue;
            }
            const r = await page.evaluate(() => {
                const de = document.documentElement;
                const nav = document.getElementById("bottom-nav");
                const burger = document.getElementById("mobile-menu-button");
                // Real visibility: a 0x0 rect catches display:none on the
                // element OR any ancestor (the nav is hidden via its wrapper).
                const shown = (el) => {
                    if (!el) return false;
                    const r = el.getBoundingClientRect();
                    return r.width > 0 && r.height > 0;
                };
                // The visible header logo (the hidden one carries `.hidden`).
                const logo = document.querySelector(
                    ".header-logo-white:not(.hidden), .header-logo-dark:not(.hidden)",
                );
                const header = document.getElementById("main-header");
                return {
                    overflow: de.scrollWidth - de.clientWidth,
                    navShown: shown(nav),
                    // Count interactive tabs (links + the "More" button) so the
                    // floor check is agnostic to the exact tab layout.
                    navTabs: nav ? nav.querySelectorAll("a, button").length : 0,
                    burgerShown: shown(burger),
                    // Header-based pages declare their hero-contrast contract;
                    // Navigation-based pages have no #main-header (skip the check).
                    hasHeader: !!header,
                    darkHero: header ? header.dataset.darkHero !== "false" : null,
                    logoKind: logo
                        ? logo.classList.contains("header-logo-white") ? "white" : "dark"
                        : null,
                };
            });
            await page.screenshot({ path: `${OUT}/${vp.name}${route.replace(/\//g, "_") || "_root"}.png` });

            const isDeck = DECKS.has(route);
            if (!isDeck && r.overflow > 1) failures.push(`${vp.name} ${route}: horizontal overflow ${r.overflow}px`);
            if (r.burgerShown) failures.push(`${vp.name} ${route}: hamburger visible (should be removed)`);
            if (vp.name === "mobile" && !isDeck) {
                if (!r.navShown) failures.push(`${vp.name} ${route}: bottom tab bar missing`);
                else if (r.navTabs < MIN_TABS) failures.push(`${vp.name} ${route}: tab bar has ${r.navTabs} tabs (expected >= ${MIN_TABS})`);
            }
            if (vp.name === "desktop" && r.navShown) failures.push(`desktop ${route}: tab bar should be hidden`);
            // Header logo legibility at scroll-top (Header-based pages only).
            if (r.hasHeader) {
                const expected = r.darkHero ? "white" : "dark";
                if (r.logoKind !== expected) {
                    failures.push(`${vp.name} ${route}: header logo ${r.logoKind ?? "missing"} at scroll-top, expected ${expected} (darkHero=${r.darkHero})`);
                }
            }
            if (errors.length) failures.push(`${vp.name} ${route}: console error ${errors[0].slice(0, 60)}`);
        }
        await ctx.close();
    }

    // Cold-load deep link to /jobs (fresh context per link = real shared-link path).
    note("deep-link cold-load /jobs#<id>:");
    const idCtx = await browser.newContext();
    const idPage = await idCtx.newPage();
    await idPage.goto(base + "/jobs", { waitUntil: "load" });
    const ids = await idPage.evaluate(() => {
        const rows = [...document.querySelectorAll(".job-row")];
        return [rows[0]?.id, rows.at(-1)?.id].filter(Boolean);
    });
    await idCtx.close();
    if (!ids.length) failures.push("deep-link: no .job-row ids found on /jobs");
    for (const vp of VIEWPORTS) {
        for (const id of ids) {
            const ctx = await browser.newContext({
                viewport: { width: vp.width, height: vp.height },
                deviceScaleFactor: 2,
                isMobile: vp.isMobile,
            });
            const page = await ctx.newPage();
            await page.goto(`${base}/jobs#${id}`, { waitUntil: "load" });
            await page.waitForTimeout(1600);
            const r = await page.evaluate((jid) => {
                const e = document.getElementById(jid);
                if (!e) return { found: false };
                return {
                    found: true,
                    top: Math.round(e.getBoundingClientRect().top),
                    sheet: document.getElementById("jobs-app")?.dataset.filters,
                };
            }, id);
            if (!r.found) {
                note(`  ${vp.name} #${id}: target missing FAIL`);
                failures.push(`${vp.name} deep-link #${id}: target element not found`);
            } else {
                const ok = r.top >= 60 && r.top < 220 && r.sheet === "closed";
                note(`  ${vp.name} #${id}: top=${r.top} sheet=${r.sheet} ${ok ? "ok" : "FAIL"}`);
                if (!ok) failures.push(`${vp.name} deep-link #${id}: top=${r.top} sheet=${r.sheet}`);
            }
            await ctx.close();
        }
    }

    await browser.close();
    return failures;
}

const provided = process.env.BASE_URL;
let server = null;
let base = provided;
if (!base) {
    const preview = spawnPreview(PORT);
    server = preview.proc;
    // Whatever port it actually landed on, not the one we asked for.
    base = await preview.url;
}
try {
    if (!(await waitForServer(base + "/"))) throw new Error(`server not reachable at ${base}`);
    await assertIsThisSite(base);
    console.log(`QA sweep against ${base}`);
    const failures = await run(base);
    console.log("");
    if (failures.length) {
        console.log(`✗ ${failures.length} issue(s):`);
        for (const f of failures) console.log("  - " + f);
        process.exitCode = 1;
    } else {
        console.log("✓ all checks passed");
    }
} finally {
    if (server?.pid) {
        try {
            process.kill(-server.pid);
        } catch {}
    }
}
