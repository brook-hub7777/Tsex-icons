import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MinimalisticMagnifierBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20 20L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6.75 3.27093C8.14732 2.46262 9.76964 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 9.76964 2.46262 8.14732 3.27093 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MinimalisticMagnifierBroken.displayName = 'MinimalisticMagnifierBroken';
export default MinimalisticMagnifierBroken;
