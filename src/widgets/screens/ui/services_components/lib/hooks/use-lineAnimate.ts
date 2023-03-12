import { useEffect, useRef, useState } from 'react';
import { PhaseAddType, usePhases } from './use-phases';
import { animate } from 'shared/lib/utils';

enum AnimateEnum {
  THUMB = 'thumb',
  LINE = 'line',
}

export const useLineAnimate = (addPhase: PhaseAddType) => {
  const linesRef = useRef<SVGSVGElement>(null);

  const draw = (element: SVGPathElement, progress: number) => {
    const animateType = element.dataset.animate as 'thumb' | 'line';
    const length = element.getTotalLength();
    const value = animateType === 'thumb' ? -length * progress : length - length * progress;
    element.style.strokeDashoffset = value.toString();
  };

  useEffect(() => {
    const svgElement = linesRef.current;
    if (!svgElement) return;
    const lines = [...svgElement.querySelectorAll('[data-animate]')] as SVGPathElement[];
    for (let line of lines) {
      let animateType = line.dataset.animate as AnimateEnum;
      let repeatCount = 2;

      let animation = animate({
        duration: 1000,
        timing(fr) {
          return fr;
        },
        draw(progress) {
          draw(line, progress);
        },
        onComplete() {
          repeatCount--;
          if (repeatCount <= 0) return;
          if (animateType === AnimateEnum.THUMB) {
            animation.restart(500);
          }
        },
      });

      addPhase(animateType, animation.start);
    }
  }, []);

  return linesRef;
};
