import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LocationBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M15.1209 10.3099C15.1209 12.0299 13.7309 13.4299 12.0009 13.4299C10.2709 13.4299 8.88086 12.0399 8.88086 10.3099C8.88086 8.57994 10.2809 7.18994 12.0009 7.18994C12.3409 7.18994 12.6709 7.23994 12.9709 7.33994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LocationBroken.displayName = 'LocationBroken';
export default LocationBroken;
