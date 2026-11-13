import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FacemaskCircleTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M16.5 20.4996L17 14.9996L13.857 13.7424C12.6649 13.2656 11.3351 13.2656 10.143 13.7424L7 14.9996L7.5 20.4996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7 15L2.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 15L21.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
  <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
  </svg>
));

FacemaskCircleTwotone.displayName = 'FacemaskCircleTwotone';
export default FacemaskCircleTwotone;
