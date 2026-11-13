import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Menu1Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.34" d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

Menu1Twotone.displayName = 'Menu1Twotone';
export default Menu1Twotone;
