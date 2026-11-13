import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const WifiTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.4" d="M4.91016 11.8401C9.21016 8.5201 14.8002 8.5201 19.1002 11.8401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 8.3601C8.06 3.6801 15.94 3.6801 22 8.3601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.78906 15.4902C9.93906 13.0502 14.0491 13.0502 17.1991 15.4902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M9.40039 19.1499C10.9804 17.9299 13.0304 17.9299 14.6104 19.1499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WifiTwotone.displayName = 'WifiTwotone';
export default WifiTwotone;
