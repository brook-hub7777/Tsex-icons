import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const AltArrowRightBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M9 5L11 7.33333M9 19L15 12L13.5 10.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AltArrowRightBroken.displayName = 'AltArrowRightBroken';
export default AltArrowRightBroken;
