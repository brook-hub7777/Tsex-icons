import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UsersGroupRoundedLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <ellipse cx="9" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

UsersGroupRoundedLinear.displayName = 'UsersGroupRoundedLinear';
export default UsersGroupRoundedLinear;
