import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BombMinimalisticLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M17 7L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19.5 7.5L20.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M16 3.5L16.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19 5L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

BombMinimalisticLinear.displayName = 'BombMinimalisticLinear';
export default BombMinimalisticLinear;
