# Changelog

All notable Morass changes should be recorded here before publishing a package version.

## 0.3.0

- **Behavior change:** morass now follows the OS dark-mode preference when no `data-m-theme` attribute is set. Pin `data-m-theme="light"` on `<html>` to keep always-light rendering.
- Built-in dark theme: set `data-m-theme="dark"` on any subtree. Themes are plain token sets; custom themes are consumer CSS.
- Every color is now a `--m-*` token (new: neutral pill, sidebar, progress step, input, header, backdrop, focus ring, modal shadow, on-primary) — enforced by test.
- Entire stylesheet moved into `@layer morass`: consumer CSS and token overrides win regardless of import order.
- `AppFrame` lays out single-column when no `sidebar` is provided (previously content landed in the 248px sidebar track).
- New `ButtonLink`: anchor with Button styling, for CTAs and marketing links.
- `Card` gains a `footer` slot for card-level actions.
- New marketing primitives: `Hero` (eyebrow/title/lede/actions) and `PageSection` (label + content).

## 0.1.1

- Move package ownership to the Effigy Analytics GitHub organization as `@effigy-analytics/morass`.

## 0.1.0

- Initial private package foundation for Webbery.
- React primitives for app shells, cards, controls, tabs, modals, progress, status, and reminder-oriented interfaces.
- CSS token system exported through `@kevinblum/morass/styles.css`.
