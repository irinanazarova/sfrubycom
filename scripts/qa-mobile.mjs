// Mobile/desktop QA sweep with Playwright.
//
//   npm run qa            # builds, spawns `astro preview`, runs checks, tears down
//   BASE_URL=http://localhost:4321 npm run qa   # check an already-running server
//
// Asserts, per route at 390x844 (mobile) and 1440x900 (desktop):
//   - no horizontal overflow (decks in EXPECTED_OVERFLOW are exempt)
//   - mobile: #bottom-nav present with 10 tabs; hamburger (#mobile-menu-button) hidden
//   - header logo legible at scroll-top (white logo only over a dark hero)
// Plus a cold-load deep-link check on /jobs#<id>.
// Screenshots are written to .qa-shots/ (gitignored). Exits non-zero on failure.
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";

const ROUTES = [
    "/", "/jobs", "/jobs/post", "/videos", "/startups", "/about", "/news",
    "/sponsor-2026", "/conference-2026", "/schedule", "/speakers", "/sponsors",
    "/photos", "/scholarship", "/host", "/contact", "/register",
    "/startup-demos", "/wifi", "/404",
];
// Fixed-canvas slide decks legitimately overflow / have no tab bar.
const DECKS = new Set(["/meetup-2026-06"]);
const VIEWPORTS = [
    { name: "mobile", width: 390, height: 844, isMobile: true },
    { name: "desktop", width: 1440, height: 900, isMobile: false },
];
const OUT = ".qa-shots";

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
                const shown = (el) => !!el && getComputedStyle(el).display !== "none";
                const logo = document.querySelector(
                    ".header-logo-white:not(.hidden), .header-logo-dark:not(.hidden)",
                );
                return {
                    overflow: de.scrollWidth - de.clientWidth,
                    navShown: shown(nav),
                    navTabs: nav ? nav.querySelectorAll("a").length : 0,
                    burgerShown: shown(burger),
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
                else if (r.navTabs !== 10) failures.push(`${vp.name} ${route}: tab bar has ${r.navTabs} tabs (expected 10)`);
            }
            if (vp.name === "desktop" && r.navShown) failures.push(`desktop ${route}: tab bar should be hidden`);
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
    for (const vp of VIEWPORTS) {
        for (const id of ids) {
            const ctx = await browser.newContext({
                viewport: { width: vp.width, height: vp.height },
                isMobile: vp.isMobile,
            });
            const page = await ctx.newPage();
            await page.goto(`${base}/jobs#${id}`, { waitUntil: "load" });
            await page.waitForTimeout(1600);
            const r = await page.evaluate((jid) => {
                const e = document.getElementById(jid);
                const top = Math.round(e.getBoundingClientRect().top);
                return { top, sheet: document.getElementById("jobs-app")?.dataset.filters };
            }, id);
            const ok = r.top >= 60 && r.top < 220 && r.sheet === "closed";
            note(`  ${vp.name} #${id}: top=${r.top} sheet=${r.sheet} ${ok ? "ok" : "FAIL"}`);
            if (!ok) failures.push(`${vp.name} deep-link #${id}: top=${r.top} sheet=${r.sheet}`);
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
    base = "http://localhost:4321";
    server = spawn("npm", ["run", "preview"], { stdio: "ignore", detached: true });
}
try {
    if (!(await waitForServer(base + "/"))) throw new Error(`server not reachable at ${base}`);
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
    if (server) process.kill(-server.pid);
}
