import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MicrophoneLargeBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M18 8V13C18 16.3137 15.3137 19 12 19C8.68629 19 6 16.3137 6 13V8C6 4.68629 8.68629 2 12 2C13.777 2 15.3736 2.7725 16.4722 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 6.5C10 6.5 10.4727 6 12 6C13.5273 6 14 6.5 14 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M10 9.5C10 9.5 10.4727 9 12 9C13.5273 9 14 9.5 14 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M21 11V13C21 16.5337 18.9634 19.5918 16 21.0645M3 11V13C3 17.9706 7.02944 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MicrophoneLargeBroken.displayName = 'MicrophoneLargeBroken';
export default MicrophoneLargeBroken;
