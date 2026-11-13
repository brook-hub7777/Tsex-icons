# tsex-icons

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/tsex-icons.svg)](https://www.npmjs.com/package/tsex-icons)
[![tree-shakeable](https://img.shields.io/badge/tree--shakeable-true-brightgreen.svg)](#features)

Open-source, tree-shakable React SVG icon library featuring 12,950+ icons across **linear**, **bold**, and **bulk** variants with zero runtime overhead, dual ESM/CommonJS distribution, and first-class TypeScript typings.

---

## Features

- 🌲 **Tree-Shakable**: Marked with `"sideEffects": false` so Vite, Webpack, Rollup, and Next.js bundle only the icons you actually import.
- 🎨 **Dynamic Styling**: Built with `currentColor` and standard SVG props (`size`, `color`, `className`, and `...props`).
- 💎 **Multiple Variants**: Every icon includes multiple design styles, including **Linear**, **Bold**, and **Bulk**.
- 📦 **Dual ESM & CommonJS**: Full compatibility across modern and legacy toolchains.
- 🛡️ **TypeScript Ready**: Full type definitions generated for every icon component with autocompletion.
- ⚡ **Zero Runtime Overhead**: Pure React `forwardRef` SVG components without external dependencies.

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install tsex-icons

# pnpm
pnpm add tsex-icons

# yarn
yarn add tsex-icons

# bun
bun add tsex-icons
```

### Peer Dependencies

`tsex-icons` requires React 16.8.0 or higher:

```json
{
  "peerDependencies": {
    "react": ">=16.8.0"
  }
}
```

---

## Usage

All icons are exported as named exports from the root package. Import only the icons and variants you need:

```tsx
import React from 'react';
import {
  AccessibilityLinear,
  AccessibilityBold,
  AccessibilityBulk
} from 'tsex-icons';

export function UserProfileHeader() {
  return (
    <div className="flex items-center gap-4">
      {/* Linear Variant */}
      <AccessibilityLinear size={24} color="#4f46e5" />

      {/* Bold Variant */}
      <AccessibilityBold size={28} color="#2563eb" className="hover:opacity-80" />

      {/* Bulk Variant */}
      <AccessibilityBulk size={32} color="#059669" />
    </div>
  );
}
```

### Dynamic Styling with `currentColor`

Icons use `currentColor` internally, so you can control their color directly through CSS classes (e.g. Tailwind CSS) or parent text colors:

```tsx
import { HeartBold } from 'tsex-icons';

// Styled via Tailwind text color
export function LikeButton() {
  return (
    <button className="text-red-500 hover:text-red-700">
      <HeartBold size={20} />
    </button>
  );
}
```

### CommonJS Usage

```javascript
const React = require('react');
const { AccessibilityBold } = require('tsex-icons');

const icon = React.createElement(AccessibilityBold, {
  size: 32,
  color: '#292D32'
});
```

---

## Component Props

Every icon component accepts standard SVG element attributes and the following properties:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number \| string` | `24` | Width and height of the SVG (in pixels or CSS length units). |
| `color` | `string` | `"#292D32"` | CSS color value applied via inline style and inherited via `currentColor`. |
| `fill` | `string` | SVG default | Root SVG `fill` attribute. |
| `className` | `string` | `""` | Additional CSS class names attached to the `<svg>` tag. |
| `style` | `CSSProperties` | `{}` | Custom inline styles passed directly to `<svg>`. |
| `...props` | `SVGProps<SVGSVGElement>` | — | Standard HTML/SVG attributes (e.g., `aria-label`, `onClick`, `tabIndex`). |

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
