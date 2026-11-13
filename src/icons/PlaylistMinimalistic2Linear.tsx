import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PlaylistMinimalistic2Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M15 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M13 10L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M9 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 16.5V12.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="14.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M21 12C18.7909 12 17 10.2091 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

PlaylistMinimalistic2Linear.displayName = 'PlaylistMinimalistic2Linear';
export default PlaylistMinimalistic2Linear;
