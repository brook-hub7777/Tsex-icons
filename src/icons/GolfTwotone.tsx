import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GolfTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <ellipse opacity="0.5" cx="12" cy="18.5" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M12 18V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M11.9998 3.5L17.4221 6.21114C18.9832 6.99169 19.7638 7.38196 19.7638 8C19.7638 8.61804 18.9832 9.00831 17.4221 9.78886L11.9998 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

GolfTwotone.displayName = 'GolfTwotone';
export default GolfTwotone;
