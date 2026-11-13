import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DoubleAltArrowDownBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19 11L12 17L10.25 15.5M5 11L7.33333 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5 7L12 13L13.75 11.5M19 7L16.6667 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DoubleAltArrowDownBroken.displayName = 'DoubleAltArrowDownBroken';
export default DoubleAltArrowDownBroken;
