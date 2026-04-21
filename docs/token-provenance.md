# Token Provenance

Every token in `tokens/*.json` traces back to a concrete source on the Zeffy marketing site. This document records the mapping so future audits can re-verify.

## Source

- **Primary source:** Webflow-defined CSS custom properties on `www.zeffy.com/en-us`, extracted 2026-04-21 by walking `document.styleSheets` for `:root` and `html` rulesets.
- **Secondary source:** computed styles on hero + solution + card elements, used to confirm that declared variables match rendered output.
- **Tertiary source:** inspection of representative anchor/button elements to measure concrete padding, radius, and font values.

## Coverage

### Color
- All brand + accent + neutral tokens in `color.json` come directly from Webflow-declared variables. The mapping:

| DTCG token               | Webflow variable                         | Value      |
|--------------------------|------------------------------------------|------------|
| `brand.primary`          | `--periwinkle`                           | `#5555e7`  |
| `brand.primary-dark`     | `--purple-primary-dark`                  | `#2a2ac4`  |
| `brand.primary-darkest`  | `--primary-darkest`                      | `#06006d`  |
| `brand.primary-light`    | `--purple-light`                         | `#bfbfff`  |
| `brand.primary-quiet`    | `--surface--brand--quiet`                | `#f3f3ff`  |
| `brand.primary-moderate` | `--surface--brand--moderate`             | `#e0e0ff`  |
| `brand.midnight-blue-3`  | `--midnight-blue-3`                      | `#0f0e5b`  |
| `brand.frozen-blue`      | `--frozen-blue`                          | `#1b1bb5`  |
| `brand.heading-ink`      | `--_theme---heading--primary`            | `#0a093d`  |
| `accent.sea-foam-green`  | `--sea-foam-green` / `--medium-aquamarine` | `#09cfaf` |
| `accent.zesty-orange`    | `--zesty-orange`                         | `#ffb424`  |
| `status.danger`          | `--_theme---text--warning`               | `#ed4a55`  |
| `status.danger-strong`   | `--sizzling-red`                         | `#ff3947`  |

(Full mapping — every key in `color.json` corresponds 1:1 to a Webflow variable extracted on 2026-04-21. 42 tokens total.)

### Typography
- `fontFamily.heading` / `fontFamily.body` mirror `--_typography---heading` and `--_typography---body`.
- `fontSize` tokens combine Webflow scale tokens (`--_typography---text-size--*`) with measured computed sizes on `h1…h4` elements across the homepage.
- Loaded Google Fonts faces confirmed via `document.fonts`: Poppins 500, 600; Roboto 400, 500, 600.

### Spacing
- All spacing tokens come from Webflow's `--_layout---spacing--*` series. `padding-global` and `container.regular` come from `--_layout---spacing--padding-global` and `--_sizes---container--regular`.

### Radius
- `radius-8/10/12/16` ← `--_sizes---radius--8/10/12/16`. `radius-round` ← `--_sizes---radius--round` (`100%` in Webflow, normalized to `9999px` in CSS for broader compatibility).

### Shadow
- Zeffy's marketing site does not expose named shadow tokens via Webflow variables. `shadow.soft` and `shadow.raised` are derived from observed card elevations using `--dark-slate-grey-3` (`#10344212`) — Webflow's existing 12%-alpha slate. `brand-glow` is the focus ring built from `brand.primary-light`.

### Breakpoint
- Mirrors Webflow Client-First defaults (480 / 768 / 992 / 1280 / 1440). Declarative-only; component sources include example media queries.

### Motion
- No motion tokens defined in Webflow variables. Durations and easings are conventions observed across the site's hover and accordion transitions, documented here so new components stay consistent.

## Reconciliation process

When the live site adds or changes a variable:
1. Re-extract via the snippet in `docs/architecture.md` Appendix (or the `scripts/extract-tokens.js` if added later).
2. Diff against `tokens/*.json` and `tokens/tokens.css`.
3. Update both files in a single commit that references the new Webflow variable name.
