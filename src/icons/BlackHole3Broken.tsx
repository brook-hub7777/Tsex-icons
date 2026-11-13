import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BlackHole3Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M12 10C17 10 16.6 22 9 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 12.3115C10 9.53259 13.7068 8.42171 17 9.28791M22 15.3115C22 13.342 21.1941 11.856 20 10.8222" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14 12C14 14.7789 10.2932 15.8898 7 15.0236M2 9C2 10.6801 2.58643 12.0083 3.5 13.0041" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

BlackHole3Broken.displayName = 'BlackHole3Broken';
export default BlackHole3Broken;
