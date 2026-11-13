import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Tuning4Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="2" transform="rotate(-90 12 12)" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="10" cy="20" r="2" transform="rotate(-90 10 20)" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="2" cy="2" r="2" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 16 6)" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M16 12L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14 20L19 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 4L5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M5 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M5 20L6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19 4L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

Tuning4Linear.displayName = 'Tuning4Linear';
export default Tuning4Linear;
