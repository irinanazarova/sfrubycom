# Presentation Tech Debt & Review

*Generated: 2026-01-26*

## Console Errors Fixed

- [x] `/images/bolt-new-screenshot.png` → `/bolt.png`
- [x] `/images/speaker-photo.jpg` → `/speaker_irina.jpg`
- [x] `/images/evil-martians-logo.svg` → `/evilmartians.png`
- [x] Removed unused highlight.js (no code blocks in presentation)
- [x] Fixed total slides counter (52 → 61)

## Remaining Image Placeholders

These images use onerror fallbacks (not critical):
- `/images/cora-computer-demo.png` - Consider adding actual screenshot
- `/images/intercom-fin-ai.png` - Consider adding actual screenshot

---

## Tech Debt: High Priority

| # | Issue | Description | Action |
|---|-------|-------------|--------|
| 1 | **Text too small** | 2xl text unreadable from back of 500-person room | Increase to 3xl minimum |
| 2 | **Survivorship bias** | Only interviewed successful Ruby founders | Add disclosure in intro |
| 3 | **Ruby 3x claim** | No source cited | Add citation or soften to "significantly faster" |
| 4 | **Token efficiency** | "15-25% fewer tokens" claim needs source | Research and cite |
| 5 | **False dichotomy** | "Consumer vs Builder" is reductive | Soften language |
| 6 | **QR code external** | qrserver.com dependency | Generate at build time |

## Tech Debt: Medium Priority

| # | Issue | Description |
|---|-------|-------------|
| 7 | **Animation performance** | 52 slides × 4 pseudo-elements = 208 elements |
| 8 | **Reduced-motion** | Disables ALL animations. Keep subtle ones. |
| 9 | **Lazy loading** | No `loading="lazy"` on images |
| 10 | **Dead code** | Counter animation (lines ~3186) never used |
| 11 | **Japanese text** | "死廃Legacy" unexplained for Thai audience |

---

## Comprehensive Review Summary

### As a Ruby Fan
**Works:** Fear → Evidence → Hope arc is compelling. "Ruby shame" validation resonates.

**Missing:**
- Personal hero's journey (Irina's own Ruby career arc)
- Interactive moment ("Raise hand if...")
- Community impact showcase

### As a Skeptic
**Will challenge:**
- 12 AI startups vs thousands of Python ones
- Survivorship bias in founder interviews
- Scale examples are old companies (AngelList 11+ years)
- No hiring timeline data

**To convert:**
- Migration decision matrix (when Python, when Ruby, when both)
- Failure stories / lessons learned
- Onboarding timeline data

### As a Logical Critic
**Issues found:**
- Ruby 3x claim: no source
- Token efficiency: no source
- False dichotomy: Consumer vs Builder
- Contradiction: RubyLLM exists BECAUSE Python dominates AI

### As a UI Reviewer
**Critical:**
- Text 2xl too small from 50 feet
- Slide 9 (fear cards): 4 cards with images too dense
- QR code too small to scan in large room
- High animation load causes eye fatigue

**Accessibility:**
- Color-only differentiation (red/green) - colorblind issue
- prefers-reduced-motion disables ALL animations
- Alt text fallbacks are just emoji

---

## Content Improvement Ideas

1. **Direct answer:** "Should a 2026 startup choose Rails?"
2. **Ruby AI roadmap:** What's coming that Python doesn't have?
3. **Interactive moment:** Build connection with audience
4. **Personal stakes:** Brief Irina's own Ruby career arc
5. **Decision matrix:** When Python, when Ruby, when both?

---

## Overall Assessment

**This is a very good presentation at 85%.** The narrative arc (Fear → Evidence → Hope) is compelling. Core message is solid. Technical execution and some logical gaps need work before it's truly excellent.

**Core strength:** Validates real concerns before pivoting to evidence.

**Key gap:** Convinces people Ruby *works* but doesn't fully convince them to *choose* it over the safe choice (Python).
