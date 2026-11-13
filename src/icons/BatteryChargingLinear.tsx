import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BatteryChargingLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.99995 8L8.10995 10.5C7.71995 11.17 8.19995 12 8.96995 12H11.27C12.04 12 12.52 12.83 12.14 13.5L9.99995 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7 19C3 19 2 18 2 14V10C2 6 3 5 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13 5C17 5 18 6 18 10V14C18 18 17 19 13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BatteryChargingLinear.displayName = 'BatteryChargingLinear';
export default BatteryChargingLinear;
