# Stats Band

Horizontal row of trust-building numbers. Zeffy uses these above testimonials ("100,000+ nonprofits", "$1B+ raised", "0% in fees").

## Anatomy
```
[ number ]   [ number ]   [ number ]   [ number ]
 label        label        label        label
```

## Tokens
- Background: `color.surface.primary` OR `color.surface.brand-deep` (inverted).
- Number: `font-size.3xl` / `font-weight.semibold`, `color.brand.primary` on light surface OR `color.accent.sea-foam-green` on dark surface.
- Label: `font-size.regular`, `color.text.secondary`.
- Vertical padding: `var(--space-xhuge)` on light surface, `var(--space-xxhuge)` on dark surface hero-band.

## Reference
- [`source.html`](./source.html)
