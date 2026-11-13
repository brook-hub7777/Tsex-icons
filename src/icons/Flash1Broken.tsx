import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Flash1Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M14.82 7.0199V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L5.23 11.3599C4.3 12.4099 4.69 13.2799 6.1 13.2799H9.19V20.4799C9.19 22.1599 10.1 22.4999 11.21 21.2399L18.78 12.6399C19.71 11.5899 19.32 10.7199 17.91 10.7199H14.82" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Flash1Broken.displayName = 'Flash1Broken';
export default Flash1Broken;
