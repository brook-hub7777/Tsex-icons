import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UploadTrack2Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M13 15V11V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="11" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M16 10C14.3431 10 13 8.65685 13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14 21.8C13.3538 21.9311 12.6849 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

UploadTrack2Linear.displayName = 'UploadTrack2Linear';
export default UploadTrack2Linear;
