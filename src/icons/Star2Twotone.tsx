import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Star2Twotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 20V17.6M12 6.4V4M20 12H17.6M6.4 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M17.6569 6.34277L15.9599 8.03983M8.04029 15.9594L6.34323 17.6565M6.34302 6.34295L8.04007 8.04001M15.9597 15.9596L17.6567 17.6567" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

Star2Twotone.displayName = 'Star2Twotone';
export default Star2Twotone;
