# Components

Each component lives in its own folder with three files:

- `index.md` — spec: variants, anatomy, states, usage, a11y
- `source.html` — zero-dep HTML/CSS reference (uses tokens from `../../tokens/tokens.css`)
- `screenshot.png` — visual reference from the live marketing site

## Status

| Component             | Status     | Notes |
|-----------------------|------------|-------|
| `button`              | Documented | Primary, outline, ghost, sizes |
| `navbar`              | Documented | Desktop + mobile + dropdown mega-menu |
| `hero`                | Documented | Split, centered, with animated headline |
| `section-layout`      | Documented | Global padding + container pattern |
| `card-feature`        | Documented | Icon + title + description |
| `card-testimonial`    | Documented | Quote + author + logo |
| `card-solution`       | Documented | Illustration + title + link |
| `callout-cta`         | Documented | Full-width CTA strip |
| `badge`               | Documented | Pill with brand tint |
| `input`               | Documented | Text / email fields |
| `footer`              | Documented | Multi-column link grid |
| `faq-accordion`       | Documented | Expand / collapse list |
| `stats-band`          | Documented | 4-up trust numbers (100,000+ / $1B+ / 0% / 4.9) |
| `logo-cloud`          | Documented | Customer logo grid with grayscale treatment |
| `hello-bar`           | Documented | Top-of-site announcement strip, dismissible |

## Conventions

- Class names use Zeffy's Webflow Client-First style where practical (e.g., `cf-section`, `cf-container-medium`, `cf-padding-global`) but `source.html` also works standalone with the token CSS.
- All components pass WCAG 2.2 AA contrast against their documented surfaces.
- Interactive states documented: default, hover, focus-visible, active, disabled, loading.
