# Zeffy Design System

The tokens, components, and brand language that define Zeffy's marketing surface, packaged for human consumption and for ingestion by [`claude.ai/design`](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design).

**Company blurb for design tooling:** Zeffy is the 100% free, all-in-one fundraising platform used and loved by 100,000+ nonprofits — donations, ticketing, raffles, auctions, memberships, CRM, and more, with zero platform fees.

## What this repo is

- **42 color tokens**, 12 typography styles, spacing/radius/shadow/motion scales — in [W3C DTCG JSON](https://tr.designtokens.org/format/) format.
- **12 documented components** — Markdown specs + zero-dep HTML references + screenshots.
- **20 brand illustrations** — solution + cause SVGs with structured metadata.
- **Voice & tone guide** — copy rules, examples, anti-patterns.
- **LLM-ready entry point** — [`DESIGN.md`](./DESIGN.md) at the repo root.

## What this repo is not

- Not a shipped component library. No `npm install`. No build step.
- Not a Figma mirror. Figma is the design surface; this is the machine-readable contract.
- Not a clone of the Zeffy product app (`app.zeffy.com`) — marketing surface only.

## Quick start — humans

1. Read [`DESIGN.md`](./DESIGN.md) for the brand, voice, and component tour.
2. Import tokens in your project:
   ```css
   @import url("tokens/tokens.css");
   ```
3. Reference component HTML in [`components/*/source.html`](./components) as the source of truth for markup and styling.

## Quick start — Claude Design

1. At [claude.ai/design](https://claude.ai/design), choose "Set up your design system" → "Link code on GitHub".
2. Paste this repo's URL.
3. Claude reads [`DESIGN.md`](./DESIGN.md), [`tokens/*.json`](./tokens), and [`components/*/index.md`](./components) automatically.
4. Brand blurb for the form: the sentence at the top of this README.

## File map

```
.
├── DESIGN.md                 — LLM entry point (9-section brief)
├── design.json               — manifest (paths, versions)
├── README.md                 — this file
├── LICENSE                   — MIT (code); assets covered separately
├── tokens/                   — DTCG JSON + compiled tokens.css
├── components/               — 12 components, each with index.md, source.html, screenshot.png
├── assets/                   — logos, illustrations, icons, fonts
└── docs/                     — architecture, voice/tone, provenance, licensing, inventory
```

## Tokens

Zeffy's visual system has three anchors:

- **Brand** — periwinkle `#5555e7`, midnight-ink `#0f0e5b`, periwinkle-quiet `#f3f3ff`.
- **Accent** — sea-foam-green, zesty-orange, yellow — used in product illustrations and callouts.
- **Neutral** — white / ghost / slate scale.

All tokens alias through semantic surface/text layers (e.g., `color.surface.primary`, `color.text.heading`). See [`docs/token-provenance.md`](./docs/token-provenance.md) for every token's origin on the live Webflow site.

## Components status

| Component             | Status     |
|-----------------------|------------|
| button                | Documented |
| navbar                | Documented |
| hero                  | Documented |
| section-layout        | Documented |
| card-feature          | Documented |
| card-testimonial      | Documented |
| card-solution         | Documented |
| callout-cta           | Documented |
| badge                 | Documented |
| input                 | Documented |
| footer                | Documented |
| faq-accordion         | Documented |

## Assets and licensing

- Fonts: Poppins (SIL OFL), Roboto (Apache 2.0) — not committed; load from Google Fonts.
- Logos and illustrations: © Zeffy, included for internal + claude.ai/design use only.
- Full terms in [`docs/licensing.md`](./docs/licensing.md).

## Versioning

- `0.1.0` — first extraction, 2026-04-21. Schema-stable.
- Bump minor for additive changes (new tokens / components).
- Bump major if token names change or semantic layer is restructured.

## Contributing

This repo is generated from the live Zeffy marketing site. Do not edit tokens by hand — re-extract from `www.zeffy.com` and let a new commit reflect the update. See [`docs/token-provenance.md`](./docs/token-provenance.md) for the re-extraction procedure.

## Owners

- **Brand + copy voice:** Zeffy marketing team (hector@zeffy.com)
- **This repo:** [@hectorlemtl](https://github.com/hectorlemtl)

---

*Generated 2026-04-21. Schema: W3C DTCG. Tokens extracted from `www.zeffy.com/en-us` via Webflow-defined custom properties.*
