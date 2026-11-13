# Prioritized Implementation Plan: Rebuilding MX Icons

This step-by-step roadmap provides an engineering blueprint to rebuild the MX Icons website independently with 100% architectural and visual fidelity.

---

## Phase 1: Project Scaffolding & Design System Setup
- [ ] **1.1 Initialize Vite + React Project**:
  - Scaffold project using `npm create vite@latest . -- --template react-ts` or `react`.
  - Install dependencies: `mx-icons`, `clsx`, `lucide-react` (or native SVG icons for UI controls), `react-router-dom`.
- [ ] **1.2 Configure Design Tokens & Stylesheet**:
  - Configure `src/index.css` with the exact OKLCH tokens under `:root` and `.dark` (from `design-system.md`).
  - Set up CSS variables: `--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--accent`, `--card`, `--site-nav-height: 53px`, `--radius: 0.5rem`.
  - Define keyframe animations `@keyframes fadeIn` and `@keyframes modalEnter`.
  - Import monospace font `"IBM Plex Mono"` and configure UI system font stacks.
- [ ] **1.3 Implement Theme Management**:
  - Implement `useDarkMode()` custom hook with `localStorage` (`darkMode`, `darkModeManual`) and `prefers-color-scheme` fallback.
  - Mount theme provider at the root level to toggle `.dark` on `document.documentElement`.

---

## Phase 2: Shell, Navigation & Layout
- [ ] **2.1 Global Site Navigation (`SiteNav`)**:
  - Sticky container (`position: sticky; top: 0; z-index: 50`) with backdrop blur (`blur(12px)`).
  - Brand logo (`/mx-icons.png`, 20x20px), text `mxicons`, and version badge `v1.1.2`.
  - Router links (`Home`, `Installation`) with active indicator styling.
  - Social icons: GitHub (external link) and npm (external link).
  - Theme toggle button with animated Sun/Moon SVG icons.
  - Mobile hamburger toggle (`<640px`) and floating dropdown menu (`.site-nav-mobile-menu`).
- [ ] **2.2 Global Footer (`Footer`)**:
  - Centered brand block, logo, tagline: "Open source, beautiful icons for React projects."
  - Links: `Home`, `Installation`, `GitHub`, `npm`.
  - Dynamic copyright notice: `© {new Date().getFullYear()} MX ICONS · RELEASED UNDER THE MIT LICENSE`.
  - Social media icon links (GitHub, Twitter/X).

---

## Phase 3: Icon Data Engine & Metadata Layer
- [ ] **3.1 Icon Catalog Dictionary**:
  - Implement or bundle the 2,243 icon family records (`name`, `slug`, `variants: ["bold", "broken", "bulk", "linear", "outline", "twotone"]`).
  - Derive 13,458 component identifiers dynamically: `${pascalSlug}${pascalVariant}`.
- [ ] **3.2 Dynamic Import / Code Splitting**:
  - Implement dynamic chunk loader `loadIcon(groupSlug, variant)`:
    - Direct lazy load from `mx-icons` package (e.g. `import('mx-icons')` or subpath imports).
    - Maintain in-memory `Map` cache `k` to ensure instant re-renders on subsequent views.

---

## Phase 4: Hero & Install Command Widget
- [ ] **4.1 Hero Section**:
  - Render brand logo (64x64px), title `mx-icons` (60px bold), tagline, and contribution callout.
  - CTA action buttons:
    - `CONTRIBUTION` (link to GitHub repository issues).
    - `INSTALLATION` (router link to `/installation`).
    - `SHARE` (Web Share API trigger with clipboard fallback).
- [ ] **4.2 CLI Command Widget (`InstallCommandWidget`)**:
  - Dual tabs: `npm` and `pnpm`.
  - CLI command: `npm install mx-icons` vs `pnpm add mx-icons`.
  - Copy button with 1500ms checkmark transition.

---

## Phase 5: Search & Filtering Engine
- [ ] **5.1 Search Bar with Keyboard Listener**:
  - Visual prefix `"/"` and input placeholder `"search 13,458 icons..."`.
  - Global keydown listener: pressing `/` focuses search input unless typing in another field.
  - 140ms input debounce pipeline.
- [ ] **5.2 Synonym Matching Dictionary (`Ro`)**:
  - Embed the exact 70+ synonym keyword mappings (from `interactions.md`).
  - Search matches across: `slug`, `componentName`, `groupName`, and `synonymDict[query]`.
- [ ] **5.3 Variant Filter Tabs**:
  - Seven tab buttons: `ALL`, `BOLD`, `BROKEN`, `BULK`, `LINEAR`, `OUTLINE`, `TWOTONE`.
  - Recalculates total items, resets page to 1 on tab change.
- [ ] **5.4 Empty State**:
  - Renders `.no-results` view when query matches zero icons.

---

## Phase 6: Catalog Grid & Pagination
- [ ] **6.1 Responsive Icons Grid**:
  - CSS Grid with borders: 3 cols (mobile), 5 cols (tablet), 6 cols (desktop).
  - 1:1 aspect ratio cards with smooth hover transition (`var(--accent)` background, `var(--primary)` icon tint).
  - Preload next-page icons with 80ms delay.
- [ ] **6.2 Pagination Controls**:
  - 72 items per page (`Math.ceil(filtered.length / 72)`).
  - `PREVIOUS` and `NEXT` buttons with disabled states.
  - Page indicator: `PAGE {page} OF {totalPages}`.
  - Smooth scroll to top on page change.

---

## Phase 7: Interactive Icon Customization Modal
- [ ] **7.1 Modal Card & Backdrop**:
  - Fixed overlay with backdrop blur (`blur(8px)`) and `fadeIn` animation.
  - Modal card with elevation shadow and `modalEnter` scale animation.
  - Close button (`X`), backdrop click, and `Escape` key listeners.
- [ ] **7.2 Customizer Controls**:
  - Live preview box with dynamically sized and colored SVG.
  - Range slider: `8px` to `96px` (default: `24px`).
  - Color input: native HTML5 color picker (default: `#292D32`).
- [ ] **7.3 Reactive Code Generator**:
  - macOS window dot decoration (red, amber, green).
  - Syntax-highlighted TSX code snippet:
    ```tsx
    import { {ComponentName} } from 'mx-icons'

    <{ComponentName}
      size={{size}}
      color="{color}"
    />
    ```
  - Code copy button with clipboard copy and feedback checkmark.

---

## Phase 8: Installation Guide Route (`/installation`)
- [ ] **8.1 Route & Documentation Layout**:
  - Route at `/installation` with code-split lazy loading.
  - Main documentation column with sticky Table of Contents sidebar.
- [ ] **8.2 Documentation Sections**:
  - Header: "Installation Guide", description.
  - Install section: Package manager widget (`npm` / `pnpm`).
  - Usage section: Quick start code block with copy button.
  - Props table: `size`, `color`, `className` specifications.
  - Back to Home navigation button.

---

## Phase 9: Verification & Quality Assurance
- [ ] **9.1 Visual Diff Verification**:
  - Compare rebuilt pages against screenshots in `analysis/screenshots/` (Desktop, Tablet, Mobile, Light & Dark).
- [ ] **9.2 Accessibility & Performance**:
  - Verify ARIA roles (`role="tab"`, `role="tablist"`, `role="dialog"`, `aria-label`).
  - Validate 100% responsive performance on mobile and desktop viewports.
