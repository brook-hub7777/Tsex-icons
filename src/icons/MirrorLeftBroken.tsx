import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MirrorLeftBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3 12C3 16.2426 3 18.364 4.31802 19.682C5.63604 21 7.75736 21 12 21M12 3C7.75736 3 5.63604 3 4.31802 4.31802C3.50241 5.13363 3.19151 6.25685 3.073 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M11 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2.5 3"/>
  <path d="M12 22L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MirrorLeftBroken.displayName = 'MirrorLeftBroken';
export default MirrorLeftBroken;
