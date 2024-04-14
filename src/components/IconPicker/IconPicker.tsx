import React from 'react';
import type { ChangeEvent, FC } from 'react';

import { cnIconPicker } from './IconPicker.classname';
import { FONTAWESOME } from '../../constants/constants';
import { Icon } from '../Icon/Icon';

import './IconPicker.css';

const iconPickerStyle = {
  color: '#000',
  iconSize: '16px',
};

type IconPickerProps = {
  iconType?: string;
  handleIconTypeChange: (value: string) => void;
};

const IconPicker: FC<IconPickerProps> = ({ handleIconTypeChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleIconTypeChange(event.target.value);
  };

  return (
    <div className={cnIconPicker()}>
      {FONTAWESOME.map((icon: string, index) => (
        <React.Fragment key={index}>
          <input
            className={cnIconPicker('IconInput')}
            type="radio"
            name="icon"
            value={icon}
            id={index.toString()}
            onChange={handleChange}
          />
          <label className={cnIconPicker('IconLabel')} htmlFor={index.toString()}>
            <Icon
              color={iconPickerStyle.color}
              iconSize={iconPickerStyle.iconSize}
              iconType={icon}
            />
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export { IconPicker };
