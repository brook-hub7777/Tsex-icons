import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListCheckBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M14 16L16.1 18.5L20 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M20 10L9.5 10M3 10H5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ListCheckBroken.displayName = 'ListCheckBroken';
export default ListCheckBroken;
