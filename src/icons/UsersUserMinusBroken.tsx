import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UsersUserMinusBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M21 10H19H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

UsersUserMinusBroken.displayName = 'UsersUserMinusBroken';
export default UsersUserMinusBroken;
