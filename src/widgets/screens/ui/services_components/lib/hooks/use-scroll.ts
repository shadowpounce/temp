import { useEffect, useRef } from 'react';

type ScrollHandlerType = () => void;

export const useScroll = (handler: ScrollHandlerType) => {
  const containerRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const { top } = container.getBoundingClientRect();
    const offsetTop = top + window.pageYOffset;
    if (window.pageYOffset <= offsetTop) return;
    if (container.classList.contains('--active')) return;
    container.classList.add('--active');
    handler();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  });

  return containerRef;
};
