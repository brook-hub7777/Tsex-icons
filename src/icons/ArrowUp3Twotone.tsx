import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowUp3Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M11.9997 17.9998H9.32968C6.01968 17.9998 4.65968 15.6498 6.31968 12.7798L7.65968 10.4698L8.99968 8.15982C10.6597 5.28982 13.3697 5.28982 15.0297 8.15982L16.3697 10.4698L17.7097 12.7798C19.3697 15.6498 18.0097 17.9998 14.6997 17.9998H11.9997Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowUp3Twotone.displayName = 'ArrowUp3Twotone';
export default ArrowUp3Twotone;
