# Kink Korps — Anything Goes (Fri Oct 23, 2026)

Event landing page. Static site, relative paths, GitHub Pages–ready (no CNAME yet).

- `theme.css` — **the one place for colors + fonts** (CSS variables). Swap the look here.
- `styles.css` / `extras.css` — base layout + components (use theme variables).
- `oct23.css` — Oct 23 page sections, sticky mobile ticket bar.
- `index.html` — page. Ticket config is at the bottom script:
  - Presale payment options (Cash App, Venmo, PayPal, Zelle) are in the `#tickets` markup (`.js-pay-block`).
  - `PRESALE_ENDS` — noon ET Fri 10/23; after that the payment block hides and the page switches to "$20 at the door" automatically.
- `gallery.html` (Vault) and `seasonal.css` are kept but unlinked from the nav for this relaunch.
