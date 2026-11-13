import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PreviousBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12.2707 7.39006L16.4207 5.00005C18.1207 4.02005 20.2507 5.24004 20.2507 7.21004V16.78C20.2507 18.74 18.1207 19.97 16.4207 18.99L12.2707 16.6001L8.1207 14.2001C6.4207 13.2201 6.4207 10.7701 8.1207 9.79006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.75977 18.18V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.75977 14.0001V5.82007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PreviousBroken.displayName = 'PreviousBroken';
export default PreviousBroken;
