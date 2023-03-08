import React from 'react';
import { WhilistContext, useWhitilistInitialValue } from '../lib/hooks';

export const withWhitelist = (component: () => React.ReactNode) => () => {
  const whitelist = useWhitilistInitialValue();
  return (
    <WhilistContext.Provider value={whitelist}>
      {component()}
    </WhilistContext.Provider>
  );
};
