import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const srcIndex = path.join(rootDir, 'src/index.ts');
const distDir = path.join(rootDir, 'dist');
const outDts = path.join(distDir, 'index.d.ts');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

console.log('Generating TypeScript declaration file dist/index.d.ts...');
const content = fs.readFileSync(srcIndex, 'utf-8');
const lines = content.split('\n');

const iconNames = [];
for (const line of lines) {
  const match = line.match(/export\s*\{\s*([A-Za-z0-9_]+)\s*\}\s*from/);
  if (match) {
    iconNames.push(match[1]);
  }
}

iconNames.sort();

const dtsContent = `import React from 'react';

/**
 * Props for all icon components
 */
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

// Export all icon components
${iconNames.map(name => `export declare const ${name}: IconComponent;`).join('\n')}
`;

fs.writeFileSync(outDts, dtsContent, 'utf-8');
console.log(`Generated ${outDts} with ${iconNames.length} components`);
