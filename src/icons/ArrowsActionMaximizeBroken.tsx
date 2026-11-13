import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowsActionMaximizeBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M22 2H16.1429M22 2V7.85714M22 2L18.5 5.5M15 9L15.875 8.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9 15L2 22M2 22H7.85714M2 22V16.1429" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsActionMaximizeBroken.displayName = 'ArrowsActionMaximizeBroken';
export default ArrowsActionMaximizeBroken;
