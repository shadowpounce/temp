import { useRef, useState } from 'react';

export type PhaseType = {
  name: string;
  handler: () => void;
};

export type PhaseAddType = (name: string, handler: () => void, replace?: boolean) => boolean;

export const usePhases = () => {
  const phases = useRef<PhaseType[]>([]);
  const delayes = useRef<number[]>([]);

  const getPhases = (name: string) => {
    return [...phases.current.filter((phase) => phase.name === name)];
  };

  const removePhase = (name: string) => {
    phases.current = phases.current.filter((phase) => phase.name !== name);
  };

  const addPhase = (name: string, handler: () => void, replace = false) => {
    if (replace) {
      phases.current = phases.current.filter((phase) => phase.name !== name);
    }
    phases.current = [...phases.current, { name, handler }];
    return true;
  };

  const runPhase = (name: string) => {
    const runPhases = getPhases(name);
    const delayMs = delayes.current.shift();
    if (delayMs !== undefined) {
      new Promise((res) => setTimeout(res, delayMs)).then(() => {
        runPhases.map((phase) => phase.handler());
      });
    } else {
      runPhases.map((phase) => phase.handler());
    }

    return { runPhase, delay };
  };

  function delay(ms: number) {
    delayes.current.push(ms);
    return { runPhase };
  }

  return {
    getPhases,
    addPhase,
    removePhase,
    runPhase,
  };
};
