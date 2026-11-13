import React from 'react';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Icon size in pixels or CSS string
   * @default 24
   */
  size?: number | string;

  /**
   * Icon color
   * @default "#292D32"
   */
  color?: string;

  /**
   * SVG fill attribute
   * @default "none"
   */
  fill?: string;

  /**
   * Additional CSS class names
   * @default ""
   */
  className?: string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
