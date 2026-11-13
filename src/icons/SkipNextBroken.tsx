import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SkipNextBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M2 11L2 18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87084 2.38548C4.13419 1.26402 2 2.72368 2 5.03289V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M22 5V12M22 16V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

SkipNextBroken.displayName = 'SkipNextBroken';
export default SkipNextBroken;
