import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DoubleAltArrowLeftBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M13 19L7 12L8.5 10.25M13 5L11 7.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17 5L11 12L12.5 13.75M17 19L15 16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DoubleAltArrowLeftBroken.displayName = 'DoubleAltArrowLeftBroken';
export default DoubleAltArrowLeftBroken;
