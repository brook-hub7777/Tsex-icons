import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RepeateOneTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M14.0002 3L16.4402 5.34003L8.49023 5.32001C4.92023 5.32001 1.99023 8.25003 1.99023 11.84C1.99023 13.63 2.72024 15.26 3.90024 16.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.0005 21.0001L7.56055 18.66L15.5106 18.6801C19.0806 18.6801 22.0106 15.75 22.0106 12.16C22.0106 10.37 21.2806 8.74006 20.1006 7.56006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.4" d="M12.25 14.67V9.33008L10.75 11.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

RepeateOneTwotone.displayName = 'RepeateOneTwotone';
export default RepeateOneTwotone;
