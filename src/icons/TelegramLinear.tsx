import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TelegramLinear = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M12 2C6.48 2 2 6.02 2 11.2c0 5.18 4.48 9.2 10 9.2s10-4.02 10-9.2C22 6.02 17.52 2 12 2Zm4.6 6.1-1.67 7.87c-.12.56-.46.7-.94.44l-2.6-1.86-1.26 1.2c-.14.14-.26.26-.54.26l.19-2.63 4.78-4.21c.21-.18-.05-.28-.33-.1L8.32 12.2l-2.52-.77c-.55-.17-.56-.54.11-.8l9.87-3.76c.46-.17.86.1.72.73Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
));

TelegramLinear.displayName = 'TelegramLinear';
export default TelegramLinear;
