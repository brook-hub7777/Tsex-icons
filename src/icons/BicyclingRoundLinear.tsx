import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BicyclingRoundLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M18.5002 9.99997H14.5824C14.2054 9.99997 13.8396 9.87213 13.5446 9.63733L11.3862 7.91916C10.1196 6.91084 8.25192 7.27102 7.45108 8.67806C6.67587 10.0401 7.25216 11.7736 8.68853 12.4004L11.7792 13.749C12.7315 14.1646 13.1698 15.2708 12.7605 16.2258L12.0002 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

BicyclingRoundLinear.displayName = 'BicyclingRoundLinear';
export default BicyclingRoundLinear;
