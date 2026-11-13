import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Widget3Broken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M21.5 6.5C21.5 4.29086 19.7091 2.5 17.5 2.5C15.2909 2.5 13.5 4.29086 13.5 6.5C13.5 8.70914 15.2909 10.5 17.5 10.5C19.7091 10.5 21.5 8.70914 21.5 6.5Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M10.5 17.5C10.5 15.2909 8.70914 13.5 6.5 13.5C4.29086 13.5 2.5 15.2909 2.5 17.5C2.5 19.7091 4.29086 21.5 6.5 21.5C8.70914 21.5 10.5 19.7091 10.5 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M2.66789 5.34961C2.55868 5.71394 2.5 6.10012 2.5 6.5C2.5 8.70914 4.29086 10.5 6.5 10.5C8.70914 10.5 10.5 8.70914 10.5 6.5C10.5 4.29086 8.70914 2.5 6.5 2.5C6.10012 2.5 5.71394 2.55868 5.34961 2.66789" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M21.8321 19.1504C21.9413 18.7861 22 18.3999 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22C18.3999 22 18.7861 21.9413 19.1504 21.8321" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

Widget3Broken.displayName = 'Widget3Broken';
export default Widget3Broken;
