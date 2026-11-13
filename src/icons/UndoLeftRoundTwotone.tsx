import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UndoLeftRoundTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M7 4L4 7L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.5" d="M4 7H15C17.7614 7 20 9.23857 20 12C20 14.7614 17.7614 17 15 17H8.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

UndoLeftRoundTwotone.displayName = 'UndoLeftRoundTwotone';
export default UndoLeftRoundTwotone;
