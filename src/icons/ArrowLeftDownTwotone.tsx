import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowLeftDownTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L18.5303 6.53033ZM17.4697 5.46967L5.46967 17.4697L6.53033 18.5303L18.5303 6.53033L17.4697 5.46967Z" fill="currentColor"/>
  <path d="M6 9L6 18L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowLeftDownTwotone.displayName = 'ArrowLeftDownTwotone';
export default ArrowLeftDownTwotone;
