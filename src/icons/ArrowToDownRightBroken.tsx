import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowToDownRightBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 19.5L7 14.5M12 19.5L17 14.5M12 19.5L12 13M12 9.5C12 7.83333 13 4.5 17 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowToDownRightBroken.displayName = 'ArrowToDownRightBroken';
export default ArrowToDownRightBroken;
