import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import aboutStyles from '../../../widgets/screens/ui/about/about.module.scss';
import styles from './marquee.module.scss';

interface MarqueeProps {
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  scaler?: number;
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'down',
  duration = 5000,
  scaler = 2,
  className,
}) => {
  const [repeatCount, setRepeatCount] = useState(1);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleCalcWidth = () => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeChild = marquee.children[0] as HTMLElement;
    if (!marqueeChild) return;

    const marqueeParent = marquee.parentElement?.parentElement;
    if (!marqueeParent) return;

    const step = Math.min(scaler, 5);
    const parentWidth = marqueeParent.offsetWidth * step;
    const parentHeight = marqueeParent.offsetHeight * step;

    if (direction === 'up' || direction === 'down') {
      if (marquee.offsetHeight >= parentHeight) return;

      const newStep = Math.ceil(parentHeight / marqueeChild.offsetHeight);
      setRepeatCount(Math.max(1, newStep));
      return;
    }
    if (direction === 'left' || direction === 'right') {
      if (marquee.offsetWidth >= parentWidth) return;

      const newStep = Math.ceil(parentWidth / marqueeChild.offsetWidth);
      setRepeatCount(Math.max(1, newStep));
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleCalcWidth);
    return () => window.removeEventListener('resize', handleCalcWidth);
  });

  useEffect(() => {
    handleCalcWidth();
  }, [children, direction, scaler]);

  return (
    <div className={clsx(styles.marquee, styles[`marquee_${direction}`], className)}>
      <div ref={marqueeRef} className={styles.marquee_wrapper}>
        {Array.from({ length: repeatCount }).map((_, id) => (
          <div
            className={styles.marquee_item}
            style={{ animationDuration: `${duration}ms` }}
            key={id}
            id={id === 2 ? 'transition-video' : 'video'}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
