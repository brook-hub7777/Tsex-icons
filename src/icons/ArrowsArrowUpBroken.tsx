import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowsArrowUpBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 4L6 10M12 4L18 10M12 4L12 14.5M12 20V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsArrowUpBroken.displayName = 'ArrowsArrowUpBroken';
export default ArrowsArrowUpBroken;
