# Interaction & Behavior Specification: MX Icons

This document provides exact algorithmic and event-driven specifications for all user-facing interactions on `https://mx-icons.vercel.app/`.

---

## 1. Dark Mode / Theme Toggle

### 1.1 State & Persistence Logic
Theme state is managed with hybrid resolution:
1. First, check `localStorage.getItem("darkModeManual") === "true"`.
   - If manual override was recorded, read `JSON.parse(localStorage.getItem("darkMode"))`.
   - Otherwise, evaluate system preference: `window.matchMedia("(prefers-color-scheme: dark)").matches`.
2. When the state changes:
   - `localStorage.setItem("darkMode", JSON.stringify(isDarkMode))`.
   - If `isDarkMode` is true, add class `dark` to `document.documentElement` (`<html class="dark">`).
   - If false, remove class `dark`.
3. When the user clicks the theme toggle button:
   - Invert state (`setIsDarkMode(prev => !prev)`).
   - Flag manual persistence: `localStorage.setItem("darkModeManual", "true")`.

### 1.2 Exact Implementation Code
```javascript
function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    const manual = localStorage.getItem("darkModeManual") === "true";
    return saved !== null && manual
      ? JSON.parse(saved)
      : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    localStorage.setItem("darkModeManual", "true");
  };

  return { isDarkMode, toggleDarkMode };
}
```

---

## 2. Search, Debounce & Synonym Matching

### 2.1 Debounce Pipeline
- Raw input is captured immediately in `searchTerm` state.
- Debounce effect delays filtering by **140ms**:
  ```javascript
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchTerm), 140);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  ```

### 2.2 Search Filtering Algorithm
For each candidate icon in the active variant pool:
1. Direct substring match against:
   - `item.slug` (kebab-case, e.g. `add-circle-bold`)
   - `item.componentName` (PascalCase, e.g. `AddCircleBold`)
   - `item.groupName` (e.g. `Add Circle`)
   - `item.groupSlug` (e.g. `add-circle`)
2. Synonym dictionary check (`hasSynonymMatch(targetSlug, query)`):
   - Looks up `synonymDict[query.toLowerCase()]`.
   - Checks if any synonym term in the array is a substring of the icon slug.

### 2.3 Verified Search Synonym Dictionary (`Ro`)
```javascript
const synonymDict = {
  // Authentication & Verification
  verify: ["tick-circle", "verify", "shield-tick"],
  
  // Messaging & Mail
  mail: ["sms", "message", "message-text"],
  email: ["sms", "message", "message-text"],
  inbox: ["sms", "direct-inbox", "message"],
  
  // Actions & Creation
  plus: ["add", "add-circle", "add-square"],
  create: ["add", "add-circle", "pen-add"],
  new: ["add", "add-circle"],
  edit: ["edit", "edit-2", "pen-tool"],
  pencil: ["edit", "pen-tool"],
  write: ["edit", "pen-tool"],
  
  // Search
  search: ["search-normal", "search-zoom-in", "search-favorite"],
  find: ["search-normal"],
  magnify: ["search-zoom-in"],
  
  // Settings & Config
  settings: ["setting", "setting-2", "setting-3"],
  preferences: ["setting", "setting-2"],
  config: ["setting", "setting-2"],
  gear: ["setting", "setting-2"],
  
  // User & Profile
  user: ["user", "profile", "profile-circle"],
  profile: ["user", "profile", "profile-circle"],
  account: ["user", "profile"],
  person: ["user", "profile"],
  
  // Home & Places
  home: ["home", "home-1", "home-2"],
  house: ["home", "house"],
  
  // Favorites & Social Feedback
  heart: ["heart", "like", "like-1"],
  like: ["heart", "like", "like-1"],
  favorite: ["heart", "like", "star"],
  love: ["heart", "like"],
  star: ["star", "star-1", "medal-star"],
  rating: ["star", "ranking"],
  favourite: ["star", "heart"],
  
  // Security
  lock: ["lock", "lock-1", "lock-circle"],
  unlock: ["unlock"],
  security: ["lock", "security", "shield-security"],
  secure: ["lock", "shield"],
  warning: ["warning-2", "danger", "info-circle"],
  alert: ["notification", "notification-bing", "danger"],
  error: ["danger", "close-circle"],
  
  // Time & Scheduling
  calendar: ["calendar", "calendar-1", "calendar-2"],
  date: ["calendar"],
  schedule: ["calendar", "clock"],
  time: ["clock", "clock-1", "timer"],
  clock: ["clock", "clock-1"],
  timer: ["timer", "timer-1"],
  
  // Transfers
  download: ["document-download", "arrow-down", "import"],
  upload: ["document-upload", "arrow-up", "export"],
  import: ["import", "document-download"],
  export: ["export", "document-upload"],
  
  // Navigation & Direction
  arrow: ["arrow", "arrow-right", "arrow-left", "arrow-up", "arrow-down"],
  next: ["arrow-right", "next", "forward"],
  previous: ["arrow-left", "previous", "backward"],
  back: ["arrow-left", "back-square"],
  
  // Clipboard
  copy: ["copy", "document-copy"],
  duplicate: ["copy", "document-copy"],
  paste: ["clipboard"],
  clipboard: ["clipboard"],
  
  // Documents & Storage
  file: ["document", "document-text"],
  document: ["document", "document-text"],
  page: ["document", "note"],
  folder: ["folder", "folder-2", "folder-open"],
  directory: ["folder"],
  
  // Media & Assets
  image: ["image", "gallery", "picture-frame"],
  picture: ["image", "gallery"],
  photo: ["image", "gallery", "camera"],
  gallery: ["gallery"],
  video: ["video", "video-play", "video-circle"],
  play: ["play", "video-play"],
  audio: ["music", "musicnote", "volume"],
  music: ["music", "musicnote"],
  sound: ["sound", "volume"],
  volume: ["volume", "speaker"],
  
  // Communications & Devices
  phone: ["call", "mobile"],
  call: ["call", "calling"],
  mobile: ["mobile"],
  
  // Maps & Location
  location: ["location", "gps", "map"],
  map: ["map", "location"],
  gps: ["gps", "location"],
  pin: ["location"],
  
  // Commerce & Finance
  cart: ["shopping-cart", "bag"],
  shop: ["shop", "shopping-cart", "bag"],
  shopping: ["shopping-cart", "shop"],
  bag: ["bag", "shopping-bag"],
  money: ["dollar-circle", "money", "wallet"],
  dollar: ["dollar-circle"],
  payment: ["wallet", "card"],
  wallet: ["wallet"],
  
  // Brands
  github: ["github"],
  twitter: ["twitter"],
  x: ["new-twitter"],
  instagram: ["instagram"],
  facebook: ["facebook"],
  youtube: ["youtube"],
  linkedin: ["linkedin"],
  discord: ["discord"],
  twitch: ["twitch"],
  
  // AI & Magic
  sparkle: ["sparkle", "magic", "ai", "star"]
};
```

---

## 3. Variant Tab Switching

- **Supported Variants**: `all`, `bold`, `broken`, `bulk`, `linear`, `outline`, `twotone`.
- **Behavior**:
  - Selecting a tab sets `activeVariant`.
  - Re-computes filtered icons list:
    - If `all`: Combines all 6 variants across all icon families (up to 13,458 entries).
    - If specific variant: Filters to only icon components of that specific variant (2,243 entries).
  - Resets `currentPage` to 1.
  - Recalculates total page count: `totalPages = Math.ceil(filteredIcons.length / 72)`.

---

## 4. Icon Customizer Modal Interactions

### 4.1 Activation & Selection
1. When a user clicks an `.icon-card`, `selectedIcon` is populated with the icon metadata object:
   ```json
   {
     "groupName": "Accessibility",
     "groupSlug": "accessibility",
     "variant": "bold",
     "slug": "accessibility-bold",
     "componentName": "AccessibilityBold"
   }
   ```
2. The modal overlay mounts with `fadeIn 0.2s` and card with `modalEnter 0.18s ease-out`.
3. Background scrolling is locked while the dialog is open.

### 4.2 Live Customization Controls
- **Size Control**:
  - `<input type="range" min="8" max="96" value={size} />`
  - Dragging the range slider updates `size` state in real time.
  - Dynamically updates:
    - `<label>Size <strong>{size}px</strong></label>`
    - Preview SVG attributes: `width={size} height={size}`
    - Generated code string: `size={size}`
- **Color Control**:
  - `<input type="color" value={color} />` (default `#292D32`)
  - Changing the color picker updates `color` state.
  - Dynamically updates:
    - `<label>Color <strong>{color}</strong></label>`
    - Preview SVG CSS style: `style={{ color: color }}`
    - Generated code string: `color="{color}"`

### 4.3 Dismissal Mechanics
- Clicking `.modal-close` button sets `selectedIcon(null)`.
- Clicking the backdrop (`.modal-overlay` target outside `.modal-card`) closes the modal.
- Pressing keyboard `Escape` closes the modal.

---

## 5. Copy-to-Clipboard Interactions

### 5.1 CLI Command Copy
- In `.install-cmd-card`, clicking the copy icon button invokes:
  ```javascript
  await navigator.clipboard.writeText(command);
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
  ```
- Button changes icon to a checkmark SVG and applies `.copied` class for 1500ms.

### 5.2 Modal Code Copy
- In `.modal-code`, clicking `.code-copy-btn` copies the generated React component code:
  ```tsx
  import {
    {ComponentName}
  } from 'mx-icons'

  <{ComponentName}
    size={{size}}
    color="{color}"
  />
  ```
- Displays visual checkmark confirmation.

---

## 6. Pagination Mechanics

- **Page Window Size**: Constant `w = 72` items per page.
- **Slice Range**:
  ```javascript
  const startIndex = (currentPage - 1) * 72;
  const endIndex = startIndex + 72;
  const visibleIcons = filteredIcons.slice(startIndex, endIndex);
  ```
- **Navigation Controls**:
  - `PREVIOUS`: Disabled if `currentPage <= 1`. Clicking decrements `currentPage`.
  - `NEXT`: Disabled if `currentPage >= totalPages`. Clicking increments `currentPage`.
  - On page change, smooth scrolls to top of window:
    ```javascript
    window.scrollTo({ top: 0, behavior: "smooth" });
    ```
- **Preload Optimization**:
  - When visible icons `f` update, a deferred timer (80ms) pre-fetches the dynamic icon JS chunks for the current page:
    ```javascript
    useEffect(() => {
      const timer = setTimeout(() => {
        visibleIcons.forEach(icon => {
          prefetchIcon(icon.groupSlug, icon.variant).catch(() => {});
        });
      }, 80);
      return () => clearTimeout(timer);
    }, [visibleIcons]);
    ```

---

## 7. Mobile Navigation Drawer

- On viewports `<640px`, standard desktop navigation links are hidden.
- The `.site-nav-hamburger` button is visible.
- Clicking the hamburger toggles `.site-nav-mobile-menu` visibility.
- Clicking any link or clicking outside the menu dismisses the mobile drawer.
