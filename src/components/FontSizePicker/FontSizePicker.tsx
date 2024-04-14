import React from 'react';
import type { ChangeEvent, FC} from 'react';

import { cnFontSizePicker } from './FontSizePicker.classname';

import './FontSizePicker.css';

type handleIconSizeChangeProps = {
  iconSize: number;
  onIconSizeChange: (value: number) => void;
}

const FontSizePicker: FC<handleIconSizeChangeProps> = ({iconSize, onIconSizeChange}) => {

  const handleIconSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onIconSizeChange(Number(event.target.value));
  }

  return (
    <div className={cnFontSizePicker()}>
      <label className={cnFontSizePicker('Label')} htmlFor="textSize">Размер иконки</label>
      <input type="number" id="textSize" name="textSize" value={iconSize} onChange={handleIconSizeChange}/>
    </div>
  );
};

export { FontSizePicker };
