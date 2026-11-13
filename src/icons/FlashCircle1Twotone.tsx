import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FlashCircle1Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.34" d="M8.68055 12.7201H10.4205V16.7701C10.4205 17.3701 11.1605 17.6501 11.5605 17.2001L15.8205 12.3601C16.1905 11.9401 15.8905 11.2801 15.3305 11.2801H13.5905V7.23008C13.5905 6.63008 12.8505 6.35008 12.4505 6.80008L8.19055 11.6401C7.82055 12.0601 8.12055 12.7201 8.68055 12.7201Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FlashCircle1Twotone.displayName = 'FlashCircle1Twotone';
export default FlashCircle1Twotone;
