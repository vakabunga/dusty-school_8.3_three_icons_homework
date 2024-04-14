import React, { useState } from 'react';
import type { FormEvent, MouseEvent } from 'react';

import { cnApp } from './App.classname';
import { BoardForIcons } from './components/BoardForIcons/BoardForIcons';
import { FormForChooseIcon } from './components/FormForChooseIcon/FormForChooseIcon';
import { Icon } from './components/Icon/Icon';

type FromPosition = {
  left: string;
  top: string;
};

export type FormData = {
  color: string;
  iconSize: number;
  iconType: string;
  leftPosition: string;
  topPosition: string;
};

const initialFromPosition: FromPosition = {
  left: '',
  top: '',
};

const InitialFormData: FormData = {
  color: '#ffffff',
  iconSize: 16,
  iconType: '',
  leftPosition: '',
  topPosition: ''
};

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [formPosition, setFormPosition] = useState<FromPosition>(initialFromPosition);
  const [formData, setFormData] = useState<FormData>(InitialFormData);
  const [iconsList, setIconsList] = useState<FormData[]>([]);

  const handleShowForm = (event: MouseEvent) => {
    setFormPosition((prev) => {
      prev.left = event.clientX + 'px';
      prev.top = event.clientY + 'px';
      return { ...prev };
    });

    setIsActive(true);
  };

  const handleFormVisibility = () => {
    setIsActive(false);
  };

  const handleIconColorChange = (color: string) => {
    setFormData((prev) => {
      prev.color = color;
      return { ...prev };
    });
  };

  const handleIconSizeChange = (iconSize: number) => {
    setFormData((prev) => {
      prev.iconSize = iconSize;
      return { ...prev };
    });
  };

  const handleIconTypeChange = (iconType: string) => {
    formData.iconType = iconType;
  }

  const handleSubmit = () => {
    setIconsList(prev => [...prev, formData]);
  }

  return (
    <div className={cnApp()}>
      <BoardForIcons onClick={handleShowForm} iconsList={iconsList} />
      {isActive && (
        <FormForChooseIcon
          leftPosition={formPosition.left}
          topPosition={formPosition.top}
          handleIconColorChange={handleIconColorChange}
          handleFormVisibility={handleFormVisibility}
          handleIconSizeChange={handleIconSizeChange}
          handleIconTypeChange={handleIconTypeChange}
          handleSubmitForm={handleSubmit}
          formData={formData}
        />
      )}
    </div>
  );
};

export { App };
