import { createContext, useContext, useState } from 'react';

type WhitelistStage = 'form' | 'verify' | 'complete';

type WhitelistState = {
  active: boolean;
  stage: WhitelistStage;
  setActive: (active: boolean) => void;
  setStage: (stage: WhitelistStage) => void;
};

export const WhilistContext = createContext<WhitelistState>({
  active: false,
  stage: 'form',
  setActive: () => {},
  setStage: () => {},
});

export const useWhitilistInitialValue = () => {
  const [active, setActive] = useState(false);
  const [stage, setStage] = useState<WhitelistStage>('form');
  return {
    active,
    stage,
    setActive,
    setStage,
  };
};

export const useWhitelist = () => {
  return useContext(WhilistContext);
};
