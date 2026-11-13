const fs = require('fs');
const path = require('path');

const compDir = path.join(process.env.TEMP, 'package/dist/components');
const outDir = path.resolve(__dirname, '../raw-svgs');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function nodeToSvg(node, indent = '  ') {
  if (!node) return '';
  if (Array.isArray(node)) {
    return node.map(n => nodeToSvg(n, indent)).filter(Boolean).join('\n');
  }
  const { type, props } = node;
  if (!type) return '';
  const { children, ...attrs } = props || {};

  const attrList = [];
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null) continue;
    // convert camelCase to kebab-case
    const attrName = k.replace(/([A-Z])/g, '-$1').toLowerCase();
    attrList.push(`${attrName}="${String(v).replace(/"/g, '&quot;')}"`);
  }

  const attrStr = attrList.length ? ' ' + attrList.join(' ') : '';

  if (children) {
    const childStr = nodeToSvg(children, indent + '  ');
    return `${indent}<${type}${attrStr}>\n${childStr}\n${indent}</${type}>`;
  } else {
    return `${indent}<${type}${attrStr}/>`;
  }
}

console.log('Extracting raw SVGs to:', outDir);
const folders = fs.readdirSync(compDir);
let count = 0;
const startTime = Date.now();

for (const folder of folders) {
  const fpath = path.join(compDir, folder);
  if (!fs.statSync(fpath).isDirectory()) continue;
  const files = fs.readdirSync(fpath).filter(f => f.endsWith('.js') && f !== 'index.js');

  for (const file of files) {
    const code = fs.readFileSync(path.join(fpath, file), 'utf-8');
    const cleanCode = code.replace(/import\s+[^;]+;?/g, '').replace(/export\s+[^;]+;?/g, '');
    
    // Find function name
    const fnMatch = code.match(/function\s+([A-Za-z0-9_]+)\s*\(/);
    const fnName = fnMatch ? fnMatch[1] : file.replace('.js', '');

    const fn = new Function('jsx', 'jsxs', 'Icon', `${cleanCode}; return ${fnName};`);
    const comp = fn((t, p) => ({ type: t, props: p }), (t, p) => ({ type: t, props: p }), (p) => p);
    const res = comp({});

    const defaultFill = res.props.fill || 'none';
    const innerSvg = nodeToSvg(res.props.children);
    const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" fill="${defaultFill}" xmlns="http://www.w3.org/2000/svg">\n${innerSvg}\n</svg>\n`;

    const iconFileName = file.replace('.js', '.svg');
    fs.writeFileSync(path.join(outDir, iconFileName), svgContent, 'utf-8');
    count++;
  }
}

console.log(`Successfully extracted ${count} raw SVGs in ${Date.now() - startTime} ms`);
