import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LocationAddLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M9.25 11H14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 13.75V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

LocationAddLinear.displayName = 'LocationAddLinear';
export default LocationAddLinear;
