import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowRight1Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M15.85 8.98992C18.72 10.6499 18.72 13.3599 15.85 15.0199L13.54 16.3599L11.23 17.6999C8.35 19.3399 6 17.9899 6 14.6699V11.9999V9.32992C6 6.01992 8.35 4.65992 11.22 6.31992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowRight1Broken.displayName = 'ArrowRight1Broken';
export default ArrowRight1Broken;
