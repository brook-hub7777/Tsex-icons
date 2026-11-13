import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Wind2Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path opacity="0.4" d="M2 13.1002L4.5 11.6002C6.04 10.6802 7.96 10.6802 9.5 11.6002C11.04 12.5202 12.96 12.5202 14.5 11.6002C16.04 10.6802 17.96 10.6802 19.5 11.6002L22 13.1002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 3.8999L4.5 5.3999C6.04 6.3199 7.96 6.3199 9.5 5.3999C11.04 4.4799 12.96 4.4799 14.5 5.3999C16.04 6.3199 17.96 6.3199 19.5 5.3999L22 3.8999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 20.1002L4.5 18.6002C6.04 17.6802 7.96 17.6802 9.5 18.6002C11.04 19.5202 12.96 19.5202 14.5 18.6002C16.04 17.6802 17.96 17.6802 19.5 18.6002L22 20.1002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Wind2Twotone.displayName = 'Wind2Twotone';
export default Wind2Twotone;
