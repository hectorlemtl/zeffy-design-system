# Footer

Global page footer with multi-column link grid, language/region switcher, logo, and legal.

## Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo]                                                              │
│                                                                     │
│ SOLUTIONS      RESOURCES     ABOUT         PARTNERS    LANGUAGE     │
│ Donations      Blog          Our story     Partners    English  ▾   │
│ Ticketing      Success       Careers       Integrations            │
│ Auctions       Grant Finder  Press                                 │
│ …              Fundraising   Contact                               │
│                Ideas                                                │
│                                                                     │
│ ─────────────────────────────────────────────────────────────────── │
│ © Zeffy 2026  •  Terms  •  Privacy  •  Do not sell my info          │
└─────────────────────────────────────────────────────────────────────┘
```

## Tokens
- Background: `color.surface.muted` (#f8f8fa) OR `color.surface.brand-deep` (inverted — used on hero-heavy pages).
- Vertical padding: `var(--space-xhuge)` top, `var(--space-xlarge)` bottom (legal strip).
- Column heading: `text-style-allcaps`, `font-weight.medium`, `letter-spacing.wide`, `color.text.secondary`.
- Column links: `font-size.regular`, `color.text.primary`, hover → `color.brand.primary`.

## Accessibility
- `<footer role="contentinfo">`.
- Language switcher uses `<select>` with `aria-label="Change language"`.

## Reference
- [`source.html`](./source.html)
