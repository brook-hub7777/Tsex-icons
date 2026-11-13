import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Discover1Bold = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM10.5 16.13C9.05 16.13 7.88 14.95 7.88 13.51C7.88 10.41 10.4 7.89 13.5 7.89C14.95 7.89 16.12 9.07 16.12 10.51C16.12 13.6 13.6 16.13 10.5 16.13Z" fill="currentColor"/>
  </svg>
));

Discover1Bold.displayName = 'Discover1Bold';
export default Discover1Bold;
