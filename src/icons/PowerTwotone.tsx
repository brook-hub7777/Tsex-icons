import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PowerTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8.5 3.70605C5.26806 5.07157 3 8.27099 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.9706 21.0001 21 16.9707 21 12.0001C21 8.27099 18.7319 5.07157 15.5 3.70605" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

PowerTwotone.displayName = 'PowerTwotone';
export default PowerTwotone;
