# Vercel deployment

Tsex-icons publishes a browser-based icon preview to Vercel. The repository also contains a React icon library that can be built and distributed through npm.

## Why the deployment changed

The merge at `085c6435` kept the tree from its first parent, `e4e5d64d`. The README and the project files from that parent carried through to the merge.

Running `npm run build` locally produced the CommonJS and ES module bundles, then exhausted the TypeScript declaration worker's heap. That command builds the package under `dist/`. The Vercel fix in `e804cd4e` stages the website from `preview/`.

## Vercel build

Use the repository root as the Vercel project's Root Directory. It contains [`vercel.json`](../vercel.json) and the `preview/` input directory.

The configuration sets `framework` to `null` because the preview contains compiled HTML, JavaScript, and CSS. Vercel can publish it as a static site.

The empty `installCommand` skips dependency installation. Every file the build command copies is already in the repository.

The build command creates `.vercel-static/` and copies the website files into it. The configured `outputDirectory` tells Vercel which folder to publish.

The staging command copies `preview/index.html`, the top-level PNG images and favicon, `preview/assets/`, and the third-party notice. Add site assets to `preview/assets/` so the existing copy command includes them.

The Node preview server, `preview/server.cjs`, supports local development. Vercel receives the staged static files and serves them directly.

The generated `.vercel-static/` directory is ignored by Git. Vercel rebuilds it from the tracked preview files on each deployment.

## Routes and icon assets

The homepage at `/` serves the staged `index.html`. That page loads the preview's JavaScript, stylesheet, and branding assets.

A direct request to `/installation` is rewritten to `/index.html`. The client-side router then renders the installation page at the requested URL.

Vercel checks the published filesystem first. A matching file under `/assets/` is served from the deployment. [Vercel rewrite behavior](https://vercel.com/docs/routing/rewrites)

When a requested `/assets/` file is absent from the deployment, Vercel forwards the same asset path to `https://mx-icons.vercel.app`. Those requests depend on the upstream host continuing to serve the original chunk filenames.

The preview HTML omits the upstream Umami script and Google site-verification tag. The preview no longer sends its page views through that script or advertises the upstream verification token.

The [third-party notice](../preview/THIRD_PARTY_NOTICES.txt) carries the upstream mx-icons copyright and MIT terms. It is included at `/THIRD_PARTY_NOTICES.txt` in the staged website.

## Local verification

Start the local preview with `npm run preview` and open `http://localhost:3000`. The server uses Node's built-in modules.

If port 3000 is busy, run `PORT=3100 npm run preview` and open `http://localhost:3100`.

The local server can fetch missing icon chunks from the upstream host and cache them under `preview/assets/`. After browsing new icons, use `git status --short preview/assets` to see which files the server added.

Run the configured copy command from the repository root in a shell to reproduce the static build.

```sh
sh -c "$(node -p "require('./vercel.json').buildCommand")"
```

Verify the homepage HTML, asset directory, and license notice are present after staging.

```sh
test -f .vercel-static/index.html &&
  test -d .vercel-static/assets &&
  test -f .vercel-static/THIRD_PARTY_NOTICES.txt
```

## Deployment verification

Open the deployed homepage, click **Installation**, and refresh that page. Also open `/installation` directly in a fresh tab to check the rewrite.

On the deployed homepage, use the browser's Network panel to confirm the JavaScript and CSS referenced in `preview/index.html` load successfully with their expected content types.

To test the upstream rewrite, find an icon chunk loaded in the browser's Network panel whose filename is absent from `preview/assets/`. Check that its request succeeds, returns JavaScript, and the icon renders.

## GitHub and Vercel

The existing `tsex-icons` Vercel project is connected to [`brook-hub7777/Tsex-icons`](https://github.com/brook-hub7777/Tsex-icons). Push to `main` to trigger the connected production deployment.
