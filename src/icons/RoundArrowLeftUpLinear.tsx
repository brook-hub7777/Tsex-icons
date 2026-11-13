import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RoundArrowLeftUpLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M15 15L9 9M9 9H13.5M9 9V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RoundArrowLeftUpLinear.displayName = 'RoundArrowLeftUpLinear';
export default RoundArrowLeftUpLinear;
