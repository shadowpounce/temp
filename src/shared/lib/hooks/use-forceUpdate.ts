import { useState } from 'react';

export const useForceUpdate = () => {
  const [, setCounter] = useState(0);

  const forceUpdate = () => {
    setCounter((prev) => prev + 1);
  };

  return forceUpdate;
};
