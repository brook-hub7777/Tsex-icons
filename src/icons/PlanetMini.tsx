import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PlanetMini = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="8" cy="8" r="7" fill="currentColor"/>
  <circle cx="5" cy="6" r="1.5" fill="white" fillOpacity="0.4"/>
  <circle cx="11" cy="10" r="2" fill="white" fillOpacity="0.4"/>
  <circle cx="7" cy="11" r="1" fill="white" fillOpacity="0.4"/>
  <circle cx="9" cy="7" r="0.6" fill="white" fillOpacity="0.4"/>
  </svg>
));

PlanetMini.displayName = 'PlanetMini';
export default PlanetMini;
