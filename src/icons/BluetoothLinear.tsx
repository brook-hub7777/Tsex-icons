import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BluetoothLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M5.64014 18.64L17.9901 7.31998C18.5001 6.84998 18.4901 6.09997 17.9501 5.64997L14.1001 2.43998C13.1001 1.60998 12.2801 1.98998 12.2801 3.28998V20.71C12.2801 22.01 13.1001 22.39 14.1001 21.56L17.9501 18.35C18.4901 17.9 18.5001 17.15 17.9901 16.68L5.64014 5.35996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BluetoothLinear.displayName = 'BluetoothLinear';
export default BluetoothLinear;
