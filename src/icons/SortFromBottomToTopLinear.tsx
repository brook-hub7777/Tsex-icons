import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SortFromBottomToTopLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M4 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 20V4L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SortFromBottomToTopLinear.displayName = 'SortFromBottomToTopLinear';
export default SortFromBottomToTopLinear;
