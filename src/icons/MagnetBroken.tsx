import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MagnetBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M17 2H19.5C20.3284 2 21 2.67157 21 3.5V5.5C21 6.32843 20.3284 7 19.5 7H17M17 2H13C11.5778 2 10.2249 2.2969 9 2.83209M17 2V7M17 7H13C10.2386 7 8 9.23858 8 12C8 13.1258 8.37209 14.1647 9 15.0005M17 17H19.5C20.3284 17 21 17.6716 21 18.5V20.5C21 21.3284 20.3284 22 19.5 22H17M17 17H13M17 17V22M17 22H13C7.47715 22 3 17.5228 3 12C3 9.74835 3.74418 7.67051 5 5.99903" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MagnetBroken.displayName = 'MagnetBroken';
export default MagnetBroken;
