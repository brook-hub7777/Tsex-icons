import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SoundwaveTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 4L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M16 7L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M8 7L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M20 11L20 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M4 11L4 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

SoundwaveTwotone.displayName = 'SoundwaveTwotone';
export default SoundwaveTwotone;
