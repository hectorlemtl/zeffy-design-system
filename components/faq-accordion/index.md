# FAQ Accordion

Expand/collapse list used on pricing, solution, and help pages.

## Anatomy
```
┌──────────────────────────────────────┐
│ Question                        +/−  │
├──────────────────────────────────────┤
│ Answer (revealed on open)            │
└──────────────────────────────────────┘
```

## Tokens
- Container: `color.surface.primary`, border 1px `color.neutral.slate-alpha`, radius `var(--radius-12)`.
- Row padding: `var(--space-medium) var(--space-large)`.
- Question: `font-weight.semibold`, `font-size.medium`.
- Answer: `color.text.secondary`, `font-size.regular`, `line-height.normal`.
- Divider between items: 1px `color.neutral.slate-alpha`.
- Open indicator: chevron that rotates 180° over `var(--duration-fast)`.

## Accessibility
- Use `<button aria-expanded="…" aria-controls="answer-1">` on the trigger.
- Each `answer` region gets `role="region" aria-labelledby="question-1"`.
- Supports keyboard: Enter / Space toggles; Tab advances.

## Reference
- [`source.html`](./source.html)
