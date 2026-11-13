import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PersonalcardBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M2 8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21H7C3 21 2 20 2 16V12.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14 8H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.49945 11.2899C9.49909 11.2899 10.3095 10.4796 10.3095 9.47992C10.3095 8.48029 9.49909 7.66992 8.49945 7.66992C7.49982 7.66992 6.68945 8.48029 6.68945 9.47992C6.68945 10.4796 7.49982 11.2899 8.49945 11.2899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PersonalcardBroken.displayName = 'PersonalcardBroken';
export default PersonalcardBroken;
