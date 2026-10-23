# Kink Korps — Anything Goes: Halloween Edition

Static event website at https://kinkkorps.com, published by GitHub Pages from `main`.

- `index.html`: semantic page content, event facts, original payment destinations.
- `halloween.css`: responsive Halloween layout; local fonts, no build step.
- `halloween.js`: accessible native age dialog, Zelle copying, and presale cutoff.
- `assets/halloween/`: supplied original photos/logos and cropped artwork from the approved concept. People are never regenerated or retouched. The chrome Mr. Satan logo only has its outside white page margin cropped away. Nu Vibez uses the existing source logo in `assets/nu-vibez-logo.jpg`.
- `assets/halloween/fonts/`: locally bundled Metal Mania and Barlow Condensed with their OFL licenses.

Presale automatically closes at **2026-10-23 19:00 Eastern**. The payment area then hides and admission becomes $20 at the door. Payment recipients are retained from the previous live page: Cash App `$geo969`, Venmo `@thesatans`, PayPal `@krystalalvarez544`, Zelle `832-387-3426`. This is the existing manual payment/email-ticket process, not automated ticket delivery.

Run locally with `python -m http.server 8000`. No dependencies or build command required. Keep `CNAME` and `.nojekyll`. Legacy styles and `gallery.html` remain for compatibility but are not loaded by the new homepage.

Validated at 320, 390, 768, and 1440px: no horizontal overflow or broken images. Checked age confirmation, keyboard Escape behavior, session persistence, ticket navigation, Zelle copying/fallback, and the before/at-7-PM ticket state transition.
