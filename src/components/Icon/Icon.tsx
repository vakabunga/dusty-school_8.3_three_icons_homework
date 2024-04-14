import React from 'react';
import type { FC, MouseEvent } from 'react';

import { cnIcon } from './Icon.classname';

import './Icon.css';

export type IconProps = {
  color: string;
  iconSize: string;
  iconType: string;
  leftPosition?: string;
  topPosition?: string;
  handleClick?: (event: MouseEvent) => void;
};

const Icon: FC<IconProps> = ({
  color,
  iconSize,
  iconType,
  leftPosition,
  topPosition,
  handleClick,
}) => {
  return (
    <i
      className={cnIcon(null, [iconType])}
      style={{
        color: color,
        fontSize: iconSize,
        left: leftPosition,
        top: topPosition,
      }}
      onClick={handleClick}
    />
  );
};

export { Icon };
