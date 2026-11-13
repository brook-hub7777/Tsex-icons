import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowsArrowUpTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M11.25 20C11.25 20.4142 11.5858 20.75 12 20.75C12.4142 20.75 12.75 20.4142 12.75 20H11.25ZM12.75 20L12.75 4L11.25 4L11.25 20H12.75Z" fill="currentColor"/>
  <path d="M18 10L12 4L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsArrowUpTwotone.displayName = 'ArrowsArrowUpTwotone';
export default ArrowsArrowUpTwotone;
