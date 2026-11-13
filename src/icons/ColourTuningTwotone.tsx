import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ColourTuningTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.5" d="M2 12H9.5M22 12H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M20.0002 15.6843C20.0002 19 17.7345 22 16.0002 22C13.7315 22 12.0723 18.8421 12.0723 12C12.0723 5.15794 10.4128 1.99988 8.14404 1.99988C6.40978 1.99988 4.14404 4.99988 4.14404 8.31567" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

ColourTuningTwotone.displayName = 'ColourTuningTwotone';
export default ColourTuningTwotone;
