import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MouseMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MouseMinimalisticBroken.displayName = 'MouseMinimalisticBroken';
export default MouseMinimalisticBroken;
