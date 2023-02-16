import React, { useState } from 'react';

export const useToggle = (active = false) => {
  const [isActive, setActive] = useState(active);

  const toggle = () => {
    setActive(!isActive);
  };
  return [isActive, toggle];
};
