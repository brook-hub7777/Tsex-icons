import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GmailOutline = forwardRef<SVGSVGElement, IconProps>(({
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
    <path stroke="currentColor" strokeLinejoin="round" d="m1.5 8.24 5 3.695m-5 -3.696V19.5h5v-7.565m-5 -3.696V6.5a2 2 0 0 1 2 -2h0.782a2 2 0 0 1 1.153 0.366l1.065 0.752m0 6.317L12 16l5.5 -4.065m-11 0V5.618m11 6.317 5 -3.696m-5 3.696V19.5h5V8.24m-5 3.695V5.618m5 2.621V6.5a2 2 0 0 0 -2 -2h-0.782a2 2 0 0 0 -1.153 0.366l-1.065 0.752m-11 0L12 9.5l5.5 -3.882" strokeWidth="1"/>
  </svg>
));

GmailOutline.displayName = 'GmailOutline';
export default GmailOutline;
