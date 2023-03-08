import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './tiktok-frame.module.scss';

interface TiktokFrameProps {
  videoSrc: string;
}

export const TiktokFrame: React.FC<TiktokFrameProps> = ({ videoSrc }) => {


  return (
    <div className={styles.tiktok}>
      <video
        src={videoSrc}
        className={clsx(styles.tiktok_video, 'img-cover')}
        playsInline
        muted
        autoPlay
        loop
      />
      <img
        src="/img/hero/tiktok-frame.png"
        className={clsx(styles.tiktok_image, 'img-cover')}
        alt="controls"
      />
    </div>
  );
};
