# Morass

Morass is a small React UI framework for durable product interfaces: app shells, dense dashboards, forms, modal workflows, and status-heavy operational views.

The package is currently optimized for Webbery, but the public API is intentionally generic so it can become a standalone framework.

## Status

- TypeScript React package
- Vite library build
- CSS token system
- Accessible primitives for shell, cards, controls, tabs, modals, progress, and status
- CI-ready lint, typecheck, test, and build scripts

## Development

```bash
npm install
npm run check
npm run build
```

## Public API

```tsx
import { AppFrame, Button, Card, StatusPill } from "@kevinblum/morass";
import "@kevinblum/morass/styles.css";
```

Morass ships unopinionated class names and CSS variables. Applications can override tokens at `:root` or inside a scoped theme container.
