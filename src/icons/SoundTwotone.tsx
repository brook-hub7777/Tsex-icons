import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SoundTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M3 8.25V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M7.5 5.75V18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 3.25V20.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M16.5 5.75V18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 8.25V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SoundTwotone.displayName = 'SoundTwotone';
export default SoundTwotone;
