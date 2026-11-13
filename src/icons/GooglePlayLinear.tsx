import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GooglePlayLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 20.548 16.73 7.745" strokeWidth="1.5"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.051 10.274 6.511 1.762C5.176 0.982 3.5 1.943 3.5 3.488v17.024c0 1.545 1.677 2.506 3.01 1.726l14.541 -8.512c1.32 -0.772 1.32 -2.68 0 -3.452Z" strokeWidth="1.5"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.73 16.256 3.5 3.452" strokeWidth="1.5"/>
  </svg>
));

GooglePlayLinear.displayName = 'GooglePlayLinear';
export default GooglePlayLinear;
