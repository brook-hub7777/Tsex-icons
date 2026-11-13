import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SadCircleTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
  <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
  <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
  </svg>
));

SadCircleTwotone.displayName = 'SadCircleTwotone';
export default SadCircleTwotone;
