import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TuningSquareTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 14 16)" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M8 14V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M16 10V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M8 5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M16 19V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TuningSquareTwotone.displayName = 'TuningSquareTwotone';
export default TuningSquareTwotone;
