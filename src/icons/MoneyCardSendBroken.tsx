import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MoneyCardSendBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19 20V14M19 14L21 16M19 14L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4M14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 16H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M13 16H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M2 10L7 10M22 10L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MoneyCardSendBroken.displayName = 'MoneyCardSendBroken';
export default MoneyCardSendBroken;
