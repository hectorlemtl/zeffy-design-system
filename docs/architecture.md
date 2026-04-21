# Architecture Decision — Zeffy Design System

**Target consumers:** `claude.ai/design` (primary), human engineers and designers (secondary).

**Evidence note.** Anthropic's public documentation states Claude Design "reads the components and styles" of a linked repo but publishes no file-format spec. The de-facto community convention is a root `DESIGN.md` (9-section format popularized by `VoltAgent/awesome-claude-design`). This repo optimizes for LLM-readability given that gap.

## Format

**Hybrid:** W3C Design Tokens Community Group (DTCG) JSON as source of truth + a root `DESIGN.md` as the LLM landing page + a compiled `tokens/tokens.css` for runtime.

- **DTCG JSON** — the only token format with a published spec, native aliasing (`{brand.primary}`), and `$type`/`$value` metadata an LLM can reason over without a Style Dictionary build.
- **`DESIGN.md`** — mirrors the convention Claude Design was clearly trained/prompted around; a one-file on-ramp.
- **`tokens.css`** — checked in so consumers can `<link>` or `@import` without a build step.

## File tree

```
zeffy-design-system/
├── README.md                 # human entry point, links everything
├── DESIGN.md                 # LLM entry point, 9-section Claude Design format
├── LICENSE
├── .gitignore
├── design.json               # manifest: version, paths, contacts
├── docs/
│   ├── architecture.md       # this document
│   ├── voice-and-tone.md     # copy rules, product voice
│   ├── token-provenance.md   # where each token came from
│   ├── licensing.md          # font/icon/illustration licenses
│   └── inventory.md          # component coverage matrix
├── tokens/                   # DTCG JSON, one file per category
│   ├── color.json
│   ├── typography.json
│   ├── spacing.json
│   ├── radius.json
│   ├── shadow.json
│   ├── breakpoint.json
│   ├── motion.json
│   └── tokens.css            # compiled CSS custom props, checked in
├── components/               # one folder per component, markdown-first
│   ├── README.md             # index + status
│   └── <component>/
│       ├── index.md
│       ├── source.html
│       └── screenshot.png
└── assets/
    ├── logos/
    ├── illustrations/
    │   ├── index.json
    │   └── PROVENANCE.md
    ├── icons/
    └── fonts/
```

## Rationale per directory

- `DESIGN.md` — LLM-first, single-file brief Claude Design reads.
- `tokens/` — machine truth; DTCG JSON + compiled CSS.
- `components/` — flat, markdown-first, zero-build.
- `assets/` — branded media with explicit provenance.
- `docs/` — human context and governance.
- `design.json` — manifest for forward-compat tooling.

## Anti-patterns

1. Don't nest tokens more than 3 levels.
2. Don't require `npm install` to read tokens — commit `tokens.css` alongside JSON.
3. Don't commit fonts without a redistribution license; link or document instead.
4. Don't use build-time transforms as source of truth — keep DTCG JSON canonical.
5. Don't scatter components — one flat `components/` directory.
6. Don't ship TSX-only components with no static reference; include `source.html`.
7. Don't use opaque names (`color-1`, `gray-alt-2`) — semantic aliases at the surface.
8. Don't mix light/dark via runtime switches; ship `color.json` + `color.dark.json` if needed.
9. Don't let `DESIGN.md` drift from `tokens/` — `token-provenance.md` reconciles them.
10. Don't commit binary Figma / PSD files — export optimized SVG/PNG.

## Sources

- [Set up your design system in Claude Design](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design)
- [Get started with Claude Design](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)
- [Introducing Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
- [VoltAgent/awesome-claude-design (DESIGN.md convention)](https://github.com/VoltAgent/awesome-claude-design)
- [W3C DTCG Design Tokens Format Module (draft)](https://tr.designtokens.org/format/)
- Precedent repos: `Shopify/polaris`, `primer/primitives`, `carbon-design-system/carbon`, `radix-ui/primitives`.
