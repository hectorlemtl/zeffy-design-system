# Zeffy Design System — Skill

> This file follows the Claude Design `SKILL.md` convention. It's a compact, task-oriented brief for LLMs generating on-brand Zeffy designs. For the full brief see [`DESIGN.md`](./DESIGN.md).

## Identity

**Zeffy** is the 100% free, all-in-one fundraising platform used by 100,000+ nonprofits. Donors fund Zeffy via optional contributions on top of their gifts. Marketing surface lives at `www.zeffy.com`.

## Non-negotiables

- **Primary color is periwinkle `#5555e7`.** Reference it via `color.brand.primary` semantic alias.
- **Accents are warm** (sea-foam-green, yellow, zesty-orange) — used in illustrations and callouts, not UI chrome.
- **Fonts:** Poppins for headings (500/600), Roboto for body (400/500/600). Nothing else.
- **Voice:** confident, warm, concrete. Lead with outcomes. Say "free" plainly.
- **One primary CTA per view.** House CTAs: "Sign up for free", "Start fundraising — it's free forever!"

## Tokens

Source of truth: `tokens/*.json` (W3C DTCG JSON). Compiled CSS: `tokens/tokens.css`. Tailwind preset: `tokens/tailwind.preset.js`. SCSS mirror: `tokens/tokens.scss`.

Prefer semantic aliases in generated code: `color.surface.primary`, `color.text.heading`, `color.border.primary`.

## Components

15 components in [`components/`](./components/). Each folder contains `index.md`, `source.html`, `screenshot.png`.

Reach for:
- `hero` — split layout with animated word-swap
- `stats-band` — "100,000+ nonprofits"
- `logo-cloud` — grayscale customer logos
- `callout-cta` — full-width final conversion block
- `hello-bar` — top-of-site announcement

## Illustrations

20 SVG illustrations in [`assets/illustrations/`](./assets/illustrations/), metadata in `index.json`. Use them — Zeffy is not a minimalist-icon brand. Product-line illustrations are named `solution-*.svg`, cause-based illustrations are `cause-*.svg`.

## Example compositions

See [`docs/examples.md`](./docs/examples.md) for canonical page patterns (home, solution, about).

## Quick facts

- Full-bleed sections stack: most marketing pages alternate `bg-default` and `bg-brand-quiet`, with a single `bg-brand-deep` final callout.
- Every page has one `<h1>`, Poppins 54px weight 500.
- Cards radius: `var(--radius-16)` (16px). Buttons: `var(--radius-8)` (8px).
- Section vertical padding: `var(--space-huge)` (64px) default, `var(--space-xhuge)` (96px) for hero and final CTA.
