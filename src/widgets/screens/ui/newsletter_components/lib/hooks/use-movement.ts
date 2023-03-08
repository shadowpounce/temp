import { useRef } from 'react';
import { css } from 'shared/lib/utils';

// Config
const MAX_DEGREE = 40;
const MAX_OFFSET_X = 100;
const MAX_OFFSET_Y = 150;

export const useMovement = () => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const transformed = useRef(false);

  const transform = (x: number, y: number, degrees: number) => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    css(sphere, {
      transform: `translate(${x}px, ${y}px) rotate(${degrees}deg)`,
      transition: 'none',
    });
  };

  const backTransform = () => {
    const sphere = sphereRef.current;
    if (!sphere) return;
    css(sphere, {
      transition: 'transform .5s ease-in-out',
      transform: 'translate(0) rotate(0)',
    });
  };

  const onMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 991) return;

    const sphere = sphereRef.current;
    if (!sphere) return;

    const target = ev.currentTarget as HTMLDivElement;
    // Cursor
    const center = { x: target.offsetWidth / 2, y: target.offsetHeight / 2 };
    const point = { x: ev.clientX, y: ev.clientY };
    // Point
    const xPoint = point.x - center.x;
    const yPoint = point.y - center.y;
    // X & Y
    const x = -(xPoint / center.x) * MAX_OFFSET_X;
    const y = -(yPoint / center.y) * MAX_OFFSET_Y;
    // Angle
    const angle = ((-xPoint + yPoint * 2) / (center.x + center.y)) * MAX_DEGREE;

    transform(x, y, angle);
    transformed.current = true;
  };

  const onMouseLeave = () => {
    if (window.innerWidth <= 991 && !transformed.current) return;
    backTransform();
    transformed.current = false;
  };

  return {
    sphereRef,
    onMouseMove,
    onMouseLeave,
  };
};
