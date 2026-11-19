# Vercel deployment

Tsex-icons publishes a browser-based icon preview to Vercel. The repository also contains a React icon library that can be built and distributed through npm.

## Why the deployment changed

The merge at `085c6435` kept the tree from its first parent, `e4e5d64d`. The README and the project files from that parent carried through to the merge.

Running `npm run build` locally produced the CommonJS and ES module bundles, then exhausted the TypeScript declaration worker's heap. That command builds the package under `dist/`. The Vercel fix in `e804cd4e` stages the website from `preview/`.

## Vercel build

Use the repository root as the Vercel project's Root Directory. It contains [`vercel.json`](../vercel.json) and the `preview/` input directory.
