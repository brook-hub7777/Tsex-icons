import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ScreencastTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M11 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H6.5C6.03566 4 5.80349 4 5.60793 4.01926C3.70882 4.20631 2.20631 5.70882 2.01926 7.60793C2 7.80349 2 8.03566 2 8.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11 20C11 15.0294 6.97056 11 2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 20C8 16.6863 5.31371 14 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M5 20C5 18.3431 3.65685 17 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ScreencastTwotone.displayName = 'ScreencastTwotone';
export default ScreencastTwotone;
