import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UnreadBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M7 12.9L10.1429 16.5L12.1071 14.25M18 7.5L14.0714 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

UnreadBroken.displayName = 'UnreadBroken';
export default UnreadBroken;
