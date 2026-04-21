# Navbar

Global site navigation. Fixed top bar with logo, product dropdown, resources dropdown, language switch, and primary CTA.

## Structure
```
[logo]  [$0 Pricing]  [Solutions ▾]  [Resources ▾]  [About ▾]   …  [Log in]  [Sign up for free]
```

## Layout
- Padding: `var(--space-padding-global)` (40px) horizontal gutter on desktop.
- Height: 72px desktop, 64px mobile.
- Background: `var(--color-surface-primary)` solid white, 1px bottom border `#10344212`.
- Sticky top, shrinks / adds `shadow-soft` on scroll.

## Dropdowns
- Mega-menu pattern: categorized columns, each row is `icon + title + description`.
- Row icon: 40px SVG (Zeffy solution illustrations).
- Row title: `text-size-medium text-weight-semibold` (`1rem / 600`).
- Row description: `color.text.secondary` at `text-size-regular` (`0.875rem`).
- Column label: `text-style-allcaps text-weight-medium`.

## Mobile
- Hamburger menu opens a full-screen drawer.
- Primary CTA (`outline` variant) stays visible at the bottom of the drawer.

## Accessibility
- `role="navigation"` + `aria-label="Primary"`.
- Each dropdown uses `aria-expanded` + `aria-controls`.
- Focus order follows visual order; menu is fully keyboard-navigable (Tab, Enter, Esc to close).
- Skip-to-content link precedes the nav in the DOM.

## Reference
- [`source.html`](./source.html)
- [`screenshot.png`](./screenshot.png)
