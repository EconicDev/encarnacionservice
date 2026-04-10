# Encarnacion Service SRL

Corporate website for Encarnacion Service SRL, a shipping and customs brokerage company based in Santo Domingo, Dominican Republic.

**Tech stack:** Astro v6, React 18, Tailwind CSS v3, i18next, TypeScript

## Prerequisites

- Node.js 22+
- npm

## Getting Started

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
  components/     # Astro (.astro) and React (.tsx) components
  i18n/           # i18next initialization (config.ts)
  layouts/        # Page layouts (project.astro)
  pages/          # File-based routing
    *.astro       # Spanish pages (default locale, no URL prefix)
    en/*.astro    # English pages (served under /en/)
  styles/         # global.css (Tailwind directives + CSS custom properties)
  utils/          # Helpers (nav translations, Excel consumer)
  types.ts        # Shared TypeScript interfaces

public/
  assets/         # SVG icons and graphics
  fonts/          # Nunito, FreightSans, Freight Text
  images/         # Photography (banners, staff, logistics)
  locales/        # Translation JSON files
    es/           # Spanish (6 namespace files)
    en/           # English (6 namespace files)
  logo/           # Logo variants (SVG, PNG)
```

## Internationalization (i18n)

The site is bilingual: **Spanish** (default) and **English**.

- **Routing:** Astro's built-in i18n with `prefixDefaultLocale: false`
  - Spanish: `/`, `/about/`, `/services/`, `/contact/`
  - English: `/en/`, `/en/about/`, `/en/services/`, `/en/contact/`
- **Translations:** i18next with static JSON imports (no runtime backend)
  - Config: `src/i18n/config.ts`
  - Files: `public/locales/{es,en}/{namespace}.json`
  - Namespaces: `common`, `home`, `about`, `services`, `contact`, `press`
- **Per-page pattern:** Each page calls `changeLanguage("es"/"en")` and `setDefaultNamespace("namespace")` in frontmatter, then uses `t("key")` in templates
- **Language switcher:** `LanguageSelectorWrapper.astro` renders a `<select>` dropdown using `getRelativeLocaleUrl()` from `astro:i18n`
- **SEO:** `HeadHrefLangs.astro` generates `<link rel="alternate" hreflang>` tags

### Adding/editing translations

1. Edit the JSON files in `public/locales/{es,en}/`
2. Keys are nested objects accessed with dot notation: `t("nav.home")`, `t("cta.features.one")`
3. Both language files must have matching keys

### Adding a new page

1. Create the Spanish version in `src/pages/` (e.g., `newpage.astro`)
2. Create the English version in `src/pages/en/` (e.g., `en/newpage.astro`)
3. In each page's frontmatter, import `../i18n/config` first, then call `changeLanguage()` with the appropriate locale

## Styling

Tailwind CSS v3 via PostCSS (configured in `postcss.config.cjs` and `tailwind.config.cjs`).

### Custom color palette

| Name | Usage | Range |
|------|-------|-------|
| `fulvous-*` | Primary (orange/brown) | 100-900 |
| `dodger-blue-*` | Secondary (blue) | 100-900 |
| `black-coral-*` | Tertiary (slate gray) | 100-900 |

### Custom breakpoints

`xs: 400px` in addition to Tailwind defaults (sm, md, lg, xl, 2xl).

### Fonts

Primary: **Nunito** (loaded from `public/fonts/Nunito.ttf`), fallback to Inter and system sans-serif.

## Components

The project uses two component types:

- **Astro components** (`.astro`) for static/server-rendered content: layouts, cards, banners, footer
- **React components** (`.tsx`) for interactive UI: navigation (Nav.tsx), contact form (ContactForm.tsx), dropdowns (DropDown.tsx)

React components are hydrated with Astro client directives:
- `client:idle` — hydrate when browser is idle (used for Nav)
- `client:load` — hydrate immediately on page load
- `client:visible` — hydrate when scrolled into view

## Deployment

### Development (GitHub Pages)

- **Trigger:** Push to `dev` branch
- **Workflow:** `.github/workflows/deploy.yml`
- Uses `withastro/action@v2` to build and deploy

### Production (AWS S3 + CloudFront)

- **Trigger:** Push to `prod` branch
- **Workflow:** `.github/workflows/prod.yml`
- Builds with `npm ci && npm run build`, syncs `./dist/` to S3, invalidates CloudFront cache

**Required GitHub Secrets:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `BUCKET_ID`
- `DISTRIBUTION_ID`

## Code Quality

```bash
npm run prettier  # Format all files
```

- **ESLint:** Configured in `.eslintrc.js` with `plugin:astro/recommended` and `plugin:astro/jsx-a11y-recommended`
- **Prettier:** Tabs, no semicolons, single quotes, trailing commas (ES5)
