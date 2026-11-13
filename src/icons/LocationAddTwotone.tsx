import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LocationAddTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <g opacity="0.4">
    <path d="M9.25 11H14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 13.75V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </g>
  <path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

LocationAddTwotone.displayName = 'LocationAddTwotone';
export default LocationAddTwotone;
