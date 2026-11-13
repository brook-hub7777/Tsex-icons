import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MapPointHospitalLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M10.5 10H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 11.5L12 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MapPointHospitalLinear.displayName = 'MapPointHospitalLinear';
export default MapPointHospitalLinear;
