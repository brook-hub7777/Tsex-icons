import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DoubleAltArrowUpBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19 13L12 7L10.25 8.5M5 13L7.33333 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5 17L12 11L13.75 12.5M19 17L16.6667 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DoubleAltArrowUpBroken.displayName = 'DoubleAltArrowUpBroken';
export default DoubleAltArrowUpBroken;
