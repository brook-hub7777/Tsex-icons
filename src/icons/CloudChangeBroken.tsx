import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CloudChangeBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M15.2883 9.98001C14.3583 4.34001 6.20833 6.48 8.13833 11.85" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.1093 11.85C5.2893 12.05 5.2993 16.15 8.1093 16.35H14.7793C15.5893 16.36 16.3693 16.05 16.9693 15.51C17.7393 14.84 18.0493 13.91 17.9893 13.01" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CloudChangeBroken.displayName = 'CloudChangeBroken';
export default CloudChangeBroken;
