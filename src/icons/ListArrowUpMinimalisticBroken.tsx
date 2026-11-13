import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListArrowUpMinimalisticBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M11 11L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M15 11.5L17.5 9M17.5 9L20 11.5M17.5 9V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20 6L9.5 6M3 6L5.25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ListArrowUpMinimalisticBroken.displayName = 'ListArrowUpMinimalisticBroken';
export default ListArrowUpMinimalisticBroken;
