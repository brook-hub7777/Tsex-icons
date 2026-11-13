import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BedsideTable3Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19 22V20.5M5 22V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M9 15.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M9 6.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M2 11H14M22 11H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

BedsideTable3Broken.displayName = 'BedsideTable3Broken';
export default BedsideTable3Broken;
