# Reverse Engineering Analysis: MX Icons (`https://mx-icons.vercel.app/`)

This directory contains the verified reverse-engineering dossier and technical specifications for the MX Icons web application, conducted using the REA framework and Chrome DevTools Protocol (CDP) browser-inspection tools.

---

## 1. Executive Summary

- **Target URL**: `https://mx-icons.vercel.app/`
- **Application Nature**: Open-source React icon library showcase and documentation website for the npm package `mx-icons` (v1.1.2) by `ig-imanish`.
- **Core Technology Stack**:
  - **Bundler & Runtime**: Vite + React 18 (SPA)
  - **Styling Architecture**: OKLCH design tokens, custom CSS variables, responsive grid system, dark/light theme switching with localStorage persistence
  - **Typography**: Monospace `"IBM Plex Mono"` for code; native UI system font stack for interface
  - **Data Catalog**: 2,243 icon families, 6 style variants per family (`bold`, `broken`, `bulk`, `linear`, `outline`, `twotone`), totaling 13,458 icon component variants
  - **Pagination**: 72 icons per page (187 pages total in 'ALL' view)
  - **Search Engine**: In-memory multi-field matcher (slug, name, component) augmented with a verified 70+ term synonym dictionary (`Ro`) and 140ms debounce
  - **Customization Modal**: Real-time SVG customizer adjusting size (`8px`–`96px`) and color picker (`#292D32`), generating copy-paste TSX code snippets

---

## 2. Analysis Dossier Structure

| Specification Document | File Link | Summary of Contents |
| :--- | :--- | :--- |
| **Route Inventory** | [`routes.md`](./routes.md) | Full route list (`/`, `/installation`), navigation flow, loading fallback state, scroll restoration, and SEO meta tags. |
| **Component Inventory** | [`components.md`](./components.md) | Component hierarchy tree, component specifications, props contracts, markup templates, and responsive variations. |
| **Design System** | [`design-system.md`](./design-system.md) | Complete OKLCH color token ledger for light and dark modes, typography scales, spacing scale, border radii, shadows, and keyframes. |
| **Interactions & Behaviors** | [`interactions.md`](./interactions.md) | Theme toggle state machine, 140ms search debounce, synonym dictionary (`Ro`), modal customizer, clipboard feedback, and pagination logic. |
| **Asset Inventory** | [`assets.md`](./assets.md) | Images, vector SVGs, stylesheets, JavaScript bundles, dynamic icon chunks, and remote API endpoints (npm registry, GitHub repo stats, Umami analytics). |
| **Unknowns & Limitations** | [`unknowns.md`](./unknowns.md) | Verified observations vs. inferences, tool boundaries, attach-window coverage, and non-observable build-time aspects. |
| **Implementation Plan** | [`plan.md`](./plan.md) | 9-phase prioritized engineering roadmap for rebuilding the application independently from scratch. |

---

## 3. Verified REA Evidence Ledger

All analytical findings are anchored in verified REA observations:

| REA Operation | Evidence ID | Provider | Observed Artifact / Findings |
| :--- | :--- | :--- | :--- |
| `list_browser_targets` | `ev_e361190e1e8dcec959aa53ecabf3e781f14c1358f7da8b50516ccce2b2148ae8` | `rea-cdp-browser` | Validated target `1A9125919ED155FD60F7CBB14B76A508` on `https://mx-icons.vercel.app/`. |
| `inspect_web_page` | `ev_862cbb10ba5a64f03cb84f29bfa2f8b0bb2aa1ecf38ea1dac0fe1a502be2e709` | `rea-cdp-browser` | Captured 908 DOM nodes, accessibility tree (607 nodes), 76 resources, and localStorage keys `['darkMode']`. |
| `capture_web_screenshot` | `ev_42f1032bd93207812b57dbb546243efc1a072bfeb883364afffae130e1c6ba5c` | `rea-cdp-browser` | 1280x720 initial viewport PNG capture (SHA-256: `ed6c07bdf7ab02bf75840a76c00f49fc036792a1eeb587edc5e8ef9b687e4053`). |
| `analyze_web_bundle` | `ev_557d0609477dc2dd8c648856aad871821b9b0c3a313f1951de93fc77c2f6af03` | `rea-cdp-browser` | Derived chunk graph (74 chunk nodes, 13,126 edges), routes `/` and `/installation`, endpoint `registry.npmjs.org/mx-icons`, detected React and Vite runtimes. |

---

## 4. Visual Evidence & Screenshots Archive

Captured at exact responsive viewports in both color schemes, located in `analysis/screenshots/`:

- **Desktop (1280x800)**:
  - Light Mode: [`desktop-light.png`](./screenshots/desktop-light.png)
  - Dark Mode: [`desktop-dark.png`](./screenshots/desktop-dark.png)
- **Tablet (768x1024)**:
  - Light Mode: [`tablet-light.png`](./screenshots/tablet-light.png)
  - Dark Mode: [`tablet-dark.png`](./screenshots/tablet-dark.png)
- **Mobile (375x812)**:
  - Light Mode: [`mobile-light.png`](./screenshots/mobile-light.png)
  - Dark Mode: [`mobile-dark.png`](./screenshots/mobile-dark.png)
- **Documentation Route (`/installation`)**:
  - Desktop Light: [`installation-desktop-light.png`](./screenshots/installation-desktop-light.png)
  - Desktop Dark: [`installation-desktop-dark.png`](./screenshots/installation-desktop-dark.png)
  - Mobile Light: [`installation-mobile-light.png`](./screenshots/installation-mobile-light.png)
- **Interactive UI States**:
  - Icon Customization Modal: [`icon-customization-modal.png`](./screenshots/icon-customization-modal.png)
  - Search Active Filter: [`search-results-user.png`](./screenshots/search-results-user.png)
  - Search Empty State: [`search-empty-state.png`](./screenshots/search-empty-state.png)
