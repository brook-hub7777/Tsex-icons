import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowsArrowDownTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM11.25 4L11.25 20H12.75L12.75 4L11.25 4Z" fill="currentColor"/>
  <path d="M18 14L12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsArrowDownTwotone.displayName = 'ArrowsArrowDownTwotone';
export default ArrowsArrowDownTwotone;
