import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Lamp1Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20.78 13.6499V18.5899H3.21997V13.6499C3.21997 8.82993 7.11997 4.92993 11.94 4.92993H12.06C16.88 4.92993 20.78 8.82993 20.78 13.6499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 2V4.92999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.65 18.59C15.52 20.5 13.93 22 12 22C10.07 22 8.47998 20.5 8.34998 18.59H15.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lamp1Linear.displayName = 'Lamp1Linear';
export default Lamp1Linear;
