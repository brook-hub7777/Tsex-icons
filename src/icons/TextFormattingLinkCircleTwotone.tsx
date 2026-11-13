import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TextFormattingLinkCircleTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M10 12C10 8.68629 12.6863 6 16 6C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TextFormattingLinkCircleTwotone.displayName = 'TextFormattingLinkCircleTwotone';
export default TextFormattingLinkCircleTwotone;
