import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PlanetLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="7" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="16" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="10" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="15" cy="8" r="1.2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="13" cy="12" r="0.8" fill="currentColor"/>
  <circle cx="6" cy="14" r="0.6" fill="currentColor"/>
  </svg>
));

PlanetLinear.displayName = 'PlanetLinear';
export default PlanetLinear;
