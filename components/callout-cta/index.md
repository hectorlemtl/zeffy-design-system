# Callout / CTA

Full-width conversion block, typically placed at the end of a page or between sections.

## Variants
- `bg-brand-deep` (default) — `color.surface.brand-deep` (`#0f0e5b`), white text.
- `bg-brand` — `color.surface.brand` (`#1b1bb5`).
- `bg-brand-quiet` — `color.surface.secondary` (`#f3f3ff`), `color.text.primary` ink.

## Anatomy
```
  Headline (h2 — display, 40–54px)
  Subcopy (body-lead, text.inverted-secondary)
  [Primary CTA]  [Outline CTA (optional)]
```

## Tokens
- Vertical padding: `var(--space-xhuge)` (96px).
- Horizontal padding: `var(--space-padding-global)`.
- Max content width: `var(--container-regular)` centered.
- Headline: `textStyle.h1` (Poppins 54px).
- Subcopy max-width: 38rem for readability.

## Reference
- [`source.html`](./source.html)
