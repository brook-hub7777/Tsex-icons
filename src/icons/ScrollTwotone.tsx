import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ScrollTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M9.60008 8.97021L7.11008 11.4602C6.82008 11.7502 6.82008 12.2402 7.11008 12.5302L9.60008 15.0202" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M14.4004 8.97021L16.8904 11.4602C17.1804 11.7502 17.1804 12.2402 16.8904 12.5302L14.4004 15.0202" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ScrollTwotone.displayName = 'ScrollTwotone';
export default ScrollTwotone;
