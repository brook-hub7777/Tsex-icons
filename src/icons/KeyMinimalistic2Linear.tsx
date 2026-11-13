import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const KeyMinimalistic2Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="15" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M3.5 20.5L9.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6 21L4.5 19.5M6.5 17.5L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

KeyMinimalistic2Linear.displayName = 'KeyMinimalistic2Linear';
export default KeyMinimalistic2Linear;
