import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PlanetBold = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
  <circle cx="7" cy="9" r="2" fill="white" fillOpacity="0.4"/>
  <circle cx="16" cy="15" r="2.5" fill="white" fillOpacity="0.4"/>
  <circle cx="10" cy="16" r="1.5" fill="white" fillOpacity="0.4"/>
  <circle cx="15" cy="8" r="1.2" fill="white" fillOpacity="0.4"/>
  <circle cx="8" cy="13" r="1" fill="white" fillOpacity="0.4"/>
  <circle cx="12" cy="12" r="0.8" fill="white" fillOpacity="0.4"/>
  </svg>
));

PlanetBold.displayName = 'PlanetBold';
export default PlanetBold;
