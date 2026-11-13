import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowsActionExportBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 20C7.58172 20 4 16.4183 4 12M20 12C20 14.5264 18.8289 16.7792 17 18.2454" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 14L12 4M12 4L15 7M12 4L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsActionExportBroken.displayName = 'ArrowsActionExportBroken';
export default ArrowsActionExportBroken;
