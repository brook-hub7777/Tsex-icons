import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GoogleCalendarLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path stroke="currentColor" strokeLinejoin="round" d="m13.055 10.25 2 -1.5v6.5" strokeWidth="1"/>
  <path stroke="currentColor" strokeLinejoin="round" d="M7.945 9.857c0.2 -0.489 0.41 -1.107 1.61 -1.107 1.2 0 1.5 1 1.5 1.5s-0.5 1.5 -2 1.5c1.5 0 2 1 2 1.5s-0.3 1.5 -1.5 1.5 -1.41 -0.618 -1.61 -1.107" strokeWidth="1"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22.5 2.5v3h-17v17h-3a1 1 0 0 1 -1 -1v-19a1 1 0 0 1 1 -1h19a1 1 0 0 1 1 1Z" strokeWidth="1"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 18h21L18 22.5H5.5" strokeWidth="1"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 22.5v-17h4.5V18" strokeWidth="1"/>
  </svg>
));

GoogleCalendarLinear.displayName = 'GoogleCalendarLinear';
export default GoogleCalendarLinear;
