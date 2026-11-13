import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const VideoRecordBold = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = '#292D32',
  fill = 'currentColor',
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
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
  </svg>
));

VideoRecordBold.displayName = 'VideoRecordBold';
export default VideoRecordBold;
