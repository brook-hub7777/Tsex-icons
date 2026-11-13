import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UserCheckTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M16.6665 16L17.5 17L19.3332 15.1111" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.5" d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

UserCheckTwotone.displayName = 'UserCheckTwotone';
export default UserCheckTwotone;
