# Hero

Top-of-page section introducing a product, solution, or page. Zeffy uses two hero patterns:

1. **Split hero** — headline + subcopy + CTAs on the left; illustration / animation on the right. Used on Home and Solution pages.
2. **Centered hero** — centered headline, subcopy, and single CTA with an illustration below. Used on About and Press pages.

## Canonical homepage hero (source of truth)

- Background: brand gradient that starts dark (`color.brand.midnight-3`) and resolves toward `color.brand.frozen-blue`.
- Headline (`h1`): `Poppins 54px / 64px / 500`, white. Max two lines at desktop.
- Animated word-swap underneath the headline (8-word list: Donations, Ticketing, Raffles & Lotteries, Donor management, Auction, Online store, Peer-to-peer campaigns, Memberships).
- Subcopy: `Roboto 18px`, `color.text.inverted-secondary`.
- Primary CTA: `button--primary`, copy "Sign up — it's free forever!".
- Right column: Lottie animation of a donation dashboard (swap for static hero illustration when Lottie unavailable).

## Spacing
- Section padding: `var(--space-huge) var(--space-padding-global)` (64px 40px).
- Content max-width: `var(--container-regular)` (960px) for centered hero, `1280px` for split.

## Accessibility
- Single `<h1>` per page.
- Decorative Lottie / illustrations use `aria-hidden="true"`.
- Animated headline text swap respects `prefers-reduced-motion: reduce` — when set, the first word renders statically.

## Reference
- [`source.html`](./source.html)
- [`screenshot.png`](./screenshot.png)
