# Illustration provenance

All 20 SVG files in this directory were downloaded on 2026-04-21 from Zeffy's production Webflow asset CDN (`https://cdn.prod.website-files.com/60af7f6d21134db12548f5b9/…`) — the canonical source serving `www.zeffy.com`.

## Ownership

- **Zeffy-owned:** all `solution-*`, `cause-*`, and `nav-*` SVGs are the brand illustrations used across Zeffy's marketing site. Assumed owned by Zeffy (Simplyk Inc.) unless flagged below.
- **Flags:** none at the time of extraction. If any illustration is later discovered to be a stock asset (e.g. from IconFinder, unDraw, or a similar marketplace), record it here with the attribution required by that license.

## Selection logic

The marketing site carries 200+ images. We selected:

1. Every SVG mapped to a named Zeffy solution (11 files).
2. Every SVG mapped to a named nonprofit cause/audience on the "Nonprofits like you" grid (8 files).
3. The About-Us nav glyph as a representative sample of the nav illustration family (1 file).

Rationale: solutions + causes cover the two axes Claude needs to generate on-brand imagery for Zeffy work: *what the product does* and *who it serves*.

## Naming convention

- `solution-{slug}.svg` — product-line illustrations.
- `cause-{slug}.svg` — audience illustrations.
- `nav-{slug}.svg` — navigation glyphs.

Original Webflow filenames (hash + legacy name) were preserved in git history on first commit.
