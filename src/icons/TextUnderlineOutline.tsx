import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TextUnderlineOutline = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19 21.75H5C4.59 21.75 4.25 21.41 4.25 21C4.25 20.59 4.59 20.25 5 20.25H19C19.41 20.25 19.75 20.59 19.75 21C19.75 21.41 19.41 21.75 19 21.75Z" fill="currentColor"/>
  <path d="M12 17.75C7.73 17.75 4.25 14.27 4.25 10V3C4.25 2.59 4.59 2.25 5 2.25C5.41 2.25 5.75 2.59 5.75 3V10C5.75 13.45 8.55 16.25 12 16.25C15.45 16.25 18.25 13.45 18.25 10V3C18.25 2.59 18.59 2.25 19 2.25C19.41 2.25 19.75 2.59 19.75 3V10C19.75 14.27 16.27 17.75 12 17.75Z" fill="currentColor"/>
  </svg>
));

TextUnderlineOutline.displayName = 'TextUnderlineOutline';
export default TextUnderlineOutline;
