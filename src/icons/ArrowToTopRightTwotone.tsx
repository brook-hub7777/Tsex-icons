import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowToTopRightTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M7 9.5L12 4.5L17 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.5" d="M12 4.5C12 4.5 12 12.8333 12 14.5C12 16.1667 13 19.5 17 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ArrowToTopRightTwotone.displayName = 'ArrowToTopRightTwotone';
export default ArrowToTopRightTwotone;
