import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SkipNextLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M16.6598 9.35258C18.4467 10.5065 18.4467 13.4935 16.6598 14.6474L5.87083 21.6145C4.13419 22.736 2 21.2763 2 18.9671L2 5.0329C2 2.72368 4.13419 1.26402 5.87083 2.38548L16.6598 9.35258Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M22 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

SkipNextLinear.displayName = 'SkipNextLinear';
export default SkipNextLinear;
