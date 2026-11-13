import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListCrossMinimalisticTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M20 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M11 11L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M11 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M15 16L20 11M20 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ListCrossMinimalisticTwotone.displayName = 'ListCrossMinimalisticTwotone';
export default ListCrossMinimalisticTwotone;
