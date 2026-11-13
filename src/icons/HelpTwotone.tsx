import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const HelpTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M15 9L19 5" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M5 19L9 15" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M9 9L5 5" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M19 19L15 15" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

HelpTwotone.displayName = 'HelpTwotone';
export default HelpTwotone;
