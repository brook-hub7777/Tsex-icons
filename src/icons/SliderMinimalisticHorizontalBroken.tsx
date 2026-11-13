import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SliderMinimalisticHorizontalBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M4.5 3L19.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M4.5 21L19.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 6C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.75736 18 5.17157 18 8 18L16 18C18.8284 18 20.2426 18 21.1213 17.1213C22 16.2426 22 14.8284 22 12C22 9.17157 22 7.75736 21.1213 6.87868C20.2426 6 18.8284 6 16 6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

SliderMinimalisticHorizontalBroken.displayName = 'SliderMinimalisticHorizontalBroken';
export default SliderMinimalisticHorizontalBroken;
