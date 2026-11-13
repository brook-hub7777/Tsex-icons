import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GoogleLensBold = forwardRef<SVGSVGElement, IconProps>(({
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
    <path fill="currentColor" fillRule="evenodd" d="M4 6.5A2.5 2.5 0 0 1 6.5 4h3V1h-3A5.5 5.5 0 0 0 1 6.5v3h3v-3ZM16 12a4 4 0 1 1 -8 0 4 4 0 0 1 8 0Zm6 7.5a2.5 2.5 0 1 1 -5 0 2.5 2.5 0 0 1 5 0ZM17.5 4h-3V1h3A5.5 5.5 0 0 1 23 6.5v3h-3v-3A2.5 2.5 0 0 0 17.5 4ZM1 14.5v3A5.5 5.5 0 0 0 6.5 23h3v-3h-3A2.5 2.5 0 0 1 4 17.5v-3H1Z" clipRule="evenodd"/>
  </svg>
));

GoogleLensBold.displayName = 'GoogleLensBold';
export default GoogleLensBold;
