import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SkateboardBroken = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = '#292D32',
  fill = 'none',
  className = '',
  style,
  ...props
}, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
    style={{ color, ...style }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 7L2.81253 8.2188C3.5544 9.3316 4.80332 10 6.14073 10H12M22 7L21.1875 8.2188C20.4456 9.33159 19.1967 10 17.8593 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="7" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

SkateboardBroken.displayName = 'SkateboardBroken';
export default SkateboardBroken;
