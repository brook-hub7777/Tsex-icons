<img width="2730" height="1536" alt="Gemini_Generated_Image_2l2p1r2l2p1r2l2p" src="https://github.com/user-attachments/assets/87fc17a5-2f94-40a2-bbca-7707ed0e7d7d" />
Here is your customized `README.md` updated for **TseX Icons** (`tsex-icons`) and linked to your GitHub profile (`brook-hub7777`):

```markdown
# TseX Icons

Open source, beautiful icons for React projects. Beautiful SVG components with multiple style variants - linear, bold, bulk, and more. Customizable, and ready for your app or design system.

- [Live Demo](https://brook-hub7777.github.io/tsex-icons)
- [Browse Icons](https://brook-hub7777.github.io/tsex-icons)
- [Documentation](https://github.com/brook-hub7777/tsex-icons)
- [Contributing](#contributing)

## ✨ Features

- 🎨 **Multiple Variants** — Every icon comes in linear, bold, bulk, and mini (16px) versions
- ⚡ **Lightweight & Fast** — Tree-shakeable, only imports what you use
- 🔧 **Fully Customizable** — Control size, color, and all SVG attributes
- 📦 **Zero Dependencies** — Only React as a peer dependency (18.x or 19.x)
- 💅 **Modern Design** — Clean, professional icons optimized for modern interfaces
- 📱 **Responsive** — Built-in support for different sizes (24px standard, 16px mini)

## 📦 Installation

```bash
npm install tsex-icons

```

```bash
pnpm add tsex-icons

```

## 🚀 Quick Start

```tsx
import { NoteTextLinear } from "tsex-icons";

function App() {
  return (
    <div>
      <NoteTextLinear/>
      <NoteTextLinear color="#292D32" size="{24}"/>
    </div>
  );
}

```

## 🎨 Props & Customization

All icon components accept the following props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number | string` | `24` | Icon width and height (px or any CSS unit) |
| `color` | `string` | `"#292D32"` | Icon color (any CSS color) |
| `className` | `string` | `""` | Additional CSS classes |

## 💻 Run Preview Locally

```bash
# Clone the repository
git clone [https://github.com/brook-hub7777/tsex-icons.git](https://github.com/brook-hub7777/tsex-icons.git)
cd tsex-icons

# Install dependencies
npm install

# Start the preview app
npm run dev

```

Open `http://localhost:5173` in your browser.

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help make **TseX Icons** even better.

### Ways to Contribute

* 🐛 **Report Bugs** — Found an issue? Open a bug report
* 💡 **Request Icons** — Tell us which icons you need for your projects
* 🎨 **Add New Icons** — Contribute new icons following our design guidelines
* 📖 **Improve Documentation** — Help make our docs clearer and more comprehensive
* 🔧 **Fix Issues** — Browse open issues and submit fixes
* ⭐ **Star the Repo** — Show your support and help us grow!
* 🐦 **Share** — Spread the word about TseX Icons

### Quick Start for Contributors

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/tsex-icons.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/new-icon`
5. Make your changes and test: `npm run dev`
6. Lint your code: `npm run lint`
7. Build the library: `npm run build`
8. Commit with a clear message: `git commit -m "feat(icons): add calendar icon"`
9. Push to your fork: `git push origin feature/new-icon`
10. Submit a pull request

### Development Setup

```bash
# Clone the repository
git clone [https://github.com/brook-hub7777/tsex-icons.git](https://github.com/brook-hub7777/tsex-icons.git)
cd tsex-icons

# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm run lint

# Build library
npm run build

```

### Adding a New Icon

Icons should follow these guidelines:

* **Format:** Optimized SVG
* **Size:** 24x24px (standard) or 16x16px (mini)
* **Variants:** Provide Linear, Bold, and Bulk versions
* **Color:** Use `currentColor` for easy customization
* **Naming:** PascalCase with variant suffix (e.g., `CalendarLinear`, `CalendarBold`, `CalendarBulk`)

Example icon component:

```tsx
import React from "react";
import Icon from "../../Icon";

export const CalendarLinear = (props) => (
  <Icon {...props}>
    <path d="..." fill="none" stroke="currentColor" strokeWidth="1.5" />
  </Icon>
);

```

### Commit Message Format

We follow Conventional Commits:

```text
feat(icons): add calendar icon with all variants
fix(modal): resolve scrollbar display issue
docs(readme): update installation guide

```

### Pull Request Guidelines

* Provide a clear description of your changes
* Include screenshots for visual changes
* Reference related issues (e.g., `"Closes #123"`)
* Ensure all tests pass and linting is clean
* Update documentation if needed

For comprehensive guidelines, check out our `CONTRIBUTING.md`.

## 🔗 Links

* 📦 **NPM Package:** [npmjs.com/package/tsex-icons](https://www.google.com/search?q=https://www.npmjs.com/package/tsex-icons)
* 🌐 **Live Preview:** [brook-hub7777.github.io/tsex-icons](https://www.google.com/url?sa=E&source=gmail&q=https://brook-hub7777.github.io/tsex-icons)
* 📚 **Documentation:** [github.com/brook-hub7777/tsex-icons](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/brook-hub7777/tsex-icons)
* 🐛 **Issues:** [github.com/brook-hub7777/tsex-icons/issues](https://www.google.com/search?q=https://github.com/brook-hub7777/tsex-icons/issues)
* 💬 **Discussions:** [github.com/brook-hub7777/tsex-icons/discussions](https://www.google.com/search?q=https://github.com/brook-hub7777/tsex-icons/discussions)

## 📄 License

MIT License © 2026 TseX Icons Contributors

Free to use in personal and commercial projects. See `LICENSE` for details.

---

Made with ❤️ by the open-source community

If you find this project useful, please consider giving it a ⭐ on [GitHub](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/brook-hub7777/tsex-icons)!

```

```
