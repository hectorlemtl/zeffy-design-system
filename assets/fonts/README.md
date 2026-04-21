# Fonts

Zeffy uses two Google Fonts families on the marketing site. **Font files are not checked into this repo** — reference them via Google Fonts or self-host under your site's privacy policy.

| Family   | Weights in use    | Purpose                     |
|----------|-------------------|-----------------------------|
| Poppins  | 500, 600          | Headings, display type      |
| Roboto   | 400, 500, 600     | Body text, UI labels        |

## Google Fonts link (drop-in)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Roboto:wght@400;500;600&display=swap">
```

## License

- **Poppins** — SIL Open Font License 1.1. Free for commercial use including redistribution.
- **Roboto** — Apache License 2.0. Free for commercial use including redistribution.

Both can legally be self-hosted. If you choose to self-host, add the `.woff2` files to this directory and document their version in `docs/licensing.md`.
