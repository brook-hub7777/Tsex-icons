import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DropTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12.6103 2.21C12.2503 1.93 11.7503 1.93 11.3903 2.21C9.49029 3.66 3.88028 8.39 3.91028 13.9C3.91028 18.36 7.54028 22 12.0103 22C16.4803 22 20.1103 18.37 20.1103 13.91C20.1203 8.48 14.5003 3.67 12.6103 2.21Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
  </svg>
));

DropTwotone.displayName = 'DropTwotone';
export default DropTwotone;
