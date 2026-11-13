import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CropMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5.51839 17.1752 5.22937 16.3001 5.10149 15M5 11V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C18.4816 6.82475 18.7706 7.69989 18.8985 9M2 5H5M19 19V22M19 13V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

CropMinimalisticBroken.displayName = 'CropMinimalisticBroken';
export default CropMinimalisticBroken;
