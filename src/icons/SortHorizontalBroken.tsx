import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SortHorizontalBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M6 8L10.125 4M6 8L10.125 12M6 8L13 8M18 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18 16L13.875 12M18 16L13.875 20M18 16L11 16M6 16H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SortHorizontalBroken.displayName = 'SortHorizontalBroken';
export default SortHorizontalBroken;
