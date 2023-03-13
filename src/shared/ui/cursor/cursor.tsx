import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';
import styles from './cursor.module.scss';

MouseFollower.registerGSAP(gsap);

const cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const cursor = new MouseFollower({
      container: document.body,
      el: cursorRef.current,
      speed: 0.3,
      skewing: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      ease: 'SlowMo.ease.config(0.70.7,0.7 0.7, false)',
    });
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
};

export default cursor;
