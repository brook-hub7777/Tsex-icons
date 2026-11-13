import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const EuroLinear = forwardRef<SVGSVGElement, IconProps>(({
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
  <path d="M15 6.80269C14.1175 6.29218 13.0929 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.0929 18 14.1175 17.7078 15 17.1973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M5 10.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M5 13.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

EuroLinear.displayName = 'EuroLinear';
export default EuroLinear;
