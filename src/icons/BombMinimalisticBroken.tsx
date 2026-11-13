import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BombMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M17 7L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19.5 7.5L20.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M16 3.5L16.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19 5L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M5.75 8.00337C6.85315 7.36523 8.13392 7 9.5 7C13.6421 7 17 10.3579 17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 13.1339 2.36523 11.8532 3.00337 10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

BombMinimalisticBroken.displayName = 'BombMinimalisticBroken';
export default BombMinimalisticBroken;
