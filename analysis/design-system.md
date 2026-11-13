# Design System Specification: MX Icons

This specification defines the exact design system tokens, typography scales, color primitives, spacing rules, borders, box shadows, and animation keyframes extracted from the verified stylesheet (`index-Bod13n2L.css`) and runtime DOM observations.

---

## 1. Color Palette & OKLCH Tokens

The website uses modern OKLCH color space variables defined on `:root` (Light Mode) and overridden under `.dark` (Dark Mode).

### 1.1 Complete Color Token Ledger

| Design Token | Light Mode Value (OKLCH / CSS) | Dark Mode Value (OKLCH / CSS) | Usage Role |
| :--- | :--- | :--- | :--- |
| `--background` | `oklch(98.178% 0.00528 95.189)` | `oklch(0.2679 0.0036 106.6427)` | Main page canvas background |
| `--foreground` | `oklch(0.3438 0.0269 95.7226)` | `oklch(0.8074 0.0142 93.0137)` | Primary typography, active icons |
| `--card` | `oklch(0.9456 0.0123 91)` | `oklch(0.2278 0.0036 106.6427)` | Code containers, card backgrounds |
| `--card-foreground` | `oklch(0.1908 0.002 106.5859)` | `oklch(0.9818 0.0054 95.0986)` | High-contrast card text |
| `--popover` | `oklch(1 0 0)` (`#ffffff`) | `oklch(0.3085 0.0035 106.6039)` | Popovers, mobile dropdown menus |
| `--popover-foreground` | `oklch(0.2671 0.0196 98.939)` | `oklch(0.9211 0.004 106.4781)` | Popover item text |
| `--primary` | `oklch(0.6171 0.1375 39.0427)` | `oklch(0.6724 0.1308 38.7559)` | Accent brand violet/purple, active tabs |
| `--primary-foreground` | `oklch(1 0 0)` (`#ffffff`) | `oklch(1 0 0)` (`#ffffff`) | Text placed over primary fills |
| `--primary-hover` | `oklch(0.55 0.14 39.0427)` | `oklch(0.72 0.14 38.7559)` | Hover states on primary buttons |
| `--secondary` | `oklch(0.9245 0.0138 92.9892)` | `oklch(0.9818 0.0054 95.0986)` | Subtle badges, secondary actions |
| `--secondary-foreground`| `oklch(0.4334 0.0177 98.6048)` | `oklch(0.3085 0.0035 106.6039)` | Secondary button text |
| `--muted` | `oklch(0.9341 0.0153 90.239)` | `oklch(0.2213 0.0038 106.707)` | Input fills, terminal headers, borders |
| `--muted-foreground` | `oklch(0.6059 0.0075 97.4233)` | `oklch(0.7713 0.0169 99.0657)` | Subtitles, labels, inactive tabs |
| `--accent` | `oklch(0.9245 0.0138 92.9892)` | `oklch(0.213 0.0078 95.4245)` | Card hover tint, preview backgrounds |
| `--accent-foreground` | `oklch(0.2671 0.0196 98.939)` | `oklch(0.9663 0.008 98.8792)` | Text within accented regions |
| `--destructive` | `oklch(0.1908 0.002 106.5859)` | `oklch(0.6368 0.2078 25.3313)` | Error highlights |
| `--border` | `oklch(0.8847 0.0069 97.3627)` | `oklch(0.3618 0.0101 106.8928)` | Divider lines, grid cell dividers |
| `--input` | `oklch(0.7621 0.0156 98.3528)` | `oklch(0.4336 0.0113 100.2195)` | Input borders, slider track fills |
| `--ring` | `oklch(0.6171 0.1375 39.0427)` | `oklch(0.6724 0.1308 38.7559)` | Focus rings |

### 1.2 Convenience Semantic Aliases
```css
--bg-color: var(--background);
--text-color: var(--foreground);
--text-secondary: var(--muted-foreground);
--text-muted: var(--muted-foreground);
--bg-muted: var(--muted);
--border-color: var(--border);
--card-bg: var(--background);
--card-hover: var(--accent);
--header-bg: var(--background);
--site-nav-height: 53px;
--radius: 0.5rem;
```

---

## 2. Typography Specification

### 2.1 Font Families
1. **Primary UI Font Stack**:
   ```css
   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
   ```
2. **Monospace Code Font Stack**:
   ```css
   font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   ```

### 2.2 Typographic Hierarchy Table

| Element / Class | Font Family | Size | Weight | Line Height | Letter Spacing | Text Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `h1.hero-title` (Desktop) | UI | `3.75rem` (60px) | 600 | `1.0` | `-0.03em` | None |
| `h1.hero-title` (Tablet) | UI | `2.5rem` (40px) | 600 | `1.0` | `-0.03em` | None |
| `h1.hero-title` (Mobile) | UI | `2.0rem` (32px) | 600 | `1.0` | `-0.03em` | None |
| `h1.page-title` (Docs) | UI | `2.5rem` (40px) | 600 | `1.1` | `-0.02em` | None |
| `h2.modal-title` | UI | `1.5rem` (24px) | 600 | `1.2` | `-0.02em` | None |
| `h3` (Section subhead) | UI | `0.75rem` (12px) | 500 | `1.4` | `+0.12em` | `uppercase` |
| `.hero-tagline` | UI | `0.875rem` (14px) | 400 | `1.65` | `normal` | None |
| `.site-nav-link` | UI | `11px` | 500 | `1.2` | `+0.12em` | `uppercase` |
| `.site-nav-logo` | UI | `0.875rem` (14px) | 600 | `1.0` | `-0.02em` | None |
| `.version-badge` | Monospace | `10px` | 500 | `1.0` | `+0.05em` | None |
| `.variant-tab` | UI | `11px` | 500 | `1.2` | `+0.12em` | `uppercase` |
| `.icon-name` | UI | `10px` | 500 | `1.3` | `+0.08em` | `uppercase` |
| `.pagination-button` | UI | `0.75rem` (12px) | 500 | `1.0` | `+0.12em` | `uppercase` |
| `.pagination-info` | UI | `10px` | 400 | `1.0` | `+0.12em` | `uppercase` |
| `code`, `pre` | Monospace | `0.85rem` (13.6px) | 400 | `1.7` | `normal` | None |
| `.footer-copyright` | UI | `0.75rem` (12px) | 400 | `1.4` | `+0.18em` | `uppercase` |

---

## 3. Spacing & Layout Grid Scale

### 3.1 Content Layout Widths
- Global Nav Max Width: `1180px` (`max-width: 1180px; margin: 0 auto;`)
- Page Container Max Width: `1180px`
- Hero Tagline Max Width: `42rem` (672px)
- Hero Install Card Max Width: `36rem` (576px)
- Modal Card Max Width: `min(100%, 820px)`
- Footer Max Width: `640px`

### 3.2 Spacing Constants
- Base spacing increments:
  - `0.25rem` (4px)
  - `0.5rem` (8px)
  - `0.75rem` (12px)
  - `1.0rem` (16px)
  - `1.25rem` (20px)
  - `1.5rem` (24px)
  - `2.0rem` (32px)
  - `3.0rem` (48px)
  - `4.0rem` (64px)
  - `5.0rem` (80px)

---

## 4. Responsive Breakpoints

| Breakpoint Name | Media Query | Layout Adjustments |
| :--- | :--- | :--- |
| **Mobile Extra Small** | `<480px` | Hero title `2rem`, icon grid `3 columns`, modal full-screen (`100dvh`), TOC hidden |
| **Mobile Small / Standard** | `<640px` | Site nav links hidden (`display: none`), hamburger button visible (`display: inline-flex`), hero brand vertical stack |
| **Tablet** | `min-width: 640px` | Site nav links visible, hero brand row, icon grid `5 columns`, hero title `3rem` |
| **Desktop Medium** | `min-width: 768px` | Footer padding expands (`5rem 2.5rem 7rem`), modal splits into 2-column layout |
| **Desktop Large** | `min-width: 1024px`| Icon grid expands to `6 columns` (`repeat(6, minmax(0, 1fr))`) |

---

## 5. Borders, Shadows & Radii

### 5.1 Borders
- Standard Divider: `1px solid var(--border)`
- Active Tab Indicator: `1px solid var(--primary)`
- Code Box Border: `1px solid var(--border)`
- Pagination Button Border: `1px solid var(--foreground)`

### 5.2 Border Radii
- Pill Buttons / Rounded Elements: `999px` (or `border-radius: 9999px`)
- Install Card Container: `0.4rem` (6.4px)
- Modal Card: `0` (Sharp corners on desktop modal card, flush edges on mobile full-sheet)
- Logo Icon / Favicon image: `6px`

### 5.3 Box Shadows
- **Modal Elevation**:
  ```css
  box-shadow: 0 24px 48px color-mix(in oklch, var(--foreground) 12%, transparent);
  ```
- **Mobile Menu Popover**:
  ```css
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  ```
- **Terminal Window Header Dots** (CSS box-shadow chaining on single pseudo-element):
  ```css
  background: #ff5f56;
  box-shadow: 14px 0 #ffbd2e, 28px 0 #27c93f;
  ```

---

## 6. Keyframe Animations & Transitions

### 6.1 Keyframes
```css
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes modalEnter {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### 6.2 CSS Transitions
- Standard Color/Opacity Transitions: `transition: color 0.15s, background-color 0.15s, border-color 0.15s`
- Icon Card Hover Transition: `transition: background-color 0.3s ease-out, color 0.3s ease-out`
- Backdrop Blur: `backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);`
