import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Support both /raw-svgs and ./raw-svgs
const rawSvgDir = fs.existsSync(path.resolve(rootDir, 'raw-svgs')) 
  ? path.resolve(rootDir, 'raw-svgs') 
  : (fs.existsSync('C:/raw-svgs') ? 'C:/raw-svgs' : path.resolve(__dirname, '../raw-svgs'));

const srcDir = path.resolve(rootDir, 'src');
const iconsDir = path.join(srcDir, 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const ATTR_MAP = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  'clip-path': 'clipPath',
  'class': 'className',
};

function convertXmlAttrs(attrString) {
  return attrString.replace(/([a-z0-9_-]+)="([^"]*)"/gi, (match, name, value) => {
    const reactName = ATTR_MAP[name.toLowerCase()] || name;
    return `${reactName}="${value}"`;
  });
}

function parseSvg(svgString) {
  const svgOpenMatch = svgString.match(/<svg([^>]*)>/i);
  if (!svgOpenMatch) throw new Error('Missing <svg> tag');

  const rootAttrs = svgOpenMatch[1];
  const viewBoxMatch = rootAttrs.match(/viewBox="([^"]*)"/i);
  const fillMatch = rootAttrs.match(/fill="([^"]*)"/i);

  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  const fill = fillMatch ? fillMatch[1] : 'none';

  const innerMatch = svgString.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  const rawInner = innerMatch ? innerMatch[1].trim() : '';
  const jsxInner = convertXmlAttrs(rawInner);

  return { viewBox, fill, jsxInner };
}

console.log('Parsing SVGs from:', rawSvgDir);
const files = fs.readdirSync(rawSvgDir).filter(f => f.endsWith('.svg'));
console.log(`Found ${files.length} SVG files`);

const startTime = Date.now();
const componentNames = [];

for (const file of files) {
  const compName = file.replace(/\.svg$/i, '');
  componentNames.push(compName);

  const svgContent = fs.readFileSync(path.join(rawSvgDir, file), 'utf-8');
  const { viewBox, fill, jsxInner } = parseSvg(svgContent);

  const componentCode = `import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ${compName} = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = '#292D32',
  fill = '${fill}',
  className = '',
  style,
  ...props
}, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill={fill}
    className={className}
    style={{ color, ...style }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${jsxInner}
  </svg>
));

${compName}.displayName = '${compName}';
export default ${compName};
`;

  fs.writeFileSync(path.join(iconsDir, `${compName}.tsx`), componentCode, 'utf-8');
}

console.log(`Generated ${componentNames.length} React components in ${Date.now() - startTime} ms`);

// Write types.ts
const typesCode = `import React from 'react';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Icon size in pixels or CSS string
   * @default 24
   */
  size?: number | string;

  /**
   * Icon color
   * @default "#292D32"
   */
  color?: string;

  /**
   * SVG fill attribute
   * @default "none"
   */
  fill?: string;

  /**
   * Additional CSS class names
   * @default ""
   */
  className?: string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
`;

fs.writeFileSync(path.join(srcDir, 'types.ts'), typesCode, 'utf-8');
console.log('Generated src/types.ts');

// Write index.ts
componentNames.sort();
const indexLines = [
  "export * from './types';",
  ...componentNames.map(name => `export { ${name} } from './icons/${name}';`)
];
fs.writeFileSync(path.join(srcDir, 'index.ts'), indexLines.join('\n') + '\n', 'utf-8');
console.log(`Generated src/index.ts with ${componentNames.length} exports`);
