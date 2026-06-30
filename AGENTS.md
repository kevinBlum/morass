# Morass Contributor Notes

Morass is the reusable UI foundation intended to serve Webbery first and become a public React framework later.

- Keep public exports stable and typed from `src/index.ts`.
- Prefer small composable primitives over app-specific components.
- Prefix CSS classes with `m-` and expose customization through CSS variables.
- Do not add Webbery product copy or domain behavior to this repo.
- Run `npm run check` before publishing or opening a PR.
