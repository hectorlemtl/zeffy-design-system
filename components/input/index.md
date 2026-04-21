# Input

Text and email fields used in newsletter signup, contact, and embedded donation forms.

## Anatomy
```
Label
[ input.............................. ]
Helper text / error
```

## Tokens
- Height: 48px.
- Padding: `12px 16px`.
- Radius: `var(--radius-8)`.
- Border: 1px solid `color.neutral.slate-alpha`.
- Focus: border `color.brand.primary` + `var(--shadow-brand-glow)` ring.
- Label: `font-size.regular`, `font-weight.medium`, `color.text.primary`.
- Placeholder: `color.neutral.slate-muted`.
- Error: border + helper text `color.status.danger`.

## Reference
- [`source.html`](./source.html)
