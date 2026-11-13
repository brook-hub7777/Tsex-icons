import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RoundAltArrowLeftLinear = forwardRef<SVGSVGElement, IconProps>(({
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
  <path d="M13.5 9L10.5 12L13.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RoundAltArrowLeftLinear.displayName = 'RoundAltArrowLeftLinear';
export default RoundAltArrowLeftLinear;
