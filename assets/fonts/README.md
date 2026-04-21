# Fonts

Zeffy uses two Google Fonts families on the marketing site. Both fonts are **self-hosted in this directory** with permissive licenses that allow redistribution (SIL OFL 1.1 and Apache 2.0).

| Family   | Weights in use    | Purpose                     | File                |
|----------|-------------------|-----------------------------|---------------------|
| Poppins  | 500               | Headings (default)          | `poppins-500.woff2` |
| Poppins  | 600               | Headings (semibold / display)| `poppins-600.woff2` |
| Roboto   | 400               | Body (default)              | `roboto-400.woff2`  |
| Roboto   | 500               | Body (medium) / labels      | `roboto-500.woff2`  |
| Roboto   | 600               | Body (semibold)             | `roboto-600.woff2`  |

All files are the **latin subset** (by far the largest share of Zeffy's en-US traffic). For non-latin locales, load additional subsets from Google Fonts.

## Self-host (drop-in)

```html
<link rel="stylesheet" href="./fonts.css">
```

`fonts.css` in this directory contains the `@font-face` declarations pointing at the local woff2 files. Use it in place of a Google Fonts `<link>` to avoid third-party requests.

## Google Fonts link (if you prefer CDN)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Roboto:wght@400;500;600&display=swap">
```

## License

- **Poppins** — [SIL Open Font License 1.1](https://scripts.sil.org/OFL). Free for commercial use including redistribution.
- **Roboto** — [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). Free for commercial use including redistribution.

Versions committed: Poppins v24 (from `fonts.gstatic.com/s/poppins/v24/…`), Roboto v51 (from `fonts.gstatic.com/s/roboto/v51/…`). Downloaded from Google Fonts on 2026-04-21.
