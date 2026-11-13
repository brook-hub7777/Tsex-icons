import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LaptopMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3 10V14C3 15.8856 3 16.8284 3.58579 17.4142C4.17157 18 5.11438 18 7 18H17C18.8856 18 19.8284 18 20.4142 17.4142C21 16.8284 21 15.8856 21 14V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H9C6.17157 3 4.75736 3 3.87868 3.87868C3.38879 4.36857 3.17203 5.02491 3.07612 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M22 21H16M2 21H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M15 15H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

LaptopMinimalisticBroken.displayName = 'LaptopMinimalisticBroken';
export default LaptopMinimalisticBroken;
