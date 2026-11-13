import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SortByTimeTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M10 7L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M8 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M10 17H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="17" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M17 10V11.8462L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SortByTimeTwotone.displayName = 'SortByTimeTwotone';
export default SortByTimeTwotone;
