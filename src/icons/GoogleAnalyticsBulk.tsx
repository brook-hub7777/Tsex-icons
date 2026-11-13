import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GoogleAnalyticsBulk = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = '#292D32',
  fill = 'currentColor',
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
    <path opacity="0.4" d="M20.5 0A3.5 3.5 0 0 0 17 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 20.5 0Z" fill="currentColor"/>
  <path d="M12 11a3.5 3.5 0 0 0 -3.5 3.5v6a3.5 3.5 0 0 0 7 0v-6A3.5 3.5 0 0 0 12 11Z" fill="currentColor"/>
  <path opacity="0.4" d="M0 20.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0" fill="currentColor"/>
  </svg>
));

GoogleAnalyticsBulk.displayName = 'GoogleAnalyticsBulk';
export default GoogleAnalyticsBulk;
