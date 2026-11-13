import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UndoRightRoundBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20 7H9C6.23857 7 4 9.23857 3.99999 12C3.99999 14.7614 6.23857 17 8.99999 17M20 7L17 4M20 7L17 10M16 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

UndoRightRoundBroken.displayName = 'UndoRightRoundBroken';
export default UndoRightRoundBroken;
