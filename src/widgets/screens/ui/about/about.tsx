import React from 'react';
import Title from 'shared/ui/title/title';
import styles from './about.module.scss';

export const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <video
        className={`img-cover ${styles.about_video}`}
        src="/video/hero/v-1.mp4"
        playsInline
        autoPlay
        muted
        loop
      />
      <div className="container">
        <Title className={styles.about_title}>
          AI understands which products are gaining{' '}
          <span className={styles.about_title_green}>popularity</span> right now and finds them at
          the <span className={styles.about_title_black}>lowest</span> prices.
        </Title>
      </div>
    </section>
  );
};
