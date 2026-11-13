import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SortFromTopToBottomLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M4 16L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 6L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 4L17 20L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SortFromTopToBottomLinear.displayName = 'SortFromTopToBottomLinear';
export default SortFromTopToBottomLinear;
