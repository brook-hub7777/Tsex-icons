import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Box1Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3.17004 7.43994L12 12.5499L20.77 7.46994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.93001 2.48004L4.59001 5.44004C3.38001 6.11004 2.39001 7.79004 2.39001 9.17004V14.82C2.39001 16.2 3.38001 17.88 4.59001 18.55L9.93001 21.52C11.07 22.15 12.94 22.15 14.08 21.52L19.42 18.55C20.63 17.88 21.62 16.2 21.62 14.82V9.17004C21.62 7.79004 20.63 6.11004 19.42 5.44004L14.08 2.47004C12.93 1.84004 11.07 1.84004 9.93001 2.48004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Box1Linear.displayName = 'Box1Linear';
export default Box1Linear;
