import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SortVerticalTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SortVerticalTwotone.displayName = 'SortVerticalTwotone';
export default SortVerticalTwotone;
