import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListDownBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M10 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M14 15L17.5 18L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 6L13.5 6M20 6L17.75 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M20 10L9.5 10M3 10H5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ListDownBroken.displayName = 'ListDownBroken';
export default ListDownBroken;
