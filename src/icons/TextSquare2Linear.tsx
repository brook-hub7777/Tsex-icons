import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TextSquare2Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M21 9.3C20.9424 6.78787 20.702 5.32056 19.6974 4.31802C18.3768 3 16.2512 3 12 3C7.74882 3 5.62323 3 4.30256 4.31802C3.298 5.32056 3.05755 6.78787 3 9.3M21 14.7C20.9424 17.2121 20.702 18.6794 19.6974 19.682C18.3768 21 16.2512 21 12 21C7.74882 21 5.62323 21 4.30256 19.682C3.29801 18.6794 3.05756 17.2121 3 14.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 16L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M22 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TextSquare2Linear.displayName = 'TextSquare2Linear';
export default TextSquare2Linear;
