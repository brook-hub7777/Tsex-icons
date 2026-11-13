import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RoundSortVerticalLinear = forwardRef<SVGSVGElement, IconProps>(({
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
  <path d="M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RoundSortVerticalLinear.displayName = 'RoundSortVerticalLinear';
export default RoundSortVerticalLinear;
