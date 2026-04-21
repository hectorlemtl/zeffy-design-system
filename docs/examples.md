# Example page patterns

Canonical compositions that combine components into real Zeffy page structures. Use these as references for generating new pages.

## Marketing home page

```
<hello-bar>                   — optional seasonal announcement
<navbar>                      — sticky, white bg
<hero variant="split">        — headline + animated word-swap + CTA, illustration on right
<logo-cloud>                  — "Trusted by 100,000+ nonprofits" + 6–8 logos
<stats-band>                  — 4 numbers (nonprofits / raised / 0% fees / rating)
<section bg="brand-quiet">    — "All the tools in one place" + solution-card grid (9 cards, 3×3)
<section>                     — "How are we free?" explainer — card-feature × 3
<section bg="brand-quiet">    — testimonial carousel with card-testimonial × 3
<section>                     — FAQ accordion (6–8 items)
<callout-cta bg="brand-deep"> — final conversion block
<footer>
```

## Solution page (e.g. /online-donation-platform-nonprofits)

```
<navbar>
<hero variant="split">        — solution-specific headline + single hero illustration
<logo-cloud>
<section>                     — "Everything you need for <solution>" — card-feature grid × 4–6
<section bg="brand-quiet">    — testimonial band
<section>                     — comparison table or checklist (what's included)
<faq-accordion>
<callout-cta>
<footer>
```

## About page

```
<navbar>
<hero variant="centered">     — mission statement + subcopy, no CTA
<stats-band>
<section>                     — "Our story" — rich text with inline images
<section bg="brand-quiet">    — "Our values" — 3–4 card-features
<section>                     — team or B-Corp callout
<callout-cta>
<footer>
```

## Blog article

Out of scope for this design system (illustrations only were extracted). Blog inherits:
- Typography tokens (h1 / h2 / body-lead / body)
- Navbar + footer
- Illustration system for inline images

Layout patterns (TOC, sidebar, related posts) should be derived from the Zeffy marketing site directly.

## Don'ts across all pages

- No more than one `<hero>` per page.
- No more than one `primary` CTA visible in a single viewport.
- Don't alternate `bg="brand"` and `bg="brand-quiet"` between every section — stack 2 white, 1 quiet, 1 white, 1 deep callout.
- Never use `color.accent.*` as a button background. Those colors are for illustrations.
