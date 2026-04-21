# Inventory

## Scope

Pages and assets analyzed for this design system, all on `www.zeffy.com` (en-US locale, 2026-04-21).

## Pages analyzed

| Page                            | URL slug                                       | Purpose                                  |
|---------------------------------|------------------------------------------------|------------------------------------------|
| Homepage                        | `/en-us`                                       | Hero, social proof, solution grid, CTAs  |
| Donations (solution)            | `/en-us/online-donation-platform-nonprofits`   | Donation-specific hero + features        |
| Ticketing (solution)            | `/en-us/ticketing-system-fundraising-events`   | Ticketing-specific hero + features       |
| Auctions (solution)             | `/en-us/auction`                                | Silent and live auction tools            |
| 100% Free (about-y)             | `/en-us/100-free-for-nonprofits-like-you`       | Zeffy's pricing manifesto                |
| Fundraising hub                 | `/en-us/how-to-fundraise`                       | Resources landing                        |
| Blog (representative articles)  | `/en-us/…` (blog CMS)                          | Illustration style only                  |

Additional Webflow pages (~100 total, per `pages_list`) were scanned for design consistency but not re-extracted for tokens.

## Webflow components inventoried

From `mcp__webflow__components_list` on site `60af7f6d21134db12548f5b9` (111 total, 100 returned). Key components mapped to this design system:

| Webflow component           | This repo component |
|-----------------------------|---------------------|
| `Nav-Zeffy`, `Nav-Website`  | `components/navbar/` |
| `Element / Button`          | `components/button/` |
| `Solution Hero - Section CF`, `Classic Hero - Section CF` | `components/hero/`, `components/section-layout/` |
| `Cards / w-Icon`, `Card / Slide w-Image` | `components/card-feature/` |
| `Testimonial Card - CF`, `Testimonials Section` | `components/card-testimonial/` |
| `Navbar link - CF element` (mega-menu item) | `components/card-solution/` |
| `CTA product`, `Donate CTA - Section CF` | `components/callout-cta/` |
| `Footer - Section CF`       | `components/footer/` |
| `Accordion / FS Faq`, `FAQ - Section CF` | `components/faq-accordion/` |
| `Hellobar - CF section`     | — (use `components/callout-cta/` inverted) |

## Tokens extracted

- Color: 42 tokens
- Typography: fontFamily ×2, fontWeight ×3, fontSize ×12, lineHeight ×4, letterSpacing ×3, textStyle compositions ×10
- Spacing: 14 base + 3 icon sizes + 1 container size
- Radius: 5 tokens
- Shadow: 4 tokens
- Breakpoint: 6 tokens
- Motion: 6 tokens

## Assets extracted

- **Logos:** 3 (wordmark SVG, favicon PNG, apple-touch-icon PNG)
- **Illustrations:** 20 (11 solution, 8 cause, 1 nav glyph) — capped per ASSUMPTIONS-A11

## Gaps / known limitations

- **Product app (`app.zeffy.com`)** not analyzed — out of scope by user direction. If added later, expect additional tokens for data-density layouts (tables, table-dense spacing, form controls beyond email input).
- **Locale variants:** `fr-ca` and `en-gb` subdirectories were not extracted. They share the same tokens but copy voice differs.
- **Blog CMS** — only illustration style was sampled. Blog post component (hero, TOC, inline quote) was not extracted.
- **Embedded third-party widgets** (Wistia video player, Webflow forms, GTM banners) are referenced but not abstracted into the design system.
