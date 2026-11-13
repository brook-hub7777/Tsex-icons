import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowLeftDownBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M6 18H15M6 18V9M6 18L12.5 11.5M18 6L15.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowLeftDownBroken.displayName = 'ArrowLeftDownBroken';
export default ArrowLeftDownBroken;
