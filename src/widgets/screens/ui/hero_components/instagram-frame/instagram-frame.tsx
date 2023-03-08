import React from 'react';
import clsx from 'clsx';
import { getVideoMime } from 'shared/lib/utils';
import styles from './instagram-frame.module.scss';

interface InstagramFrameProps {
  videoSrc: string;
  className?: string;
}

export const InstagramFrame: React.FC<InstagramFrameProps> = ({ videoSrc, className }) => {
  return (
    <div className={clsx(styles.instagram, className)}>
      <div className={styles.instagram_video}>
        <video src={videoSrc} className="img-cover" playsInline muted autoPlay loop />
        <span className={styles.instagram_pagination}>1/3</span>
      </div>
    </div>
  );
};
