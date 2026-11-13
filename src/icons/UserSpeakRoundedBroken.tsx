import React, { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UserSpeakRoundedBroken = forwardRef<SVGSVGElement, IconProps>(({
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
    <circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M13 20.6151C12.0907 20.8619 11.0736 21 10 21C6.13401 21 3 19.2091 3 17C3 14.7909 6.13401 13 10 13C13.866 13 17 14.7909 17 17C17 17.3453 16.9234 17.6804 16.7795 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
));

UserSpeakRoundedBroken.displayName = 'UserSpeakRoundedBroken';
export default UserSpeakRoundedBroken;
