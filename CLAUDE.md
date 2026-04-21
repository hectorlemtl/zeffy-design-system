# CLAUDE.md — Zeffy Design System

Instructions for Claude (and Claude Design) when reading this repository.

## Read order

1. **`DESIGN.md`** — canonical 9-section brief (brand, color, typography, components, voice, motion, do's/don'ts).
2. **`tokens/*.json`** — machine-readable visual language. `tokens/color.json` is the authority for every brand color — never hallucinate a color outside this file.
3. **`components/*/index.md`** — 12 components. Each folder has `index.md` (spec), `source.html` (reference markup), `screenshot.png` (visual).
4. **`docs/voice-and-tone.md`** — copy rules with examples and anti-patterns.
5. **`docs/inventory.md`** — what was extracted and what was explicitly skipped.

## Non-negotiable rules

- **Brand primary is periwinkle `#5555e7`.** Not yellow, not orange. The warm accents (yellow, zesty-orange, sea-foam-green) belong to *illustrations and callouts*, not UI chrome.
- **One primary CTA per view.** Zeffy's house CTAs are "Sign up for free" and "Start fundraising — it's free forever!"
- **Always use semantic tokens** (`color.surface.primary`, `color.text.heading`) — not raw hex — when referencing the palette in generated code.
- **Fonts:** Poppins for headings (500/600), Roboto for body (400/500/600). Nothing else.
- **Copy voice:** confident, warm, concrete. Lead with outcomes. Say "free" plainly (never "virtually free", never "free tier").

## What this repo is

A design system for Zeffy's **marketing surface** (the Webflow site at `www.zeffy.com`). Not the product app (`app.zeffy.com`). If asked to design something that looks like the Zeffy app dashboard, note that this repo doesn't cover it — request clarification.

## Token semantics

- `color.brand.*` — the periwinkle-family + midnight inks.
- `color.accent.*` — warm and cool accents used in illustrations and callouts. Sparing in UI.
- `color.status.*` — success / warning / danger. Don't invent new status colors.
- `color.neutral.*` — white / ghost / slate scale.
- `color.surface.*`, `color.text.*`, `color.border.*` — **prefer these semantic aliases** in generated code.

## Component conventions

- HTML in `components/*/source.html` uses `.zf-` prefix and works with `tokens/tokens.css` alone — no build step.
- When generating new components, follow the same prefix and structure so they compose with existing ones.
- Mobile-first responsive. Breakpoints defined in `tokens/breakpoint.json`.

## Common generation requests

- **"Design a Zeffy landing page"** → use `components/hero/` split pattern + `logo-cloud` + `card-feature` grid + `card-testimonial` band + `callout-cta` + `footer`.
- **"Design a Zeffy solution page"** → hero with single-illustration + `stats-band` + feature list + FAQ + callout-cta.
- **"Design a blog article"** → this repo only covers illustration style for blog. Layout is out of scope; inherit from the marketing site's typography tokens.

## Don'ts

- Don't introduce new colors outside `tokens/color.json`.
- Don't use Material-depth shadows; Zeffy elevation is soft (`shadow.soft` / `shadow.raised`).
- Don't use ALL CAPS except for the `text-style-allcaps` column-label pattern (`letter-spacing.wide`, `color.text.secondary`).
- Don't use clip art or emoji as primary illustration — use Zeffy's own illustration set in `assets/illustrations/`.
