import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DirectDownTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M9.16931 19.2901L3.06931 7.70015C1.61931 4.95015 4.54931 1.96015 7.32931 3.35015L10.5693 4.97015C11.4693 5.42015 12.5293 5.42015 13.4293 4.97015L16.6693 3.35015C19.4493 1.96015 22.3693 4.95015 20.9293 7.70015L14.8293 19.2901C13.6293 21.5701 10.3693 21.5701 9.16931 19.2901Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DirectDownTwotone.displayName = 'DirectDownTwotone';
export default DirectDownTwotone;
