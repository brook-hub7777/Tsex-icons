import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TextFormattingTextUnderlineBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M4 21H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 3V9C4 11.5264 5.17108 13.7792 7 15.2454M20 3V9C20 13.4183 16.4183 17 12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TextFormattingTextUnderlineBroken.displayName = 'TextFormattingTextUnderlineBroken';
export default TextFormattingTextUnderlineBroken;
