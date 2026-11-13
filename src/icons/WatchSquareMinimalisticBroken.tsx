import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const WatchSquareMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 9V12.0769L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7 2H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7 22H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M18.9614 9.2C18.8849 7.66459 18.6565 6.70674 17.9749 6.02513C16.9497 5 15.2998 5 12 5C8.70017 5 7.05025 5 6.02513 6.02513C5 7.05025 5 8.70017 5 12C5 15.2998 5 16.9497 6.02513 17.9749C7.05025 19 8.70017 19 12 19C15.2998 19 16.9497 19 17.9749 17.9749C18.7678 17.1819 18.9474 16.0151 18.9881 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

WatchSquareMinimalisticBroken.displayName = 'WatchSquareMinimalisticBroken';
export default WatchSquareMinimalisticBroken;
