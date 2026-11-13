import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TextFormattingLinkCircleBroken = forwardRef<SVGSVGElement, IconProps>(({
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
  <path d="M10 12C10 8.68629 12.6863 6 16 6M16 18C19.3137 18 22 15.3137 22 12C22 10.7733 21.6318 9.63251 21 8.68221" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TextFormattingLinkCircleBroken.displayName = 'TextFormattingLinkCircleBroken';
export default TextFormattingLinkCircleBroken;
