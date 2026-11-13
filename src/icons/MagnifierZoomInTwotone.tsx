import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MagnifierZoomInTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" opacity="0.5" strokeWidth="1.5"/>
  <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MagnifierZoomInTwotone.displayName = 'MagnifierZoomInTwotone';
export default MagnifierZoomInTwotone;
