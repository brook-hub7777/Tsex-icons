import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const StopwatchLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M12 13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

StopwatchLinear.displayName = 'StopwatchLinear';
export default StopwatchLinear;
