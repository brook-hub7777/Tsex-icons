import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 Starting library build process...\n');
const totalStart = Date.now();

// 1. Ensure dist directory exists
const distDir = path.join(rootDir, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 2. Parse raw SVGs into React components
console.log('📦 Step 1: Parsing SVGs from /raw-svgs into React components...');
execSync(`node "${path.join(__dirname, 'parse-svgs.js')}"`, { stdio: 'inherit', cwd: rootDir });

// 3. Build ESM Bundle
console.log('\n📦 Step 2: Building ESM bundle (dist/index.js)...');
const esmStart = Date.now();
await esbuild.build({
  entryPoints: [path.join(rootDir, 'src/index.ts')],
  bundle: true,
  format: 'esm',
  outfile: path.join(distDir, 'index.js'),
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  sourcemap: false,
  minify: false,
  target: ['es2022'],
  logLevel: 'info',
});
console.log(`✅ ESM bundle generated in ${Date.now() - esmStart} ms`);

// 4. Build CJS Bundle
console.log('\n📦 Step 3: Building CJS bundle (dist/index.cjs)...');
const cjsStart = Date.now();
await esbuild.build({
  entryPoints: [path.join(rootDir, 'src/index.ts')],
  bundle: true,
  format: 'cjs',
  outfile: path.join(distDir, 'index.cjs'),
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  sourcemap: false,
  minify: false,
  target: ['es2022'],
  logLevel: 'info',
});
console.log(`✅ CJS bundle generated in ${Date.now() - cjsStart} ms`);

// 5. Generate TypeScript declarations
console.log('\n📦 Step 4: Generating TypeScript type declarations (dist/index.d.ts)...');
execSync(`node "${path.join(__dirname, 'generate-types.js')}"`, { stdio: 'inherit', cwd: rootDir });

// 6. Verification
console.log('\n🔍 Step 5: Verifying build outputs...');
const esmStat = fs.statSync(path.join(distDir, 'index.js'));
const cjsStat = fs.statSync(path.join(distDir, 'index.cjs'));
const dtsStat = fs.statSync(path.join(distDir, 'index.d.ts'));

console.log(`- dist/index.js  (ESM): ${(esmStat.size / (1024 * 1024)).toFixed(2)} MB`);
console.log(`- dist/index.cjs (CJS): ${(cjsStat.size / (1024 * 1024)).toFixed(2)} MB`);
console.log(`- dist/index.d.ts (Types): ${(dtsStat.size / (1024 * 1024)).toFixed(2)} MB`);

console.log(`\n🎉 Build completed successfully in ${((Date.now() - totalStart) / 1000).toFixed(2)}s!`);
