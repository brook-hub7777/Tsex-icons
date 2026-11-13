import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Lamp1Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M20.7807 13.6502V18.5902H3.2207V13.6502C3.2207 8.83018 7.1207 4.93018 11.9407 4.93018H12.0607C16.8807 4.93018 20.7807 8.83018 20.7807 13.6502Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M12 2V4.92999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M15.6496 18.5898C15.5196 20.4998 13.9296 21.9998 11.9996 21.9998C10.0696 21.9998 8.47961 20.4998 8.34961 18.5898H15.6496Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lamp1Twotone.displayName = 'Lamp1Twotone';
export default Lamp1Twotone;
