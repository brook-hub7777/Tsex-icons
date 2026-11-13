import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowBottomTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12.0005 6H14.6705C17.9805 6 19.3405 8.35 17.6805 11.22L16.3405 13.53L15.0005 15.84C13.3405 18.71 10.6305 18.71 8.97054 15.84L7.63054 13.53L6.29054 11.22C4.66054 8.35 6.01054 6 9.33054 6H12.0005Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowBottomTwotone.displayName = 'ArrowBottomTwotone';
export default ArrowBottomTwotone;
