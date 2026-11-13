import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RefreshLeftSquareTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <g opacity="0.4">
    <path d="M10.33 7.51025C10.83 7.36025 11.38 7.26025 12 7.26025C14.76 7.26025 17 9.50025 17 12.2603C17 15.0203 14.76 17.2603 12 17.2603C9.24 17.2603 7 15.0203 7 12.2603C7 11.2303 7.31 10.2803 7.84 9.48026" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.62109 7.65024L11.2811 5.74023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.62109 7.65039L11.5611 9.07039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RefreshLeftSquareTwotone.displayName = 'RefreshLeftSquareTwotone';
export default RefreshLeftSquareTwotone;
