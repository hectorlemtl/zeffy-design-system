# Solution Card

Used in the navigation mega-menu and on solution overview pages. Each card links to a single Zeffy solution (Ticketing, Donations, Auctions, etc.).

## Anatomy
```
[40px illustration]
Title (text-size-medium, weight-semibold)
Description (color.text.secondary, regular)
```

## Usage
- One per solution. Illustrations live at `assets/illustrations/solution-*.svg`.
- Link target: the canonical solution page (e.g. `/online-donation-platform-nonprofits`).
- On the homepage solutions grid, cards are laid out in a 3 × 4 responsive grid (1 column on mobile).

## Tokens
- Icon size: `var(--size-icon-40)` (40px).
- Title: `font-size.medium` (16px), `font-weight.semibold` (600).
- Description: `font-size.regular` (14px), `color.text.secondary`.
- Gap (icon → text): `var(--space-small)`.
- Hover: `color.brand.primary` title color; arrow glyph appears trailing.

## Reference
- [`source.html`](./source.html)
