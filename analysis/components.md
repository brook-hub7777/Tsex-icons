# Component Inventory: MX Icons

This document provides a complete technical specification of all UI components extracted and reverse-engineered from `https://mx-icons.vercel.app/`.

---

## 1. Component Hierarchy Tree

```mermaid
graph TD
  App --> SiteNav
  App --> HomePage
  App --> InstallationPage
  App --> Footer
  App --> DarkModeProvider

  subgraph HomePage
    HomePage --> HeroSection
    HeroSection --> InstallCommandWidget
    HeroSection --> HeroActionButtons
    HomePage --> GalleryControls
    GalleryControls --> SearchInput
    GalleryControls --> VariantTabs
    HomePage --> IconsGrid
    IconsGrid --> IconCard
    IconsGrid --> EmptyState
    HomePage --> Pagination
    HomePage --> IconCustomizerModal
    IconCustomizerModal --> LivePreview
    IconCustomizerModal --> ControlsGroup
    ControlsGroup --> SizeRangeSlider
    ControlsGroup --> ColorPicker
    IconCustomizerModal --> CodeBlock
    CodeBlock --> CopyButton
  end

  subgraph InstallationPage
    InstallationPage --> DocsHeader
    InstallationPage --> InstallSection
    InstallSection --> InstallCommandWidget
    InstallationPage --> QuickStartSection
    QuickStartSection --> UsageCard
    InstallationPage --> PropsTableSection
    PropsTableSection --> PropsTable
    InstallationPage --> BackButton
    InstallationPage --> DocsTOC
  end
```

---

## 2. Core Navigation Components

### 2.1 `SiteNav`
- **Selector**: `nav.site-nav`
- **Behavior**: Sticky navigation bar (`position: sticky; top: 0; z-index: 50`) with backdrop blur (`backdrop-filter: blur(12px)`), adaptive border, and responsive desktop/mobile layouts.
- **Child Elements**:
  - `div.site-nav-inner`: Container constrained to `max-width: 1180px; margin: 0 auto`.
  - `a.site-nav-logo` (or `button`):
    - `img`: `/mx-icons.png` (1.25rem x 1.25rem, object-fit contain, border-radius 6px).
    - Text: `mxicons` (font-size 0.875rem, font-weight 600, letter-spacing -0.02em).
    - `span.version-badge`: Dynamic npm package version pill (e.g. `v1.1.2`, font-size 10px, padding 2px 6px).
  - `div.site-nav-links` (Desktop only, hidden on mobile `<640px`):
    - `a.site-nav-link`: "Home" (applies `.active` when path is `/`).
    - `a.site-nav-link`: "Installation" (applies `.active` when path is `/installation`).
  - `div.site-nav-actions`:
    - `a.site-nav-icon-btn` (GitHub link): Points to `https://github.com/ig-imanish/mx-icons`, renders 16x16 SVG icon.
    - `a.site-nav-icon-btn` (npm link): Points to `https://www.npmjs.com/package/mx-icons`, renders npm symbol SVG.
    - `button.site-nav-icon-btn` (Theme toggle): Toggles dark/light mode. Renders Sun icon (`svg line`) in dark mode and Moon icon (`svg path`) in light mode.
    - `button.site-nav-hamburger` (Mobile only, hidden on `>640px`): Renders 3 horizontal lines (`svg line x1="4" y1="6" x2="20" y2="6"` etc.). Toggles `.site-nav-mobile-menu`.
  - `div.site-nav-mobile-menu`: Absolutely positioned floating popover on mobile when hamburger is clicked. Contains mobile navigation links.

---

## 3. Hero Section Components

### 3.1 `HeroSection`
- **Selector**: `header.hero`
- **Layout**: Centered flex column with bottom border `1px solid var(--border)` and padding `padding-bottom: 3rem`.
- **Sub-components**:
  - `div.hero-brand`:
    - `img.hero-logo`: 4rem x 4rem icon (`/mx-icons.png`).
    - `h1.hero-title`: 3.75rem (2.5rem on tablet, 2rem on mobile), font-weight 600, letter-spacing `-0.03em`. Text: `mx-icons`.
  - `p.hero-tagline`: Max-width 42rem, font-size 0.875rem, line-height 1.65, muted color. Text: "Open source, beautiful icons for React projects. Beautiful SVG components with multiple style variants — linear, bold, bulk, and more. Tree-shakable, customizable, and ready for your app or design system."
  - `p.hero-contribute`: "Have an icon to contribute? [Submit it here](https://github.com/ig-imanish/mx-icons/issues/new)".
  - `InstallCommandWidget`: Dual-tab CLI command box.
  - `div.hero-actions`: CTA action buttons:
    - `a.action-button.primary`: "CONTRIBUTION" (external link to GitHub).
    - `a.action-button.secondary`: "INSTALLATION" (internal router link to `/installation`).
    - `button.action-button.secondary`: "SHARE" (invokes `navigator.share` or clipboard copy with toast feedback).

### 3.2 `InstallCommandWidget`
- **Selector**: `div.install-cmd-card`
- **State**:
  - `activeTab`: `'npm'` | `'pnpm'` (default: `'npm'`).
  - `copied`: boolean (reverts after 1500ms).
- **DOM Structure**:
  ```html
  <div class="install-cmd-card">
    <div class="install-cmd-tabs" role="tablist" aria-label="Install package manager">
      <button role="tab" class="install-cmd-tab active">npm</button>
      <button role="tab" class="install-cmd-tab">pnpm</button>
    </div>
    <div class="install-cmd-panel" role="tabpanel">
      <figure class="install-cmd-figure">
        <button class="install-cmd-copy" aria-label="Copy command">
          <!-- Clipboard SVG or Checkmark SVG when copied -->
        </button>
        <div class="install-cmd-viewport">
          <pre><code><span class="line">npm install mx-icons</span></code></pre>
        </div>
      </figure>
    </div>
  </div>
  ```

---

## 4. Search, Filter & Gallery Controls

### 4.1 `GalleryControls`
- **Selector**: `div.gallery-controls`
- **Structure**:
  1. `label.search-wrapper` (for `id="icon-search"`):
     - `span.search-prefix`: Visual key indicator `"/"`.
     - `span.search-label`: `"Search Icons"`.
     - `input.search-input`: Text input with placeholder `"search 13,458 icons..."`, autofocus keyboard listener on `/`, debounced query dispatcher (140ms).
  2. `div.variant-tabs` (`role="tablist"`):
     - Buttons with `role="tab"` for each variant:
       - `ALL` (`c === "all"`)
       - `BOLD` (`c === "bold"`)
       - `BROKEN` (`c === "broken"`)
       - `BULK` (`c === "bulk"`)
       - `LINEAR` (`c === "linear"`)
       - `OUTLINE` (`c === "outline"`)
       - `TWOTONE` (`c === "twotone"`)
     - Selection updates `activeVariant`, resets page to 1, and refilters dataset.

---

## 5. Icon Grid & Catalog Components

### 5.1 `IconsGrid`
- **Selector**: `div.icons-grid`
- **Grid Setup**:
  - Mobile (`<640px`): `grid-template-columns: repeat(3, minmax(0, 1fr))`
  - Tablet (`640px - 1024px`): `grid-template-columns: repeat(5, minmax(0, 1fr))`
  - Desktop (`>1024px`): `grid-template-columns: repeat(6, minmax(0, 1fr))`
  - Border: Contiguous 1px grid borders using `border-left` & `border-top` on grid container, and `border-right` & `border-bottom` on each card.
- **Pagination Batching**: Always renders up to 72 cards per page view.

### 5.2 `IconCard`
- **Selector**: `button.icon-card`
- **Attributes**: `type="button"`, `title="Customize {ComponentName}"`, `aria-label="{ComponentName}"`.
- **Layout**: `aspect-ratio: 1`, flex column, centered icon display, name at bottom.
- **Hover Behavior**:
  - Background: `var(--accent)`
  - Icon color: transitions to `var(--primary)` (0.3s ease-out)
  - Text color: `var(--foreground)`
- **Markup**:
  ```html
  <button type="button" class="icon-card" title="Customize AccessibilityBold" aria-label="AccessibilityBold">
    <div class="icon-display">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color: currentcolor;">
        <!-- Dynamic SVG Path -->
      </svg>
    </div>
    <div class="icon-name">AccessibilityBold</div>
  </button>
  ```

### 5.3 `EmptyState`
- **Selector**: `div.no-results`
- **Trigger**: Rendered when `filteredIcons.length === 0`.
- **Display**: Centered icon search message: `"No icons found matching '{query}'"`.

---

## 6. Icon Customization Modal

### 6.1 `IconCustomizerModal`
- **Selector**: `div.modal-overlay`
- **Animation**: `fadeIn 0.2s` for overlay, `modalEnter 0.18s ease-out` for modal card.
- **Dismissal triggers**:
  - Clicking `.modal-close` button (`X`)
  - Clicking backdrop outside `.modal-card`
  - Pressing `Escape` key on keyboard
- **Card Layout**: Responsive 2-column customizer on desktop, 1-column on mobile.
- **Elements**:
  1. Header:
     - `h2#icon-modal-title.modal-title`: PascalCase icon name (e.g. `AccessibilityBold`).
     - `button.modal-close`: Close button with CSS cross icon pseudo-elements (`:before`, `:after`).
  2. Customizer:
     - `div.modal-preview`: Live SVG preview container (`min-height: 240px`, centered, background `var(--muted)` mix).
     - `div.modal-controls`:
       - Size Control:
         - `<label for="icon-size-control">Size <strong>{size}px</strong></label>`
         - `<input id="icon-size-control" type="range" min="8" max="96" value="{size}" />`
       - Color Control:
         - `<label for="icon-color-control">Color <strong>{hexColor}</strong></label>`
         - `<input id="icon-color-control" type="color" value="{hexColor}" />`
  3. Generated Code Box:
     - Heading: `<h3>How to use</h3>`
     - `<pre>` container styled with MacOS terminal window dots (`:before` circle with green, amber, red box-shadows).
     - `button.code-copy-btn`: Top-right copy button with tooltip and clipboard SVG icon.
     - `<code>`: Syntax-highlighted React import and component invocation with live synchronized `size` and `color` props:
       ```tsx
       import {
         AccessibilityBold
       } from 'mx-icons'

       <AccessibilityBold
         size={24}
         color="#292D32"
       />
       ```

---

## 7. Pagination Component

### 7.1 `Pagination`
- **Selector**: `div.pagination`
- **Elements**:
  - `div.pagination-group`:
    - `button.pagination-button`: "PREVIOUS" (disabled if `currentPage === 1`).
    - `span.pagination-info`: "PAGE {currentPage} OF {totalPages}".
    - `button.pagination-button`: "NEXT" (disabled if `currentPage === totalPages`).
- **Interaction**: Clicking button increments/decrements `currentPage`, updates sliced icon window, and triggers `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

## 8. Footer Component

### 8.1 `Footer`
- **Selector**: `footer.footer`
- **Elements**:
  - `div.footer-content`:
    - Brand link: logo image + text `mxicons`.
    - Tagline: "Open source, beautiful icons for React projects."
    - Links: `Home`, `Installation`, `GitHub`, `npm`.
  - `div.footer-bottom`:
    - Social icons: GitHub SVG, Twitter/X SVG.
    - Copyright: `© {year} MX ICONS · RELEASED UNDER THE MIT LICENSE` (year generated dynamically via `new Date().getFullYear()`).

---

## 9. Installation Page Components

### 9.1 `DocsLayout` & Content
- **Container**: `div.docs-container` with `div.docs-content` (main column) and `aside.docs-toc` (sticky right sidebar).
- **Components**:
  1. `h1.page-title`: "Installation Guide"
  2. `p.page-description`: "How to install and use MX Icons in your React project."
  3. `section.docs-section`: Package manager command card (`npm install mx-icons` / `pnpm add mx-icons`).
  4. `div.usage-card`: Quick start usage snippet with copy button and syntax tokens.
  5. `table.props-table`: Customization props table:
     - Header: `PROP`, `TYPE`, `DEFAULT`, `DESCRIPTION`
     - Rows:
       - `size`: `number | string` | `24` | "Icon width and height (px or any CSS unit)"
       - `color`: `string` | `"#292D32"` | "Icon color (any CSS color)"
       - `className`: `string` | `""` | "Additional CSS classes"
  6. `div.back-button-container` -> `a.back-button`: Link back to `/` ("BACK TO HOME").
