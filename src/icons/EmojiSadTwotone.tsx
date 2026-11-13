import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const EmojiSadTwotone = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.34" d="M7 8.75C8 7.75 9.63 7.75 10.64 8.75" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.34" d="M13.3594 8.75C14.3594 7.75 15.9894 7.75 16.9994 8.75" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path opacity="0.34" d="M8.4 17.6998H15.6C16.1 17.6998 16.5 17.2998 16.5 16.7998C16.5 14.3098 14.49 12.2998 12 12.2998C9.51 12.2998 7.5 14.3098 7.5 16.7998C7.5 17.2998 7.9 17.6998 8.4 17.6998Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

EmojiSadTwotone.displayName = 'EmojiSadTwotone';
export default EmojiSadTwotone;
