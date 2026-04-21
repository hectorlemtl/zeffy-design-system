# Icons

Zeffy's marketing site does not ship a custom icon set. Inline utility icons (check marks, dropdown chevrons, stars) are encoded as inline SVG within component sources.

When icons are needed beyond what lives in a component:
- Prefer **lucide-icons** (MIT license) for UI chrome — its stroke weight and rounded joints match the Zeffy aesthetic.
- Size defaults: `--size-icon-16`, `--size-icon-20`, `--size-icon-40` (see `tokens/spacing.json`).
- Color follows `currentColor` so icons inherit the parent text color.

If Zeffy adopts a bespoke icon set in the future, place SVG source files in this directory with kebab-case names and document them in this README.
