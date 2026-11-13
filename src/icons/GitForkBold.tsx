import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GitForkBold = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="128" cy="188" r="28" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="188" cy="68" r="28" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="68" cy="68" r="28" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M68 96v8a24 24 0 0 0 24 24h72a24 24 0 0 0 24 -24v-8" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="128" y1="128" x2="128" y2="160" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

GitForkBold.displayName = 'GitForkBold';
export default GitForkBold;
