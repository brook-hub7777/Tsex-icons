import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FaceScanSquareBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
  <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
  <path d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

FaceScanSquareBroken.displayName = 'FaceScanSquareBroken';
export default FaceScanSquareBroken;
