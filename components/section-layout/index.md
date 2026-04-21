# Section Layout

Every page is a vertical stack of sections. Each section follows the Client-First pattern Zeffy already uses in Webflow:

```
section (full-bleed background)
  └── global-padding (horizontal gutter: var(--space-padding-global))
       └── container (max-width: var(--container-regular))
            └── section-padding (vertical rhythm)
                 └── content
```

## Vertical rhythm
- **Small**: `var(--space-xxlarge)` (48px) top and bottom.
- **Medium** (default): `var(--space-huge)` (64px).
- **Large**: `var(--space-xhuge)` (96px).
- **Huge**: `var(--space-xxhuge)` (128px) for hero and final CTA.

## Background variants
- `bg-default` — `var(--color-surface-primary)` white.
- `bg-muted` — `var(--color-surface-muted)` #f8f8fa, used to separate consecutive content sections.
- `bg-brand-quiet` — `var(--color-surface-secondary)` #f3f3ff, used for testimonial and feature bands.
- `bg-brand` — `var(--color-surface-brand)` frozen-blue with inverted text.
- `bg-brand-deep` — `var(--color-surface-brand-deep)` midnight ink, used for final CTA strips.

## Reference
- [`source.html`](./source.html)
