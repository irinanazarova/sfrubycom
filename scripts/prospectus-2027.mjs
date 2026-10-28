// Generate the shareable, five-page PDF from the same offer as /sponsor-2027.
// Run: npm run prospectus:2027 (requires Playwright Chromium).
// No remote assets or private attendee data are fetched.
import { chromium } from "playwright";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  CONFERENCE_2027 as event, SPONSOR_CONTACT_2027 as contact,
  PROSPECTUS_2027_PDF, prospectus2027 as copy, sponsorTiers2027 as tiers,
  sponsorStats2027 as stats, tierComparisonLabels2027 as labels,
  format2027, sponsorInquiry2027,
} from "../src/data/sponsor-tiers-2027.js";
import { conference2026SponsorTiers, sponsors as sponsors2025 } from "../src/data/sponsors.js";
import { conferenceSpeakers } from "../src/data/conference-2026.js";
import { palette as p } from "../src/design/tokens.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const out = resolve(root, "public", PROSPECTUS_2027_PDF.slice(1));
const previewDir = resolve(root, ".qa-shots/prospectus-2027");
mkdirSync(previewDir, { recursive: true });
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const asset = (path) => {
  const type = { ".png": "image/png", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2" }[extname(path)];
  if (!type) throw new Error(`Unsupported asset: ${path}`);
  return `data:${type};base64,${readFileSync(resolve(root, "public", path.replace(/^\//, ""))).toString("base64")}`;
};
const mail = (tier) => {
  const inquiry = sponsorInquiry2027(tier);
  return esc(`mailto:${contact.email}?${new URLSearchParams(inquiry).toString().replace(/\+/g, "%20")}`);
};
const footer = (n) => `<footer><span>SF RUBY 2027 · SPONSORSHIP PROSPECTUS</span><a href="https://sfruby.com/sponsor-2027/">sfruby.com/sponsor-2027</a><span>0${n} / 05</span></footer>`;
const eyebrow = (s) => `<div class="eyebrow">${s}</div>`;
const sponsors = conference2026SponsorTiers.flatMap((tier) => tier.sponsors);
const sponsor = (name) => {
  const s = sponsors.find((s) => s.name === name);
  if (!s) throw new Error(`Missing sponsor: ${name}`);
  return `<a class="sponsor" href="${esc(s.url)}"><img alt="${esc(s.name)}" src="${asset(s.logo)}" /></a>`;
};
const speakers = ["Rosa Gutiérrez", "Chris Oliver", "Carmine Paolino"].map((name) => {
  const s = conferenceSpeakers.find((s) => s.name === name);
  if (!s) throw new Error(`Missing speaker: ${name}`);
  return `<div class="speaker"><img src="${asset(s.pixel)}" alt="" /><div><strong>${esc(s.name)}</strong><p>${esc(s.bio)}</p></div></div>`;
}).join("");
const paid = tiers.filter((t) => t.price);
const party = tiers.find((t) => t.name === "Afterparty");

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" />
<title>SF Ruby 2027 — Sponsorship Prospectus</title>
<style>
@font-face{font-family:Martian;src:url('${asset("/fonts/MartianGrotesk.woff2")}')}
@font-face{font-family:Pixel;src:url('${asset("/fonts/PressStart2P.woff2")}')}
@page{size:12in 9in;margin:0}
*{box-sizing:border-box}body{margin:0;font:16px/1.5 Martian,Arial,sans-serif;color:${p.dark[900]};background:${p.white};-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:1152px;height:864px;padding:42px 62px 80px;position:relative;break-after:page;overflow:hidden}.page:last-child{break-after:auto}
h1,h2,h3,p{margin:0}h1{font-size:58px;line-height:1.12;letter-spacing:-2px;font-weight:700}h2{font-size:38px;line-height:1.16;letter-spacing:-1.2px;margin:10px 0 16px}h3{font-size:23px;line-height:1.3;margin-bottom:12px}p{margin-bottom:10px}a{color:inherit;text-underline-offset:4px}.eyebrow{font:12px/1.7 Pixel,monospace;color:${p.ruby[700]};letter-spacing:.4px}.intro{font-size:18px;line-height:1.5;max-width:900px}.muted{color:${p.dark[600]}}.small{font-size:13px;line-height:1.5}.grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}.box{padding:26px;background:${p.ruby[50]};border-top:4px solid ${p.ruby[500]}}.box p:last-child{margin:0}.rule{border:0;border-top:1px solid ${p.dark[200]};margin:18px 0}.pill{display:inline-block;background:${p.gold[400]};color:${p.dark[900]};padding:10px 18px;font-weight:700;text-decoration:none;font-size:17px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:32px}.stat{border-top:2px solid ${p.ruby[400]};padding-top:14px}.stat strong{display:block;font-size:38px;line-height:1.2;margin-bottom:8px}.stat span{font-size:14px;line-height:1.4;display:block}footer{position:absolute;bottom:26px;left:62px;right:62px;display:flex;justify-content:space-between;gap:16px;font-size:10px;letter-spacing:.5px;border-top:1px solid ${p.dark[300]};padding-top:16px}
.cover{background:${p.sky[950]};color:${p.white};}.cover .eyebrow{color:${p.gold[400]}}.cover h1{max-width:730px;margin:16px 0}.cover .intro{max-width:710px;color:${p.sky[100]}}.cover .mascot{position:absolute;right:60px;top:76px;width:215px;image-rendering:pixelated;opacity:.95}.cover .heading{max-width:760px;position:relative}.cover .event{margin-top:28px;font-size:20px}.cover .stats{margin-top:34px}.cover .stat strong{color:${p.gold[400]}}.cover footer{border-color:${p.sky[700]};color:${p.sky[100]}}.cover .pill{margin-top:10px}
.audience-number{font-size:70px;color:${p.ruby[600]};line-height:1;font-weight:700}.audience-box{display:grid;grid-template-columns:235px 1fr;gap:24px;align-items:center;padding:18px 26px;background:${p.ruby[50]};margin:16px 0}.audience-box p{margin:0}.speakers{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:16px 0}.speaker{display:flex;align-items:start;gap:10px}.speaker img{width:70px;height:70px;object-fit:contain;image-rendering:pixelated}.speaker strong{font-size:15px}.speaker p{font-size:13px;line-height:1.5;margin-top:8px}.sponsor-row{display:grid;grid-template-columns:repeat(6,1fr);gap:18px;margin:20px 0}.sponsor{height:53px;display:flex;align-items:center;justify-content:center}.sponsor img{max-width:128px;max-height:32px;object-fit:contain}
.program{grid-template-columns:1fr 1fr}.venue{width:100%;height:225px;object-fit:cover}.program h3{margin-top:18px}.program p{font-size:16px}.program .detail{margin-top:18px}.program .detail strong{display:block;font-size:17px;margin-bottom:5px}.product{margin-top:18px;padding:18px 24px;background:${p.sky[50]};border-left:5px solid ${p.sky[600]}}.product p{font-size:16px;margin:0}
table{width:100%;border-collapse:collapse;table-layout:fixed;margin-top:20px;font-size:15px}th,td{padding:10px 15px;border-bottom:1px solid ${p.dark[200]};vertical-align:top;text-align:left}thead th{background:${p.sky[950]};color:${p.white};font-size:20px}thead th:first-child{width:24%}thead .price{display:block;color:${p.gold[400]};font-size:25px;margin-top:5px}tbody th{font-weight:600;color:${p.dark[600]}}tbody td:nth-child(2){background:${p.ruby[50]}}.tier-cta td,.tier-cta th{padding-top:16px;border:0}.tier-cta a{font-size:14px;color:${p.ruby[700]}}.party{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:20px 26px;background:${p.ruby[50]};margin-top:22px}.party h3{font-size:21px}.party p{font-size:15px;margin:0}.package-note{font-size:12px;color:${p.dark[600]};margin-top:18px}
.steps{counter-reset:step;display:grid;gap:18px;margin:18px 0}.step{display:grid;grid-template-columns:42px 1fr;gap:18px}.step::before{counter-increment:step;content:'0' counter(step);font:15px Pixel;color:${p.ruby[600]};padding-top:7px}.step h3{font-size:20px;margin-bottom:5px}.step p{font-size:15px;margin:0}.contact{background:${p.sky[950]};color:${p.white};padding:22px;margin-top:18px}.contact h3{color:${p.gold[400]}}.contact a{font-size:24px}.contact p{margin:8px 0 0;font-size:16px}.approval{font-size:15px;padding:20px;background:${p.ruby[50]};margin-top:24px}
</style></head><body>
<section class="page cover">
  <img class="mascot" src="${asset("/logo8bit-mascot.png")}" alt="SF Ruby mascot" />
  <div class="heading">${eyebrow("SAN FRANCISCO RUBY CONFERENCE · 2027")}
  <h1>${esc(copy.headline)}</h1>
  <p class="intro">${esc(copy.audience)}</p></div>
  <p class="event"><strong>${esc(event.date)} · ${esc(event.venue)}, San Francisco</strong><br />One day of talks, followed by a community day.</p>
  <a class="pill" href="${mail()}">Discuss your 2027 sponsorship ↗</a>
  <div class="stats">${stats.map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("")}</div>
  <p class="small" style="margin-top:22px;color:${p.sky[100]}">Packages from $4,000 USD · 2026 rates held for 2027 · Flexible invoicing</p>
  ${footer(1)}
</section>
<section class="page">
  ${eyebrow("THE PEOPLE")}
  <h2>Engineers who build.<br />People who take ownership.</h2>
  <p class="intro">Senior and staff engineers, open-source authors, and founders meet here to exchange ideas and talk about the systems they run.</p>
  <div class="audience-box"><div class="audience-number">~25%</div><div><h3>Founders &amp; founding engineers</h3><p>People with experience building products, choosing tools, and taking an idea into production.</p></div></div>
  <p class="small muted">${esc(copy.foundersSource)}</p>
  <h3 style="margin-top:22px">A sample of the 2026 program</h3>
  <div class="speakers">${speakers}</div>
  <p class="small muted">2026 examples, not a confirmed 2027 lineup. Attendance targets: 400 in 2026; 450 in 2027.</p>
  <hr class="rule" />
  <p><strong>Among our 2026 sponsors</strong></p>
  <div class="sponsor-row">${["Buildkite", "Figma", "Gusto", "Persona", "Chime", "WorkOS"].map(sponsor).join("")}</div>
  <p class="small muted">SF Ruby 2025 sold out, supported by ${Object.keys(sponsors2025).length} sponsors. <a href="https://sfruby.com/sponsors-2025/">See the 2025 sponsors ↗</a></p>
  ${footer(2)}
</section>
<section class="page">
  ${eyebrow("THE EXPERIENCE")}
  <h2>Bring your engineers.<br />Start real conversations.</h2>
  <div class="grid program"><div>
    <img class="venue" src="${asset("/sfjazz.webp")}" alt="The auditorium at SFJAZZ" />
    <h3>${esc(event.venue)} · Hayes Valley</h3>
    <p>${esc(format2027[0].text)}</p>
    <p class="small muted">Exhibition details and community-day arrangements are confirmed in your proposal.</p>
  </div><div>
    <div class="detail"><strong>Conversations around shared work</strong><p>${esc(format2027[2].text)}</p></div>
    <div class="detail"><strong>A place for your team to meet people</strong><p>Pickaxe and Ruby include exhibition space. Bring colleagues who can talk about your engineering work, your team, and your open roles.</p></div>
    <div class="detail"><strong>Stay visible through the job board</strong><p>All three priced tiers include job postings. Pickaxe includes unlimited postings for a year, with the start date agreed together.</p></div>
  </div></div>
  <div class="product"><h3>${esc(copy.productTitle)}</h3><p>${esc(copy.productText)}</p><p style="margin-top:10px" class="small">WorkOS, Typesense, and Laravel Cloud sponsor the 2026 conference.</p></div>
  ${footer(3)}
</section>
<section class="page">
  ${eyebrow("THE PACKAGES")}
  <h2>Choose how your team shows up.</h2>
  <p>All prices in USD. Held at 2026 rates, with flexible invoicing.</p>
  <table><thead><tr><th scope="col">Included</th>${paid.map((t) => `<th scope="col">${esc(t.name.replace(" tier", ""))}<span class="price">${esc(t.price)}</span></th>`).join("")}</tr></thead><tbody>
  ${labels.map((label, i) => `<tr><th scope="row">${esc(label)}</th>${paid.map((t) => `<td>${esc(t.comparison[i])}</td>`).join("")}</tr>`).join("")}
  <tr class="tier-cta"><th scope="row">Next step</th>${paid.map((t) => `<td><a href="${mail(t)}">Ask about ${esc(t.name.replace(" tier", ""))} ↗</a></td>`).join("")}</tr></tbody></table>
  <div class="party"><div><h3>Afterparty · Custom quote</h3><p>${esc(party.description)} <a href="${mail(party)}">Discuss the afterparty ↗</a></p></div><p>${party.benefits.map(esc).join(" · ")}</p></div>
  <p class="package-note">Confirm exhibition dimensions, placement, equipment, and hours with us. Job-board start dates, social placements, availability, and reservation terms are agreed in your proposal.</p>
  ${footer(4)}
</section>
<section class="page">
  ${eyebrow("PLAN AHEAD")}
  <h2>${esc(copy.earlyTitle)}</h2>
  <p class="intro">${esc(copy.earlyText)}</p>
  <div class="grid"><div class="steps">
    <div class="step"><div><h3>Share your goals</h3><p>Tell us the roles and locations you're hiring for, the team you'd bring, or the developers you want to reach.</p></div></div>
    <div class="step"><div><h3>Choose the right package</h3><p>We'll discuss the package, availability, exhibition needs, and deliverables, then confirm reservation terms in writing.</p></div></div>
    <div class="step"><div><h3>Agree the timing</h3><p>Share your budget cycle and procurement requirements so we can agree an invoicing schedule and benefit start dates.</p></div></div>
  </div><div class="approval"><h3>For your internal approval</h3><p><strong>Event:</strong> SF Ruby 2027, September 9 at SFJAZZ, San Francisco; community day follows.</p><p><strong>Audience:</strong> 450 attendees targeted. Senior and staff engineers, open-source authors, and founders.</p><p><strong>Investment:</strong> $4,000 / $10,000 / $20,000 USD. Afterparty quoted individually.</p><p style="margin:0"><strong>Organizer:</strong> Evil Martians with the SF Ruby community.</p></div></div>
  <div class="contact"><h3>Let's plan your sponsorship.</h3><a href="${mail()}">${esc(contact.email)}</a><p>Contact Vica · <a style="font-size:16px" href="https://sfruby.com/sponsor-2027/">View the online prospectus ↗</a></p></div>
  ${footer(5)}
</section>
</body></html>`;

// Save an inspectable preview alongside screenshots, outside the published site.
writeFileSync(resolve(previewDir, "preview.html"), html);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1152, height: 864 }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const problems = await page.evaluate(() => {
    const issues = [];
    for (const [i, section] of [...document.querySelectorAll(".page")].entries()) {
      const footer = section.querySelector("footer").getBoundingClientRect();
      const box = section.getBoundingClientRect();
      for (const child of section.children) {
        if (child.tagName === "FOOTER") continue;
        const r = child.getBoundingClientRect();
        if (r.bottom > footer.top - 8 || r.right > box.right || r.left < box.left) issues.push(`Page ${i + 1}: content exceeds safe area (${child.tagName})`);
      }
    }
    for (const img of document.images) if (!img.complete || !img.naturalWidth) issues.push(`Broken image: ${img.alt}`);
    return issues;
  });
  if (problems.length) {
    await page.screenshot({ path: resolve(previewDir, "layout-debug.png"), fullPage: true });
    throw new Error(problems.join("\n"));
  }
  await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
  for (const [i, section] of (await page.locator(".page").all()).entries()) {
    await section.screenshot({ path: resolve(previewDir, `page-${i + 1}.png`) });
  }
  console.log(`Generated ${out}\n5 pages; layout and embedded images checked. Previews: ${previewDir}`);
} finally {
  await browser.close();
}
