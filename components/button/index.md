# Button

Primary interactive element for submitting actions or navigating.

## Variants
- `primary` — periwinkle bg (`color.brand.primary`), white text. One per view.
- `outline` — transparent bg, `color.brand.primary-light` border, `color.brand.primary-dark` text. Secondary.
- `ghost` — no bg or border, `color.text.intense` text. Tertiary / in-line.

## Sizes
- `sm` — 14px text, `8px 12px` padding.
- `md` (default) — 16px text, `12px 16px` padding.
- `lg` — 18px text, `16px 24px` padding.

## Anatomy
`[leading-icon?] → label → [trailing-icon?]`

## States
| State         | Primary                                   | Outline                                  |
|---------------|-------------------------------------------|------------------------------------------|
| default       | bg `brand.primary`                        | border `brand.primary-light`             |
| hover         | bg `brand.primary-dark`                   | bg `surface.secondary` (`#f3f3ff`)       |
| focus-visible | `shadow.brand-glow` ring                  | `shadow.brand-glow` ring                 |
| active        | bg `brand.primary-darkest`                | bg `brand.primary-moderate`              |
| disabled      | 50% opacity, `cursor: not-allowed`        | same                                     |
| loading       | spinner replaces leading-icon, `aria-busy="true"` | same                             |

## Usage
- Use **one `primary`** per view; multiple primaries dilute the call-to-action.
- Zeffy's signature CTA copy is action-first and warm: "Sign up for free", "Start fundraising — it's free forever!", "Get started".
- Always pair color with text; never rely on color alone for meaning.

## Accessibility
- 44px minimum touch target at `md` and up.
- Visible 4px focus ring (`--shadow-brand-glow`), 3:1 contrast against surface.
- `role="button"` implied via `<button>`; use `<a>` only when the control navigates.
- `aria-busy="true"` during loading, `aria-disabled="true"` when disabled.

## Reference
- Static markup: [`source.html`](./source.html)
- Screenshot: [`screenshot.png`](./screenshot.png)

## Source-of-truth measurements (from live site)
- Primary: `padding: 12px 16px; border-radius: 8px; font: 500 16px "Roboto"; background: #5555e7; color: #fff`.
- Outline: same size; `border: 1px solid #bfbfff; color: #2a2ac4; background: transparent`.
