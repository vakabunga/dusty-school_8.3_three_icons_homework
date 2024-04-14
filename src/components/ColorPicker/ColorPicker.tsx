import React from 'react';
import type { ChangeEvent, FC } from 'react';

import { cnColorPicker } from './ColorPicker.classname';

import './ColorPicker.css';

type ColorPickerProps = {
  color: string;
  handleIconColorChange: (value: string) => void;
};

const ColorPicker: FC<ColorPickerProps> = ({ color, handleIconColorChange }) => {

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleIconColorChange(event.target.value);
  }

  return <input className={cnColorPicker()} type="color" value={color} onChange={handleColorChange}/>;
};

export { ColorPicker };
