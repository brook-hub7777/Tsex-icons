import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TagCrossLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M10.2801 20.25H17.0001C19.7601 20.25 22.0001 18.01 22.0001 15.25V8.75C22.0001 5.99 19.7601 3.75 17.0001 3.75H10.2801C8.87005 3.75 7.53005 4.34 6.58005 5.39L3.05005 9.27C1.64005 10.82 1.64005 13.18 3.05005 14.73L6.58005 18.61C7.53005 19.66 8.87005 20.25 10.2801 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.0001 14.47L11.0601 9.53003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M11.0601 14.47L16.0001 9.53003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TagCrossLinear.displayName = 'TagCrossLinear';
export default TagCrossLinear;
