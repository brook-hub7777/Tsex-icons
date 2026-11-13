import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GoogleDriveOutline = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="m8.8744 2.1585 6.2511 -0.0041m-6.2511 0.0041L1.0605 15.286M8.8744 2.1585l10.162 19.6871M15.1255 2.1544l7.814 13.1316m-7.814 -13.1316L4.9713 21.8456m14.0651 0H4.9713m14.0651 0 3.9031 -6.5596M4.9713 21.8456 1.0605 15.286m21.879 0H1.0605" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
  </svg>
));

GoogleDriveOutline.displayName = 'GoogleDriveOutline';
export default GoogleDriveOutline;
