import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TuningBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M14 14.5C14 12.8431 15.3431 11.5 17 11.5C18.6569 11.5 20 12.8431 20 14.5C20 16.1569 18.6569 17.5 17 17.5C15.3431 17.5 14 16.1569 14 14.5Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M4 9.5C4 11.1569 5.34315 12.5 7 12.5C8.65685 12.5 10 11.1569 10 9.5C10 7.84315 8.65685 6.5 7 6.5C5.34315 6.5 4 7.84315 4 9.5Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M7.00001 13L7 18M7.00001 21.0001L7.00001 22.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 11.0001L17 6.0001M17 3.00002L17 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 22L17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7 2L7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

TuningBroken.displayName = 'TuningBroken';
export default TuningBroken;
