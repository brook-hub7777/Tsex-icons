import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

console.log('🧪 Running comprehensive test suite on dist outputs...\n');

// 1. Test CommonJS bundle
console.log('1. Testing CommonJS bundle (dist/index.cjs)...');
const cjs = require('../dist/index.cjs');
if (!cjs.AccessibilityBold) throw new Error('Missing AccessibilityBold in CJS');
console.log(`- Loaded CJS bundle successfully (${Object.keys(cjs).length} exports)`);

const cjsElem = React.createElement(cjs.AccessibilityBold, {
  size: 32,
  color: '#ff0000',
  className: 'custom-icon-class'
});
const cjsHtml = renderToString(cjsElem);
console.log('- Rendered CJS component to HTML:');
console.log(cjsHtml.slice(0, 180) + '...\n');

if (!cjsHtml.includes('width="32"') || !cjsHtml.includes('height="32"')) {
  throw new Error('CJS size prop failed');
}
if (!cjsHtml.includes('custom-icon-class')) {
  throw new Error('CJS className prop failed');
}
if (!cjsHtml.includes('color:#ff0000')) {
  throw new Error('CJS color prop failed');
}
console.log('✅ CommonJS tests passed with size, color, className verified!\n');

// 2. Test ESM bundle
console.log('2. Testing ESM bundle (dist/index.js)...');
const esmUrl = pathToFileURL(path.resolve(__dirname, '../dist/index.js')).href;
const esm = await import(esmUrl);
if (!esm.AccessibilityBold) throw new Error('Missing AccessibilityBold in ESM');
console.log(`- Loaded ESM bundle successfully (${Object.keys(esm).length} exports)`);

const esmElem = React.createElement(esm.AccessibilityBold, {
  size: 48,
  color: '#00ff00',
  className: 'esm-test-class'
});
const esmHtml = renderToString(esmElem);
console.log('- Rendered ESM component to HTML:');
console.log(esmHtml.slice(0, 180) + '...\n');

if (!esmHtml.includes('width="48"') || !esmHtml.includes('height="48"')) {
  throw new Error('ESM size prop failed');
}
if (!esmHtml.includes('esm-test-class')) {
  throw new Error('ESM className prop failed');
}
if (!esmHtml.includes('color:#00ff00')) {
  throw new Error('ESM color prop failed');
}
console.log('✅ ESM tests passed with size, color, className verified!\n');

// 3. Test TypeScript declaration file
console.log('3. Testing TypeScript declaration file (dist/index.d.ts)...');
import fs from 'fs';
const dtsContent = fs.readFileSync(path.resolve(__dirname, '../dist/index.d.ts'), 'utf-8');
if (!dtsContent.includes('interface IconProps')) throw new Error('IconProps interface missing in index.d.ts');
if (!dtsContent.includes('AccessibilityBold')) throw new Error('AccessibilityBold missing in index.d.ts');
console.log('✅ dist/index.d.ts verified!\n');

console.log('🎉 ALL TESTS PASSED SUCCESSFULLY! The library is completely ready for npm distribution.');
