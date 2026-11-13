import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const HamburgerMenuBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M4 7L7 7M20 7L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M20 17H17M4 17L13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M4 12H7L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

HamburgerMenuBroken.displayName = 'HamburgerMenuBroken';
export default HamburgerMenuBroken;
