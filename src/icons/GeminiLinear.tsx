import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GeminiLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M2 2C8.16 5.69 15.84 5.69 22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 21.9999C8.16 18.3099 15.84 18.3099 22 21.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.30005 3.58008L5.43005 3.82007C8.17005 9.03007 8.12005 15.25 5.33005 20.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.6701 20.41C15.8901 15.25 15.8401 9.03007 18.5701 3.82007L18.7001 3.58008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

GeminiLinear.displayName = 'GeminiLinear';
export default GeminiLinear;
