import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UserSpeakLinear = forwardRef<SVGSVGElement, IconProps>(({
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
  <path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

UserSpeakLinear.displayName = 'UserSpeakLinear';
export default UserSpeakLinear;
