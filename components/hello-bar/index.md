# Hello Bar

Site-wide announcement strip at the very top of the page, above the nav. Zeffy uses it for seasonal campaigns, webinars, and pricing messaging.

## Tokens
- Background: `color.surface.brand-deep` (#0f0e5b) OR `color.accent.yellow` for promotional.
- Text: `color.text.inverted` on deep / `color.text.primary` on yellow.
- Font: `font-size.regular`, `font-weight.medium`.
- Height: 44px desktop, auto-wrap to 2 lines mobile.
- Close button: right-aligned, `color.text.inverted-secondary` × icon, 24px hit target.
- Inline CTA: underline on hover, never a full button (keep it lightweight).

## States
- Dismissed state persists via `localStorage['zf-hello-bar:dismissed']` = <announcement ID>.

## Accessibility
- `<aside role="banner" aria-label="Announcement">`.
- Dismiss button: `aria-label="Dismiss announcement"`.

## Reference
- [`source.html`](./source.html)
