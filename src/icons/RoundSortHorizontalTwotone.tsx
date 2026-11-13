import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RoundSortHorizontalTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M16 9.5L8 9.5M8 9.5L10.75 7M8 9.5L10.75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 14.5L16 14.5M16 14.5L13.25 12M16 14.5L13.25 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RoundSortHorizontalTwotone.displayName = 'RoundSortHorizontalTwotone';
export default RoundSortHorizontalTwotone;
