# Testimonial Card

Customer quote with attribution. Zeffy uses these to surface nonprofit operator voices.

## Anatomy
```
┌───────────────────────────────┐
│ ★★★★★                          │  (review stars, optional)
│                               │
│ "Quote body — usually 2–4     │
│  sentences about the outcome."│
│                               │
│ ─────                         │
│ [avatar]  Name                │
│           Role, Organization  │
│           [org logo]          │
└───────────────────────────────┘
```

## Tokens
- Padding: `var(--space-xlarge)` (32px).
- Background: `var(--color-surface-primary)` white OR `var(--color-surface-secondary)` `#f3f3ff` when stacked on a white section.
- Radius: `var(--radius-16)` (16px).
- Border: `var(--shadow-soft)` (or none if on a muted section).
- Stars: `color.accent.zesty-orange` `#ffb424`.
- Quote: `textStyle.body-lead` — Roboto 18px / 400 / 1.65.
- Name: `text-weight-semibold` (600), `color.text.primary`.
- Role + org: `color.text.secondary`, `font-size.regular`.

## Variants
- `compact` — no stars, shorter quote (≤160 chars).
- `inverted` — white text on `color.surface.brand-deep` background, used in the "Loved by nonprofits" hero strip.

## Reference
- [`source.html`](./source.html)
