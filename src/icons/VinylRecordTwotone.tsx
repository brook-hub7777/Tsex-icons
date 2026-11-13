import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const VinylRecordTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle opacity="0.5" cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
  <path opacity="0.5" d="M4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M7.40381 16.5967C4.8654 14.0583 4.8654 9.94271 7.40381 7.4043M16.5962 7.4043C19.1346 9.94271 19.1346 14.0583 16.5962 16.5967" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

VinylRecordTwotone.displayName = 'VinylRecordTwotone';
export default VinylRecordTwotone;
