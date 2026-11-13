import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RocketBold = forwardRef<SVGSVGElement, IconProps>(({
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
    <g transform="rotate(45 12 12) translate(12 12) scale(0.75) translate(-12 -12)">
    <path d="M12 1C7 1 5 10 5 15C5 18 6 21 6 21H18C18 21 19 18 19 15C19 10 17 1 12 1Z" fill="currentColor"/>
    <path d="M5.2 10H18.8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 15H2L4 21H6.5" fill="currentColor"/>
    <path d="M19 15H22L20 21H17.5" fill="currentColor"/>
    <circle cx="12" cy="15.5" r="2.5" fill="white" fillOpacity="0.4"/>
    <path d="M8 21L9 23H15L16 21H8Z" fill="currentColor"/>
    <path d="M9.5 23C9.5 25 10.5 28 12 28C13.5 28 14.5 25 14.5 23H9.5Z" fill="currentColor"/>
  </g>
  </svg>
));

RocketBold.displayName = 'RocketBold';
export default RocketBold;
