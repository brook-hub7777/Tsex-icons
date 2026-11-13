import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RotateLeftBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20.6701 13.3299C20.6701 18.1199 16.7901 21.9999 12.0001 21.9999C7.21008 21.9999 3.33008 18.1199 3.33008 13.3299C3.33008 11.5499 3.87008 9.8899 4.79008 8.5099M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C15.2101 4.6499 18.0201 6.3999 19.5101 8.9899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.86914 5.32L10.7591 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.86914 5.32007L11.2391 7.78007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RotateLeftBroken.displayName = 'RotateLeftBroken';
export default RotateLeftBroken;
