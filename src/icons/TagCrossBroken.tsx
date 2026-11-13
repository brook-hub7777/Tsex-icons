import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TagCrossBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12.9197 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.65 8.86969 20.25 10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.0005 14.47L11.0605 9.53003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M15.2109 10.32L16.0009 9.53003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M11.0605 14.4699L13.3405 12.1799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TagCrossBroken.displayName = 'TagCrossBroken';
export default TagCrossBroken;
