import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const DocumentCloudBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M2 13V15C2 20 4 22 9 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14 2H9C4 2 2 4 2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.7605 18.2598C11.4105 18.4298 11.4105 21.8298 13.7605 21.9998H19.3205C19.9905 21.9998 20.6505 21.7498 21.1405 21.2998C22.7905 19.8598 21.9105 16.9798 19.7405 16.7098C18.9605 12.0198 12.1805 13.7998 13.7805 18.2698" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DocumentCloudBroken.displayName = 'DocumentCloudBroken';
export default DocumentCloudBroken;
