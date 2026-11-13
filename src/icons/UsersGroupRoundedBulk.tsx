import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UsersGroupRoundedBulk = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = '#292D32',
  fill = 'currentColor',
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
    <circle opacity="0.4" cx="15" cy="6" r="3" fill="currentColor"/>
  <ellipse opacity="0.4" cx="16" cy="17" rx="5" ry="3" fill="currentColor"/>
  <circle cx="9.00098" cy="6" r="4" fill="currentColor"/>
  <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill="currentColor"/>
  </svg>
));

UsersGroupRoundedBulk.displayName = 'UsersGroupRoundedBulk';
export default UsersGroupRoundedBulk;
