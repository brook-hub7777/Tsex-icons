import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TextFormattingTextItalicBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3 22H15M9 2H21M9 22L11.4 14M15 2L12.6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TextFormattingTextItalicBroken.displayName = 'TextFormattingTextItalicBroken';
export default TextFormattingTextItalicBroken;
