import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MinimizeTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.6" d="M2 22L9 15M9 15H3.14286M9 15V20.8571" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22 2L15 9M15 9H20.8571M15 9V3.14286" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MinimizeTwotone.displayName = 'MinimizeTwotone';
export default MinimizeTwotone;
