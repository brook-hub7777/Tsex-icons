import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const VideoMicrophone2Linear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M13.5 8L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M13.5 11L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7 8L9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7 11L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

VideoMicrophone2Linear.displayName = 'VideoMicrophone2Linear';
export default VideoMicrophone2Linear;
