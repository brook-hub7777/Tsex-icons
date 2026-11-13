import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const LampOnBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19.0694 6.27018C21.1594 10.4702 18.9594 14.9302 15.7294 16.8802V18.0402C15.7294 18.3302 15.8394 19.0002 14.7694 19.0002H9.25938C8.15938 19.0002 8.29938 18.5702 8.29938 18.0402V16.8802C5.99938 15.4902 4.10938 12.7802 4.10938 9.90018C4.10938 4.95018 8.65938 1.07018 13.7994 2.19018C14.5494 2.36018 15.2794 2.63018 15.9394 3.00018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LampOnBroken.displayName = 'LampOnBroken';
export default LampOnBroken;
