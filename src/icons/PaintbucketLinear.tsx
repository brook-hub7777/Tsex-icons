import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PaintbucketLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3.77 15.56L7.23 19.02C9.66 21.45 10.49 21.41 12.89 19.02L18.46 13.45C20.4 11.51 20.89 10.22 18.46 7.78996L15 4.32996C12.41 1.73996 11.28 2.38996 9.34 4.32996L3.77 9.89996C1.38 12.3 1.18 12.97 3.77 15.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.2 16.79L18.54 17.88C17.61 19.43 18.33 20.7 20.14 20.7C21.95 20.7 22.67 19.43 21.74 17.88L21.08 16.79C20.56 15.93 19.71 15.93 19.2 16.79Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 12.2401C7.56 10.7301 13.42 10.6801 19 12.1101L19.5 12.2401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PaintbucketLinear.displayName = 'PaintbucketLinear';
export default PaintbucketLinear;
