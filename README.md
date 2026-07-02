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
import { AppFrame, Button, Card, StatusPill } from "@effigy-analytics/morass";
import "@effigy-analytics/morass/styles.css";
```

Morass ships unopinionated class names and CSS variables. Applications can override tokens at `:root` or inside a scoped theme container.

## Release Boundary

Morass is consumed by Webbery as a versioned package. Treat these surfaces as public within a published version:

- exports from `@effigy-analytics/morass`
- `@effigy-analytics/morass/styles.css`
- CSS custom properties intended for application theming
- component semantics and required peer dependency ranges

Breaking changes require a coordinated Webbery update and a major version or explicit release note. Webbery should pin Morass to a published version instead of depending on a live sibling checkout once `@effigy-analytics/morass` is available in GitHub Packages.

Before publishing:

```bash
npm run check
```

`npm run check` includes `npm pack --dry-run` after the library build, so CI
verifies the publishable package contents before a release. Then publish through
the GitHub Actions `Publish` workflow from a GitHub release whose tag matches
`v<package.json version>`.
