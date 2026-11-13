import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowLeftDownLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M18 6L6 18M6 18L6 9M6 18L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowLeftDownLinear.displayName = 'ArrowLeftDownLinear';
export default ArrowLeftDownLinear;
