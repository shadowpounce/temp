import React from 'react';
import clsx from 'clsx';
import { useWhitelist } from 'features/whitelist';
import Button from 'shared/ui/button/button';
import Title from 'shared/ui/title/title';
import { Header } from 'widgets/header';
import { HeroMarquee } from '../hero_components';
import styles from './hero.module.scss';

export const Hero: React.FC = () => {
  const { setActive } = useWhitelist();
  return (
    <section className={`${styles.hero} section`} id="hero">
      <Header />
      <div className={clsx('container', styles.hero_container)}>
        <Title level="h1" className={styles.hero_title}>
          AI Spotlights Trending Products Among Billion Posts On Social Media
        </Title>

        <div className={styles.hero_row}>
          <Button text="Get Started" onClick={() => setActive(true)} />

          <p className={styles.hero_text}>
            A neural network of buyers monitoring most of the social networks in the world,
            including Chinese social networks.
          </p>
        </div>
      </div>
    </section>
  );
};
