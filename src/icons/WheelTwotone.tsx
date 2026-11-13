import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const WheelTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M6 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M14 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M9 17.1963L11 13.7322" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M13 10.2681L15 6.80396" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M15 17.1963L13 13.7322" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M11 10.2681L9 6.80396" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

WheelTwotone.displayName = 'WheelTwotone';
export default WheelTwotone;
