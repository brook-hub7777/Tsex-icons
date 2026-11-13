import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DirectUpBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3.06931 16.3C1.61931 19.05 4.54931 22.04 7.32931 20.65L10.5693 19.03C11.4693 18.58 12.5293 18.58 13.4293 19.03L16.6693 20.65C19.4493 22.04 22.3693 19.05 20.9293 16.3L14.8293 4.71C13.6293 2.43 10.3693 2.43 9.16931 4.71L5.49931 11.68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DirectUpBroken.displayName = 'DirectUpBroken';
export default DirectUpBroken;
