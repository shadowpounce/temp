import { useEffect, useRef } from 'react';
import { getPathData } from './../utils/getPathData';
import { PhaseAddType } from './use-phases';
import { css } from 'shared/lib/utils';
import { animate } from 'shared/lib/utils/animate';

interface UseProductParams {
  name?: string;
  from?: number;
  to?: number;
  duration?: number;
  side?: 'left' | 'right';
}

const defaultParams: UseProductParams = {
  name: 'product',
  from: 0,
  to: 1,
  side: 'left',
  duration: 1200,
};

export const useProductAnimate = (
  pathId: string,
  addPhase: PhaseAddType,
  params: UseProductParams = defaultParams
) => {
  const productRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  const drawProduct = (
    productEl: HTMLDivElement,
    x: number,
    y: number,
    scale: number,
    opacity: number
  ) => {
    css(productEl, {
      opacity: opacity.toString(),
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
    });
  };

  const create = (productEl: HTMLDivElement, path: SVGPathElement) => {
    const isTabletView = window.innerWidth <= 991; // Remove in ft
    let { dx, dy, totalLength } = getPathData(path);
    let min = params.from! * totalLength;
    totalLength = totalLength * params.to!;

    const draw = (progress: number) => {
      const point = path.getPointAtLength(min + (totalLength - min) * progress);
      const width = productEl.offsetWidth;
      const height = productEl.offsetHeight;
      const diff = isTabletView ? width / 2 : params.side === 'right' ? width : 0;
      const x = dx * point.x;
      const y = dy * point.y;
      drawProduct(productEl, x - (width - diff), y - height, 1 * progress, 1 * progress);
      progressRef.current = progress;
    };

    return { draw };
  };

  const update = () => {
    const productEl = productRef.current;
    const path = document.getElementById(
      pathId.replace('#', '')
    ) as unknown as SVGPathElement | null;
    if (!productEl || !path) return;

    const { draw } = create(productEl, path);
    if (progressRef.current) {
      draw(progressRef.current);
    }
    const animation = animate({
      duration: 1200,
      timing: (fr) => -(Math.cos(Math.PI * fr) - 1) / 2,
      draw,
    });

    addPhase(params.name!, animation.start, true);
  };

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return productRef;
};
