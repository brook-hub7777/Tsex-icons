import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowRightDownLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M6 6L18 18M18 18L18 9M18 18L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowRightDownLinear.displayName = 'ArrowRightDownLinear';
export default ArrowRightDownLinear;
