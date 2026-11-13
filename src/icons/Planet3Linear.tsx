import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Planet3Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M3 8.0077C3 8.0077 5.93717 11 10.4372 11C13.5 11 15.1257 9.22689 16.5 8.75574C19.0829 7.87029 21 8.0077 21 8.0077" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M2.99986 14.0077C2.99986 14.0077 5.08875 13.8703 7.90309 14.7558C9.40057 15.2269 11.1719 17 14.5092 17C17.521 17 19.8903 15.871 21.27 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

Planet3Linear.displayName = 'Planet3Linear';
export default Planet3Linear;
