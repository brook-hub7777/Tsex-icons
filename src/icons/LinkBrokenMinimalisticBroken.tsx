import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LinkBrokenMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M10 5.04877L10.367 4.70563C12.7995 2.43146 16.7432 2.43146 19.1757 4.70563M16.9735 15L19.1757 12.9411C20.3438 11.849 20.951 10.4309 20.9972 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14 18.9278L13.6345 19.2773C11.2123 21.5937 7.25434 21.5644 4.83209 19.248C2.43376 16.9546 2.37639 13.2153 4.74095 10.89L5.64594 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M6.58739 3L7.5 5.20521" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M3.50238 6.08658L9.05021 8.79453" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

LinkBrokenMinimalisticBroken.displayName = 'LinkBrokenMinimalisticBroken';
export default LinkBrokenMinimalisticBroken;
