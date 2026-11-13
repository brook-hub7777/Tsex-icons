import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SlashCircleLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M13.2939 7.17041L11.9998 12L10.7058 16.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

SlashCircleLinear.displayName = 'SlashCircleLinear';
export default SlashCircleLinear;
