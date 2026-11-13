import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ReorderBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19 10L11 10M5 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M5 18H13M19 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19 14L5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M19 6L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ReorderBroken.displayName = 'ReorderBroken';
export default ReorderBroken;
