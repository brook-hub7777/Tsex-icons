import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Link21Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M13.0598 10.9399C15.3098 13.1899 15.3098 16.8299 13.0598 19.0699C10.8098 21.3099 7.16985 21.3199 4.92985 19.0699C2.68985 16.8199 2.67985 13.1799 4.92985 10.9399" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M10.5909 13.4099C8.25094 11.0699 8.25094 7.26988 10.5909 4.91988C12.9309 2.56988 16.7309 2.57988 19.0809 4.91988C21.4309 7.25988 21.4209 11.0599 19.0809 13.4099" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Link21Twotone.displayName = 'Link21Twotone';
export default Link21Twotone;
