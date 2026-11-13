import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListCrossMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M11 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M15 16L20 11M20 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11 11L7 11M3 11H4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ListCrossMinimalisticBroken.displayName = 'ListCrossMinimalisticBroken';
export default ListCrossMinimalisticBroken;
