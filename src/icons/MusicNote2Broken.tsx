import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MusicNote2Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M13 12V7V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="9" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M19 8C15.6863 8 13 5.31371 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MusicNote2Broken.displayName = 'MusicNote2Broken';
export default MusicNote2Broken;
