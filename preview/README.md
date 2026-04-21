# Preview cards

Self-contained HTML pages that render specific slices of the Zeffy design system in a shareable format. Used by Claude Design and by humans reviewing the brand.

| File                 | Shows                                                          |
|----------------------|----------------------------------------------------------------|
| `colors.html`        | Every color token with hex + semantic name                     |
| `type.html`          | Every text style (display, h1–h4, body variants, label)        |
| `spacing.html`       | Spacing scale bars with labels                                 |
| `components.html`    | Primary buttons, badges, hero, card, callout — small previews  |
| `brand.html`         | Logo lockup, primary color, illustration sampler, voice excerpt |

All files import from `../tokens/tokens.css`, so they stay in sync automatically.

See the combined [`../styleguide.html`](../styleguide.html) for a single-page overview.
