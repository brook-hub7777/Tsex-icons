import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.7" d="M15 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.4" d="M9 17H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ListTwotone.displayName = 'ListTwotone';
export default ListTwotone;
