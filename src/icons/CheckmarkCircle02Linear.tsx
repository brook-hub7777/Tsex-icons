import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CheckmarkCircle02Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

CheckmarkCircle02Linear.displayName = 'CheckmarkCircle02Linear';
export default CheckmarkCircle02Linear;
