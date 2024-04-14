import React from 'react';
import type { FC, FormEvent } from 'react';

import { cnFormForChooseIcon } from './FormForChooseIcon.classname';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { FontSizePicker } from '../FontSizePicker/FontSizePicker';
import { IconPicker } from '../IconPicker/IconPicker';

import type { FormData } from '../../App';

import './FormForChooseIcon.css';

type FormForChooseIconProps = {
  formData: FormData;
  onIconColorChange: (value: string) => void;
  onFormVisibility: (value: boolean) => void;
  onIconSizeChange: (value: number) => void;
  onIconTypeChange: (value: string) => void;
  onSubmitForm: (value: {}) => void;
  leftPosition: string;
  topPosition: string;
};

const FormForChooseIcon: FC<FormForChooseIconProps> = ({
  formData,
  onIconColorChange,
  onFormVisibility,
  onIconSizeChange,
  onIconTypeChange,
  onSubmitForm,
  leftPosition,
  topPosition,
}) => {
  const handleButtonCancelClick = (event: FormEvent) => {
    event.preventDefault();

    onFormVisibility(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    formData.leftPosition = leftPosition;
    formData.topPosition = topPosition;
    onFormVisibility(false);
    onSubmitForm(formData);
  };

  return (
    <form
      className={cnFormForChooseIcon()}
      style={{ left: leftPosition, top: topPosition }}
      onSubmit={handleSubmit}
    >
      <ColorPicker color={formData.color} onIconColorChange={onIconColorChange} />
      <FontSizePicker iconSize={formData.iconSize} onIconSizeChange={onIconSizeChange} />
      <IconPicker onIconTypeChange={onIconTypeChange} />
      <div className={cnFormForChooseIcon('ButtonsContainer')}>
        <button className={cnFormForChooseIcon('AddButton')}>Добавить</button>
        <button className={cnFormForChooseIcon('CancelButton')} onClick={handleButtonCancelClick}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export { FormForChooseIcon };
