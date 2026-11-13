# Asset Inventory: MX Icons

This document provides a comprehensive inventory of all static, dynamic, vector, and remote assets powering `https://mx-icons.vercel.app/`.

---

## 1. Image Assets

All image assets were inspected, verified, and backed up into the local `analysis/assets/` directory.

| Asset File | URL / Source | Type / Format | Dimensions | Size | Content & Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `mx-icons.png` | `/mx-icons.png` | PNG | 512x512 | 21,434 bytes | Official logo: purple squircle with stylized 'M' & 'X' white geometric vectors. Used in navbar, hero, footer, and touch icons. |
| `preview.png` | `/preview.png` | PNG | 1200x630 | 491,974 bytes | OpenGraph and Twitter card social share image showcasing MX Icons library title and features. |
| `favicon.ico` | `/favicon.ico` | ICO | Multi-res (16x16, 32x32, 48x48) | 114,514 bytes | Browser tab favicon icon. |

---

## 2. Fonts & Typography Assets

The target application avoids heavy external web font downloads (like large Google Fonts families), optimizing for zero-layout-shift and instant rendering:
1. **UI Typography**: Native system font stack (`system-ui`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`).
2. **Monospace Code Typography**: `"IBM Plex Mono"`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace`.

---

## 3. JavaScript Bundles & Code Splitting Architecture

The application is compiled by **Vite** using native ES module code splitting:

| Asset Name | SHA-256 Digest | Size | Role & Architecture |
| :--- | :--- | :--- | :--- |
| `index-BHCG4WVd.js` | `4d2ea9dab72a3cd06d3d4cda2a307735d0726dc89ec2692e50d1b747f6f8e332` | 2,434,541 bytes | **Main Application Bundle**: Contains Vite runtime, full icon family dictionary (`2,243` icon families, `13,458` variants), search synonym dictionary, routing, dark mode hook, hero, search bar, pagination, modal, and footer. |
| `vendor-react-Cw5BqpOR.js`| `ca7db0b5327d65ba283d968eb19b72f71965081116375f8c6c6b55a86576e8c8` | 228,732 bytes | **React Vendor Chunk**: React 18 DOM runtime, scheduler, JSX runtime helpers. |
| `index-Bod13n2L.css` | `18d1eb31d4e158afbe487e53d483acad` | 20,415 bytes | **Compiled Stylesheet**: Complete styling tokens, OKLCH colors, responsive media queries, animations, component classes. |
| Dynamic Icon Chunks (`*.js`)| Individual chunk hashes | ~1 KB - ~3 KB each | **Dynamic Icon Components**: 74 initially inspected chunks; dynamically fetched via `import("./[IconName][Variant]-[hash].js")` as pages are browsed. |

---

## 4. Vector & SVG Icon Assets

### 4.1 System & UI Vectors (Embedded Inline SVGs)
1. **GitHub Icon**:
   ```svg
   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871..." stroke="currentColor" stroke-width="1.5"/>
   </svg>
   ```
2. **Twitter / X Icon**:
   ```svg
   <svg viewBox="0 0 24 24" fill="currentColor">
     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
   </svg>
   ```
3. **Copy / Clipboard Icon**:
   ```svg
   <svg viewBox="0 0 24 24" fill="none">
     <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>
   ```
4. **Theme Toggle (Sun / Moon) Icons**:
   - Moon:
     ```svg
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
       <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
     </svg>
     ```
   - Sun:
     ```svg
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
       <circle cx="12" cy="12" r="5"/>
       <line x1="12" y1="1" x2="12" y2="3"/>
       <line x1="12" y1="21" x2="12" y2="23"/>
       <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
       <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
       <line x1="1" y1="12" x2="3" y2="12"/>
       <line x1="21" y1="12" x2="23" y2="12"/>
       <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
       <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
     </svg>
     ```
5. **Hamburger Menu Icon**:
   ```svg
   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
     <line x1="3" y1="6" x2="21" y2="6"/>
     <line x1="3" y1="12" x2="21" y2="12"/>
     <line x1="3" y1="18" x2="21" y2="18"/>
   </svg>
   ```

### 4.2 Upstream Icon Package (`mx-icons`)
- **NPM Package**: `mx-icons` (v1.1.2)
- **License**: MIT
- **Author**: Manish (`ig-imanish`)
- **Package Contents**: 5,600+ handcrafted icons across 6 variants:
  - `Linear` (1.5px stroke vectors)
  - `Bold` (solid fill vectors)
  - `Bulk` (two-tone solid fill vectors with opacity)
  - `Outline` (thin outline paths)
  - `Twotone` (duotone stroke paths with 0.4 opacity secondary lines)
  - `Broken` (stroke paths with deliberate 2-4px gap cutouts)

---

## 5. Remote API Integrations & Telemetry

| Endpoint URL | HTTP Method | Usage & Behavior |
| :--- | :--- | :--- |
| `https://registry.npmjs.org/mx-icons` | `GET` | Fetches package metadata on load; extracts `dist-tags.latest` to populate navbar version badge dynamically. Fallback: `v1.1.2`. |
| `https://api.github.com/repos/ig-imanish/mx-icons` | `GET` | Fetches repository stars (`stargazers_count`) and forks (`forks_count`) formatted with `k` shorthand (e.g. `1.2k`). |
| `https://cloud.umami.is/script.js` | `GET` (defer) | Privacy-preserving public analytics with `data-website-id="e5903ebe-6e29-48d2-8a57-59fbd069ba72"`. Does not set tracking cookies. |
