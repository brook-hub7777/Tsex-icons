import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowRightDownTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM5.46967 6.53033L17.4697 18.5303L18.5303 17.4697L6.53033 5.46967L5.46967 6.53033Z" fill="currentColor"/>
  <path d="M18 9L18 18L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowRightDownTwotone.displayName = 'ArrowRightDownTwotone';
export default ArrowRightDownTwotone;
