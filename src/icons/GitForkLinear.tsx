import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GitForkLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <circle cx="17" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

GitForkLinear.displayName = 'GitForkLinear';
export default GitForkLinear;
