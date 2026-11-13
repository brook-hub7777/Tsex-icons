import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PlayCircleTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M8.74023 12.2301V10.5601C8.74023 8.48012 10.2102 7.63012 12.0102 8.67012L13.4602 9.51012L14.9102 10.3501C16.7102 11.3901 16.7102 13.0901 14.9102 14.1301L13.4602 14.9701L12.0102 15.8101C10.2102 16.8501 8.74023 16.0001 8.74023 13.9201V12.2301Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PlayCircleTwotone.displayName = 'PlayCircleTwotone';
export default PlayCircleTwotone;
