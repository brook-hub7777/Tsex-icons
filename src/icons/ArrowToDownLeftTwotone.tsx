import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowToDownLeftTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M17 14.5L12 19.5L7 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.5" d="M12 19.5C12 19.5 12 11.1667 12 9.5C12 7.83333 11 4.5 7 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ArrowToDownLeftTwotone.displayName = 'ArrowToDownLeftTwotone';
export default ArrowToDownLeftTwotone;
