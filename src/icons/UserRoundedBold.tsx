import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UserRoundedBold = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="6" r="4" fill="currentColor"/>
  <ellipse cx="12" cy="17" rx="7" ry="4" fill="currentColor"/>
  </svg>
));

UserRoundedBold.displayName = 'UserRoundedBold';
export default UserRoundedBold;
