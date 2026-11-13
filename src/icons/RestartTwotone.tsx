import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RestartTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <g clipPath="url(#clip0_1276_6232)">
    <path opacity="0.5" d="M19.7285 10.9286C20.4412 13.5975 19.7507 16.5633 17.6569 18.6571C14.5327 21.7813 9.46734 21.7813 6.34315 18.6571C3.21895 15.5329 3.21895 10.4676 6.34315 7.34338C9.46734 4.21918 14.5327 4.21918 17.6569 7.34338L18.364 8.05048" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.1214 8.05026H18.364V3.80762" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1276_6232">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
  </svg>
));

RestartTwotone.displayName = 'RestartTwotone';
export default RestartTwotone;
