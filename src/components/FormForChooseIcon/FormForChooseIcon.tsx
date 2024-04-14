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
  handleIconColorChange: (value: string) => void;
  handleFormVisibility: (value: boolean) => void;
  handleIconSizeChange: (value: number) => void;
  handleIconTypeChange: (value: string) => void;
  handleSubmitForm: (value: {}) => void;
  leftPosition: string;
  topPosition: string;
};

const FormForChooseIcon: FC<FormForChooseIconProps> = ({
  formData,
  handleIconColorChange,
  handleFormVisibility,
  handleIconSizeChange,
  handleIconTypeChange,
  handleSubmitForm,
  leftPosition,
  topPosition,
}) => {
  const handleButtonCancelClick = (event: FormEvent) => {
    event.preventDefault();

    handleFormVisibility(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    formData.leftPosition = leftPosition;
    formData.topPosition = topPosition;
    handleFormVisibility(false);
    handleSubmitForm(formData);
  };

  return (
    <form
      className={cnFormForChooseIcon()}
      style={{ left: leftPosition, top: topPosition }}
      onSubmit={handleSubmit}
    >
      <ColorPicker color={formData.color} handleIconColorChange={handleIconColorChange} />
      <FontSizePicker iconSize={formData.iconSize} handleIconSizeChange={handleIconSizeChange} />
      <IconPicker handleIconTypeChange={handleIconTypeChange} />
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
