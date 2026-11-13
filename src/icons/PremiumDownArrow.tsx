import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PremiumDownArrow = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="m6 9 6 6 6-6"/>
  </svg>
));

PremiumDownArrow.displayName = 'PremiumDownArrow';
export default PremiumDownArrow;
