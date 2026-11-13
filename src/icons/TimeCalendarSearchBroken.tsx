import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TimeCalendarSearchBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M22 14V12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M20.5 20.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TimeCalendarSearchBroken.displayName = 'TimeCalendarSearchBroken';
export default TimeCalendarSearchBroken;
