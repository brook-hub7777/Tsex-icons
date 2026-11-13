import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PresentationGraphTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M2 2H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M9 10.5L10.2929 9.20711C10.6262 8.87377 10.7929 8.70711 11 8.70711C11.2071 8.70711 11.3738 8.87377 11.7071 9.20711L12.2929 9.79289C12.6262 10.1262 12.7929 10.2929 13 10.2929C13.2071 10.2929 13.3738 10.1262 13.7071 9.79289L15 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path opacity="0.5" d="M12 21L12 17M12 21L10 22M12 21L14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M20 2V10.5C20 13.5641 20 15.0962 18.9958 16.0481C17.9916 17 16.3753 17 13.1429 17H10.8571C7.62465 17 6.00841 17 5.00421 16.0481C4 15.0962 4 13.5641 4 10.5V2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

PresentationGraphTwotone.displayName = 'PresentationGraphTwotone';
export default PresentationGraphTwotone;
