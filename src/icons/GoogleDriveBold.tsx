import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GoogleDriveBold = forwardRef<SVGSVGElement, IconProps>(({
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
    <path fill="currentColor" d="M15.053 2.108A2.498 2.498 0 0 0 14.328 2H9.672c-0.25 0 -0.493 0.037 -0.725 0.108L12 7.069l3.053 -4.961Zm-7.346 0.847c-0.08 0.101 -0.152 0.21 -0.216 0.323l-5.91 10.553a2.5 2.5 0 0 0 -0.186 0.419h6.186l3.538 -5.75 -3.412 -5.545ZM1.362 15.75c0.041 0.144 0.096 0.285 0.164 0.421L3.5 20.118c0.068 0.135 0.147 0.263 0.235 0.381l2.923 -4.749H1.362Zm3.595 5.626a2.5 2.5 0 0 0 0.779 0.124h12.528c0.269 0 0.531 -0.043 0.779 -0.124L15.58 15.75H8.419l-3.462 5.626Zm15.308 -0.877a2.58 2.58 0 0 0 0.235 -0.381l1.974 -3.947a2.43 2.43 0 0 0 0.164 -0.421h-5.296l2.923 4.75Zm2.34 -6.249h-6.186L12.881 8.5l3.412 -5.545c0.08 0.101 0.152 0.21 0.216 0.323l5.91 10.553c0.075 0.135 0.137 0.275 0.186 0.419Z" clipRule="evenodd" strokeWidth="1"/>
  </svg>
));

GoogleDriveBold.displayName = 'GoogleDriveBold';
export default GoogleDriveBold;
