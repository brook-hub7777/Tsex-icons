import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UserSpeakRoundedLinear = forwardRef<SVGSVGElement, IconProps>(({
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
  <ellipse cx="10" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

UserSpeakRoundedLinear.displayName = 'UserSpeakRoundedLinear';
export default UserSpeakRoundedLinear;
