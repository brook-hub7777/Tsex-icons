import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrowRight3Bulk = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = '#292D32',
  fill = 'currentColor',
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
    <path opacity="0.4" d="M13.2297 8.52002L8.17969 12.31V17.92C8.17969 18.88 9.33969 19.36 10.0197 18.68L15.1997 13.5C16.0297 12.67 16.0297 11.32 15.1997 10.49L13.2297 8.52002Z" fill="currentColor"/>
  <path d="M8.17969 6.07993V12.3099L13.2297 8.51993L10.0197 5.30993C9.33969 4.63993 8.17969 5.11993 8.17969 6.07993Z" fill="currentColor"/>
  </svg>
));

ArrowRight3Bulk.displayName = 'ArrowRight3Bulk';
export default ArrowRight3Bulk;
