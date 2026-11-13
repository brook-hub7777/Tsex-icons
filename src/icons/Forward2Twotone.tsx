import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Forward2Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M14.5 17L19.5 12L14.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.5" d="M19.5 12L9.5 12C7.83333 12 4.5 11 4.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

Forward2Twotone.displayName = 'Forward2Twotone';
export default Forward2Twotone;
