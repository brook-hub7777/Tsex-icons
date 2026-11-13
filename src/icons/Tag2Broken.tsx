import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Tag2Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M15.3005 4.17005C14.3505 3.22005 13.0405 2.71005 11.7005 2.78005L6.70046 3.02005C4.70046 3.11005 3.11046 4.70005 3.01046 6.69005L2.77046 11.69C2.71046 13.03 3.21046 14.34 4.16046 15.29L8.69046 19.82C10.5505 21.68 13.5705 21.68 15.4405 19.82L19.8305 15.43C21.6905 13.57 21.6905 10.55 19.8305 8.68005L18.7005 7.55005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.51 11.8C8.81 11.93 9.15 12 9.5 12C10.88 12 12 10.88 12 9.5C12 8.12 10.88 7 9.5 7C8.12 7 7 8.12 7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M13 17L17 13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tag2Broken.displayName = 'Tag2Broken';
export default Tag2Broken;
