import React from 'react';
import { InstagramFrame } from '../instagram-frame/instagram-frame';
import { TiktokFrame } from '../tiktok-frame/tiktok-frame';
import clsx from 'clsx';
import Marquee from 'shared/ui/marquee/marquee';
import styles from './hero-marquee.module.scss';

interface HeroMarqueeProps {
  className?: string;
  ref?: string;
}

export const HeroMarquee: React.FC<HeroMarqueeProps> = ({ className }) => {
  return (
    <div className={clsx(styles.marquee, className)}>
      <Marquee scaler={3} duration={7000} className={styles.marquee_item}>
        <div className={styles.marquee_item_container}>
          <TiktokFrame videoSrc="/video/hero/v-1.webm" />
        </div>
        <div className={styles.marquee_item_container}>
          <TiktokFrame videoSrc="/video/hero/v-3.webm" />
        </div>
      </Marquee>
      <Marquee scaler={2.3} direction="up" duration={24000} className={styles.marquee_item}>
        <div className={styles.marquee_item_container}>
          <InstagramFrame videoSrc="/video/hero/v-4.webm" />
        </div>
        <div className={styles.marquee_item_container}>
          <InstagramFrame videoSrc="/video/hero/v-5.webm" />
        </div>
        <div className={styles.marquee_item_container}>
          <InstagramFrame videoSrc="/video/hero/v-8.webm" />
        </div>
        <div className={styles.marquee_item_container}>
          <InstagramFrame videoSrc="/video/hero/v-11.webm" />
        </div>
      </Marquee>
      <Marquee scaler={2.3} duration={18000} className={styles.marquee_item}>
        <div className={styles.marquee_item_container}>
          <TiktokFrame videoSrc="/video/hero/v-6.webm" />
        </div>
        <div className={styles.marquee_item_container}>
          <TiktokFrame videoSrc="/video/hero/v-7.webm" />
        </div>
        <div className={styles.marquee_item_container}>
          <TiktokFrame videoSrc="/video/hero/v-9.webm" />
        </div>
        <div className={styles.marquee_item_container}>
          <TiktokFrame videoSrc="/video/hero/v-10.webm" />
        </div>
      </Marquee>
    </div>
  );
};
