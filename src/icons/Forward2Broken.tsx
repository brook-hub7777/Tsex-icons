import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Forward2Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19.5 12L14.5 17M19.5 12L14.5 7M19.5 12L13 12M9.5 12C7.83333 12 4.5 11 4.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Forward2Broken.displayName = 'Forward2Broken';
export default Forward2Broken;
