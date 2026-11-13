import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LampTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M5.78962 14.69H18.2096C19.8696 14.69 20.8696 13.38 20.4396 11.78L18.2396 3.71C17.9796 2.77 16.9696 2 16.0096 2H7.98962C7.02962 2 6.01962 2.77 5.76962 3.7L3.56962 11.77C3.12962 13.38 4.12962 14.69 5.78962 14.69Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <g opacity="0.4">
    <path d="M12 15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

LampTwotone.displayName = 'LampTwotone';
export default LampTwotone;
