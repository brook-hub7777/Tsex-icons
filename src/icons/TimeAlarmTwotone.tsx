import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TimeAlarmTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle opacity="0.5" cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M12 9V13L14.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.5 4.5L7.50002 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.5 4.5L16.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TimeAlarmTwotone.displayName = 'TimeAlarmTwotone';
export default TimeAlarmTwotone;
