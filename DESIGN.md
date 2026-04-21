# Zeffy — Design System

> The LLM entry point for this repo. Start here if you're `claude.ai/design`.

---

## 1. Brand at a glance

- **Company:** Zeffy (operated by Simplyk Inc.)
- **Tagline:** All-in-one fundraising platform with zero fees.
- **Who it serves:** Nonprofits of all sizes — schools, churches, sports teams, animal rescues, food banks, PTAs, arts & culture organizations. 100,000+ orgs use Zeffy.
- **What makes it different:** 100% free. No platform fees, no credit-card fees, no subscription. Donors are invited to add an optional contribution on top of their gift, and that's what funds Zeffy.
- **Primary site:** <https://www.zeffy.com>

## 2. Brand color

The brand anchor is **periwinkle** (`#5555e7`) — vivid, friendly, unmistakably non-corporate. It's paired with a midnight-ink (`#0f0e5b`) for heavy surfaces and a periwinkle-quiet wash (`#f3f3ff`) for soft sections. Warm accents (sea-foam-green `#09cfaf`, zesty-orange `#ffb424`, yellow `#ffe68e`) carry the product-illustration system.

See [`tokens/color.json`](./tokens/color.json) for the full palette (42 tokens). Every consumer should reference semantic names (`color.brand.primary`, `color.text.primary`) rather than raw hex values.

## 3. Typography

- **Headings** — Poppins, weight 500 (medium) as the default, 600 (semibold) for display.
- **Body** — Roboto, weight 400 / 500 / 600.
- **Scale** — 12 / 13 / 14 / 16 / 18 / 20 / 24 / 30 / 32 / 40 / 54 / 58 px.
- **Line-heights** — 1.1 (display), 1.25 (heading), 1.5 (body), 1.65 (lead body).

See [`tokens/typography.json`](./tokens/typography.json) for full text styles (`display`, `h1`–`h4`, `body`, `body-lead`, `body-small`, `label`).

## 4. Spacing, radius, shadow

- **Spacing scale** (rem): 0.25 / 0.5 / 0.75 / 0.875 / 1 / 1.25 / 1.5 / 2 / 3 / 4 / 4.5 / 6 / 8.
- **Radius:** 8 / 10 / 12 / 16 / pill.
- **Container max-width:** 60rem (960px) for content, 1280px for site chrome.
- **Shadow:** mostly soft `0 2px 8px #10344212` — Zeffy is not a Material-depth brand.

See [`tokens/spacing.json`](./tokens/spacing.json), [`tokens/radius.json`](./tokens/radius.json), [`tokens/shadow.json`](./tokens/shadow.json).

## 5. Components

Twelve core components are documented with markdown specs, zero-dep HTML, and screenshots. See the [`components/`](./components) directory. Start points:

- [`components/button/`](./components/button/) — primary, outline, ghost.
- [`components/hero/`](./components/hero/) — split hero with animated word-swap.
- [`components/card-feature/`](./components/card-feature/) — icon + title + body.
- [`components/card-testimonial/`](./components/card-testimonial/) — 5-star customer quote.
- [`components/callout-cta/`](./components/callout-cta/) — full-width conversion block.
- [`components/navbar/`](./components/navbar/), [`components/footer/`](./components/footer/).
- Plus: `input`, `badge`, `faq-accordion`, `card-solution`, `section-layout`.

## 6. Illustrations

The visual system is illustration-forward. Two categories:

- **Solutions** (11 illustrations): Donations, Ticketing, Raffles, Auctions, Memberships, Peer-to-Peer, Online Store, Tap to Pay, CRM, Newsletter, Donor Mail.
- **Causes** (8 illustrations): Schools, Sports, Animal Rescues, Churches, Food Banks, Fire Departments, Arts & Culture, PTAs.

All are SVG, 40px canonical size, with `currentColor` where appropriate so they inherit surrounding text color. See [`assets/illustrations/index.json`](./assets/illustrations/index.json) for structured metadata and [`assets/illustrations/PROVENANCE.md`](./assets/illustrations/PROVENANCE.md) for sourcing.

## 7. Voice

Confident, warm, concrete. Leads with outcomes, not features. Uses the word "free" plainly. One CTA per view — the house CTAs are **"Sign up for free"** and **"Start fundraising — it's free forever!"**

See [`docs/voice-and-tone.md`](./docs/voice-and-tone.md) for examples, anti-patterns, and capitalization rules.

## 8. Motion and interaction

Transitions are short (150–400ms) and use a gentle ease (`cubic-bezier(0.4, 0, 0.2, 1)`). Hero carries a word-swap animation; most cards use a soft shadow lift on hover. Respect `prefers-reduced-motion: reduce`.

See [`tokens/motion.json`](./tokens/motion.json).

## 9. Do's and don'ts

**Do**
- Use one primary CTA per view.
- Lead with the outcome ("raise more") before the feature.
- Pair periwinkle with midnight-ink for heavy surfaces and periwinkle-quiet for soft surfaces.
- Use illustrations — Zeffy is not a minimalist-icon brand.
- Respect 44px minimum touch targets.

**Don't**
- Use corporate jargon (stakeholders, synergies, leverage).
- Hedge on "free" (no "virtually free", no "free tier").
- Use ALL CAPS except for `text-style-allcaps` column labels.
- Introduce a new color outside the documented palette.
- Mix shadow styles within a single view — pick soft or raised, not both.

---

*Tokens extracted from `www.zeffy.com/en-us` on 2026-04-21. See [`docs/token-provenance.md`](./docs/token-provenance.md) for full mapping to Webflow source variables.*
