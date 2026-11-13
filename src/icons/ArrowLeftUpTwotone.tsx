import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowLeftUpTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L17.4697 18.5303ZM18.5303 17.4697L6.53033 5.46967L5.46967 6.53033L17.4697 18.5303L18.5303 17.4697Z" fill="currentColor"/>
  <path d="M15 6H6V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowLeftUpTwotone.displayName = 'ArrowLeftUpTwotone';
export default ArrowLeftUpTwotone;
