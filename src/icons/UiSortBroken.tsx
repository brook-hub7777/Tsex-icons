import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UiSortBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M22 7L9 7M2 7L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19 12H16M5 12L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M16 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

UiSortBroken.displayName = 'UiSortBroken';
export default UiSortBroken;
