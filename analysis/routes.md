# Route Inventory: MX Icons (`https://mx-icons.vercel.app/`)

## 1. Overview & Architectural Routing Model
The target application is a Single Page Application (SPA) built using **Vite** and **React** (React 18), utilizing client-side routing. Route transitions are handled entirely in the browser without full document reloads, preserving client application state (such as dark mode preferences and in-memory icon caches).

- **Framework / Bundler**: Vite + React
- **Router Implementation**: React client-side router (`createBrowserRouter` / `BrowserRouter`)
- **Base URL**: `https://mx-icons.vercel.app/`
- **Route Splitting Strategy**: Code-split route chunks using `React.lazy()` and `React.Suspense` with explicit fallback loading markup.

---

## 2. Verified Route Table

| Route Path | Page Title / Identity | Component / Chunk | Purpose & Public Surface | Authentication / Protection |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `MX Icons - Open Source React Icon Library \| 5,600+ Icons` | `Home` (in `index-BHCG4WVd.js`) | Primary landing page, interactive hero, package manager installer, full-text search with synonym expansion, variant filter tabs, 13,458-icon component catalog (paginated at 72 items/page), icon customization modal, and footer. | Fully Public |
| `/installation` | `Installation Guide \| MX Icons` | `InstallationPage` (lazy chunk) | Documentation and setup guide: installation commands (npm, pnpm), quick start code snippet, props reference table (`size`, `color`, `className`), sticky TOC, and back-to-home CTA. | Fully Public |
| `*` (Catch-all / 404) | Fallback / Redirect | React Router default | Unmatched client routes resolve or fallback to the home route. | Fully Public |

---

## 3. Route Details

### Route 1: Landing / Catalog (`/`)
- **URL**: `https://mx-icons.vercel.app/`
- **Canonical URL**: `https://mx-icons.vercel.app/`
- **DOM Structure**:
  - `div.page-wrap`
    - `nav.site-nav` (Global sticky navigation bar)
    - `header.hero` (Brand header, contribution link, install command widget, hero CTA buttons)
    - `div.gallery-controls` (Search bar with `/` shortcut prefix + 7 variant tabs)
    - `div.icons-grid` (CSS grid containing 72 icon cards per page)
    - `div.pagination` (Previous, page counter, Next)
    - `div.modal-overlay` (Conditionally rendered when an icon card is clicked)
    - `footer.footer` (Global brand footer)
- **Primary Reactive States**:
  - `searchQuery` (string, debounced by 140ms)
  - `activeVariant` (`all` \| `bold` \| `broken` \| `bulk` \| `linear` \| `outline` \| `twotone`)
  - `currentPage` (number, 1-indexed, calculated as `Math.ceil(filteredIcons.length / 72)`)
  - `selectedIcon` (null or icon metadata object for active modal)
  - `isDarkMode` (boolean, synchronized with `document.documentElement.classList.contains('dark')`)
  - `packageManager` (`npm` \| `pnpm`)

### Route 2: Installation Guide (`/installation`)
- **URL**: `https://mx-icons.vercel.app/installation`
- **DOM Structure**:
  - `div.installation-page`
    - `nav.site-nav` (Global sticky navigation bar, with `Installation` nav link highlighted as `.active`)
    - `div.docs-container`
      - `div.docs-content`
        - `h1.page-title`: "Installation Guide"
        - `p.page-description`: "How to install and use MX Icons in your React project."
        - `section.docs-section`: Install section with `.install-cmd-card`
        - `section.docs-section`: Quick Start section with `.usage-card` and syntax-highlighted TSX code snippet
        - `section.docs-section`: Props & Customization table (`table.props-table`)
        - `div.back-button-container`: Link back to `/` ("BACK TO HOME")
      - `aside.docs-toc`: Sticky table of contents sidebar navigation
    - `footer.footer` (Global brand footer)

---

## 4. Route Transitions & Loading States

### Loading State (Observed via CDP)
When navigating between routes via client-side code splitting, `React.Suspense` renders the fallback:
```html
<div style="padding: 40px; text-align: center; opacity: 0.6;">Loading…</div>
```
- **Transition Style**: Seamless asynchronous chunk loading.
- **Scroll Restoration**: On route change (`pathname`), an explicit effect executes:
  ```javascript
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  ```
  This guarantees that users land at the top of the new view.

---

## 5. SEO & Metadata Specifications

### Document `<head>` Attributes (Verified from Target)
```html
<meta charset="utf-8" />
<link rel="icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/mx-icons.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/mx-icons.png" />
<link rel="apple-touch-icon" href="/mx-icons.png" />
<meta name="theme-color" content="#8b5cf6" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="google-site-verification" content="GLqX79VJtNwpxjncXEMgMJQqQzkEKj56YyoSFlDzFKA" />

<!-- Primary Meta Tags -->
<title>MX Icons - Open Source React Icon Library | 5,600+ Icons</title>
<meta name="title" content="MX Icons - Open Source React Icon Library | 5,600+ Icons" />
<meta name="description" content="Free open-source React icon library with 5,600+ beautiful icons. Tree-shakable, customizable, and easy to use. Perfect for your React projects." />
<meta name="keywords" content="react icons, icon library, svg icons, open source icons, react components, free icons, mx icons, web icons, ui icons" />
<meta name="author" content="MX Icons" />
<meta name="robots" content="index, follow" />
<meta name="language" content="English" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mx-icons.vercel.app/" />
<meta property="og:title" content="MX Icons - Open Source React Icon Library | 5,600+ Icons" />
<meta property="og:description" content="Free open-source React icon library with 5,600+ beautiful icons. Tree-shakable, customizable, and easy to use. Perfect for your React projects." />
<meta property="og:image" content="https://mx-icons.vercel.app/preview.png" />

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://mx-icons.vercel.app/" />
<meta property="twitter:title" content="MX Icons - Open Source React Icon Library | 5,600+ Icons" />
<meta property="twitter:description" content="Free open-source React icon library with 5,600+ beautiful icons. Tree-shakable, customizable, and easy to use. Perfect for your React projects." />
<meta property="twitter:image" content="https://mx-icons.vercel.app/preview.png" />
<meta property="twitter:creator" content="@mx_icons" />

<link rel="canonical" href="https://mx-icons.vercel.app/" />
```
