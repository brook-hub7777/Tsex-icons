import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PremiumRightArrow = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = '#292D32',
  fill = 'currentColor',
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
    <path d="M5 12h14"/>
  <path d="m12 5 7 7-7 7"/>
  </svg>
));

PremiumRightArrow.displayName = 'PremiumRightArrow';
export default PremiumRightArrow;
