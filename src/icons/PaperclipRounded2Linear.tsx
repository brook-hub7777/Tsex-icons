import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PaperclipRounded2Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12.9502 11.0087L10.0104 13.9351C8.38687 15.5513 8.38687 18.1716 10.0104 19.7879C11.634 21.4041 14.2664 21.4041 15.8899 19.7879L19.5646 16.1299C22.8118 12.8975 22.8118 7.6567 19.5646 4.4243C16.3175 1.1919 11.0528 1.1919 7.80563 4.4243L4.13095 8.08229C1.28968 10.9106 1.28968 15.4963 4.13095 18.3247" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

PaperclipRounded2Linear.displayName = 'PaperclipRounded2Linear';
export default PaperclipRounded2Linear;
