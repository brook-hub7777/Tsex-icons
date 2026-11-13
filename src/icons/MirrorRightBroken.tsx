import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MirrorRightBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 21C16.2426 21 18.364 21 19.682 19.682C21 18.364 21 16.2426 21 12M12 3C16.2426 3 18.364 3 19.682 4.31802C20.4976 5.13363 20.8085 6.25685 20.927 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M13 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15L3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2.5 3"/>
  <path d="M12 22L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

MirrorRightBroken.displayName = 'MirrorRightBroken';
export default MirrorRightBroken;
