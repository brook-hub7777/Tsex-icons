import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MenuDotsLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

MenuDotsLinear.displayName = 'MenuDotsLinear';
export default MenuDotsLinear;
