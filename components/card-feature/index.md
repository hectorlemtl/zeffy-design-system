# Feature Card

Showcases a single product feature or benefit. Three parts, stacked vertically: illustration, title, description.

## Anatomy
```
┌─────────────────────────┐
│ [40px illustration]     │
│                         │
│ Title (h3)              │
│ Description (body)      │
│                         │
│ Learn more →            │ (optional)
└─────────────────────────┘
```

## Tokens
- Padding: `var(--space-xlarge)` (32px).
- Background: `var(--color-surface-primary)` white.
- Border: 1px solid `var(--color-neutral-slate-alpha)` (#10344212).
- Radius: `var(--radius-16)` (16px).
- Shadow: `var(--shadow-soft)` default, `var(--shadow-raised)` on hover.
- Title: `textStyle.h4` — Poppins 24px / 500.
- Description: `textStyle.body-small` — Roboto 14px / 400 in `color.text.secondary`.

## Variants
- `icon-only` — illustration replaces title area, used in dense grids.
- `compact` — reduced padding (`var(--space-medium)`), 2-line title max.

## Reference
- [`source.html`](./source.html)
