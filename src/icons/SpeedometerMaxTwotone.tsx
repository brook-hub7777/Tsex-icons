import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SpeedometerMaxTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M19 19L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M19 5L17.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M5 19L6.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M5 5L6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M19.9998 12L21.9998 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M12 4.00021L12 2.00021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10.1214 14.364C8.94978 13.1924 8.94978 11.2929 10.1214 10.1214C11.2929 8.94978 13.1924 8.94978 14.364 10.1214C14.8096 10.567 15.1209 11.4921 15.3355 12.4675C15.6564 13.926 15.8169 14.6553 15.2361 15.2361C14.6553 15.8169 13.926 15.6564 12.4675 15.3355C11.4921 15.1209 10.567 14.8096 10.1214 14.364Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

SpeedometerMaxTwotone.displayName = 'SpeedometerMaxTwotone';
export default SpeedometerMaxTwotone;
