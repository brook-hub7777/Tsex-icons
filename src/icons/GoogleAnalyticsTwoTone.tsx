import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GoogleAnalyticsTwoTone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20.5 0A3.5 3.5 0 0 0 17 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 20.5 0Z" stroke="currentColor"/>
  <path d="M12 11a3.5 3.5 0 0 0 -3.5 3.5v6a3.5 3.5 0 0 0 7 0v-6A3.5 3.5 0 0 0 12 11Z" stroke="currentColor" opacity="0.5"/>
  <path d="M0 20.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0" stroke="currentColor"/>
  </svg>
));

GoogleAnalyticsTwoTone.displayName = 'GoogleAnalyticsTwoTone';
export default GoogleAnalyticsTwoTone;
