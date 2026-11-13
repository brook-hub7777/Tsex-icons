# Unknowns and Limitations: Reverse Engineering MX Icons

In accordance with REA evidence verification standards, this document distinguishes between directly **observed facts**, **inferred conclusions**, and **unobserved / unknown implementation details**.

---

## 1. Verified Observations vs. Inferences

| Dimension | Observed via REA Evidence | Inferred / Analytical Conclusion | Confidence Level | Evidence Link / Basis |
| :--- | :--- | :--- | :--- | :--- |
| **Bundler & Runtime** | Vite runtime and React 18 signatures observed in JS bundle and chunk manifest. | Project built with Vite React template (`@vitejs/plugin-react`). | High | `ev_557d0609477dc2dd8c648856aad871821b9b0c3a313f1951de93fc77c2f6af03` (`react-runtime`, `vite-runtime`) |
| **Route Architecture** | Two client-side routes observed: `/` and `/installation`. Dynamic loading spinner `<div style="padding: 40px; text-align: center; opacity: 0.6;">Loading…</div>` observed during chunk resolution. | React Router or lightweight Hash/History router managing state without SSR. | High | Statically parsed from `index-BHCG4WVd.js` and observed live during CDP navigation. |
| **Theme Persistence** | `localStorage` keys `darkMode` and `darkModeManual` verified via REA storage inspection. CSS variables under `:root` and `.dark` extracted. | Explicit flag `darkModeManual` indicates whether user deliberately toggled theme or relies on OS `prefers-color-scheme`. | Verified Fact | `ev_862cbb10ba5a64f03cb84f29bfa2f8b0bb2aa1ecf38ea1dac0fe1a502be2e709` |
| **Icon Dataset** | Array `j` contains exactly 2,243 icon family objects with 6 variants each (`bold`, `broken`, `bulk`, `linear`, `outline`, `twotone`), totaling 13,458 variant components. | 72 items per page results in 187 pages (`Math.ceil(13458 / 72) = 187`), matching the live UI counter `PAGE 1 OF 187`. | Verified Fact | Extracted from bundle `index-BHCG4WVd.js` and verified on DOM element `.pagination-info`. |
| **Search Engine** | Search input with 140ms debounce, checking multi-field substrings (`slug`, `componentName`, `groupName`, `groupSlug`) and dictionary lookup `Ro`. | Custom fuzzy/synonym matching engine embedded client-side without Algolia or external search index. | Verified Fact | Extracted directly from function `Ao` and dictionary `Ro`. |
| **Icon Components** | Dynamic import chunks (e.g. `AirbudsLinear-rCeXBJ6f.js`) render pure SVG paths wrapping `IconBase` with `size`, `color`, and `className` props. | The website is the showcase documentation site for the open-source npm library `mx-icons`. | Verified Fact | Verified against `https://registry.npmjs.org/mx-icons` v1.1.2. |

---

## 2. Tool Boundaries & Analysis Limitations

### 2.1 Attach-Window Coverage
- Observation was conducted passively through loopback Chrome DevTools Protocol (CDP) session (`127.0.0.1:9222`).
- As per REA passive observation guidelines, REA did not evaluate arbitrary page JavaScript or alter remote server responses.
- Historical network events that transpired before the initial CDP session attachment were not recorded.

### 2.2 Telemetry & Analytics Redaction
- The target loads a third-party analytics script from Umami (`https://cloud.umami.is/script.js` with website ID `e5903ebe-6e29-48d2-8a57-59fbd069ba72`).
- Specific visitor events sent to Umami were not extracted or analyzed to prevent capturing private analytics data.
- No personal user data or credentials exist on the site; all storage tokens inspected were purely local UI preferences (`darkMode`).

### 2.3 Source Maps Availability
- The production server returned `404 Not Found` for `.js.map` and `.css.map` source maps.
- All code analysis was performed directly on the production Vite ES modules, reversing minified variable names back to their semantic roles.

---

## 3. Unobserved Technical Details

1. **Build Scripts & CI/CD Pipeline**:
   - The exact build script commands (e.g. `npm run build`, Vite config plugins, Tailwind/PostCSS configuration) are executed in Vercel's private deployment pipeline and are not exposed over HTTP.
2. **Upstream SVG Generation Source**:
   - The original Figma/Illustrator design files or automated SVG SVGO optimization scripts used to generate the 5,600+ icons are not hosted on the web target. However, all compiled React components and SVGs are directly accessible via the public npm package `mx-icons`.
