import { useEffect, useRef } from 'react';
import { CompanyType } from '../utils';

export function useProductAnimate(
  selector: string,
  data: CompanyType[],
  onChange: (company: CompanyType) => void
) {
  const elements = useRef<HTMLElement[]>([]);
  const raf = useRef<number | null>(null);

  const create = () => {
    elements.current = [...document.querySelectorAll(selector)] as HTMLElement[];
    animate();
  };

  const update = () => {
    const centerX = window.innerWidth / 1.5;
    for (let element of elements.current) {
      const coords = element.getBoundingClientRect();
      const centerEl = coords.left + coords.width / 2;
      if (centerEl > centerX - 10 && centerEl < centerX + 10) {
        const companyName = element.dataset.company?.toLowerCase();
        const findItem = data.find((item) => item.name.toLowerCase() === companyName);
        if (findItem) onChange(findItem);
      }
    }
  };

  const animate = () => {
    update();
    raf.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    create();

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }
    };
  });
}
