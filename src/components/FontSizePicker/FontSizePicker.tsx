import React from 'react';
import type { ChangeEvent, FC} from 'react';

import { cnFontSizePicker } from './FontSizePicker.classname';

import './FontSizePicker.css';

type handleIconSizeChange = {
  iconSize: number;
  handleIconSizeChange: (value: number) => void;
}

const FontSizePicker: FC<handleIconSizeChange> = ({iconSize, handleIconSizeChange}) => {

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleIconSizeChange(Number(event.target.value));
  }

  return (
    <div className={cnFontSizePicker()}>
      <label className={cnFontSizePicker('Label')} htmlFor="textSize">Размер иконки</label>
      <input type="number" id="textSize" name="textSize" value={iconSize} onChange={handleSizeChange}/>
    </div>
  );
};

export { FontSizePicker };
