import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UploadTrack2Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
  <path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

UploadTrack2Twotone.displayName = 'UploadTrack2Twotone';
export default UploadTrack2Twotone;
