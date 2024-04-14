import React from 'react';
import type { FC, MouseEvent } from 'react';

import { cnBoardForIcons } from './BoardForIcons.classname';
import { Icon } from '../Icon/Icon';
import type { FormData } from '../../App';

import './BoardForIcons.css';

type BoardForIconsProps = {
  onClick: (event: MouseEvent) => void;
  iconsList: FormData[];
};

const BoardForIcons: FC<BoardForIconsProps> = ({ onClick, iconsList }) => {
  return (
    <div className={cnBoardForIcons()} onClick={onClick}>
      {iconsList.length > 0 &&
        iconsList.map((icon, index) => (
          <Icon
            color={icon.color}
            iconSize={icon.iconSize + 'px'}
            iconType={icon.iconType}
            key={'icon' + index}
            leftPosition={icon.leftPosition}
            topPosition={icon.topPosition}
          />
        ))}
    </div>
  );
};

export { BoardForIcons };
