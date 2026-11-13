import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Tuning3Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="2" transform="rotate(180 12 12)" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="20" cy="14" r="2" transform="rotate(180 20 14)" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="2" cy="2" r="2" transform="matrix(-1 8.74228e-08 8.74228e-08 1 6 8)" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M20 12L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M4 12L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M12 19L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M20 19L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M12 10V5M4 5L4 7.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

Tuning3Twotone.displayName = 'Tuning3Twotone';
export default Tuning3Twotone;
