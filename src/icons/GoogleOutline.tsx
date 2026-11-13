import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GoogleOutline = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M21.95 11a10 10 0 1 1 -3.65-6.664L15.35 6.994A5.996 5.996 0 1 0 17.66 14.19H13.1v-3h8.795" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

GoogleOutline.displayName = 'GoogleOutline';
export default GoogleOutline;
