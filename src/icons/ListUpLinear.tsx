import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListUpLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M14 18L17.5 15L21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M21 10L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M11 14L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M11 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ListUpLinear.displayName = 'ListUpLinear';
export default ListUpLinear;
