import React from 'react';
import clsx from 'clsx';
import { ProductCard } from 'entities/product';
import { useWhitelist } from 'features/whitelist';
import Button from 'shared/ui/button/button';
import Title from 'shared/ui/title/title';
import { NewsletterSphere, useMovement } from '../newsletter_components';
import styles from './newsletter.module.scss';

export const Newsletter: React.FC = () => {
  const { setActive } = useWhitelist();
  const { sphereRef, onMouseMove, onMouseLeave } = useMovement();

  return (
    <section
      className={`${styles.newsletter} section`}
      id="newsletter"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="container">
        <div className={styles.newsletter_row}>
          <Title className={clsx(styles.newsletter_title, styles.newsletter_title_start)}>
            Be the first to join AI beta testing Subscribe to our newsletter
          </Title>

          <Title className={clsx(styles.newsletter_title, styles.newsletter_title_continue)}>
            — several times a week we will share <span>trending finds.</span>
          </Title>

          <ProductCard
            className={clsx(styles.newsletter_product, styles.newsletter_product_first)}
            title="We think you will like this"
            img="/img/newsletter/card-2.png"
          />

          <ProductCard
            className={styles.newsletter_product}
            title="We think you will like this"
            img="/img/newsletter/card-1.png"
          />
        </div>

        <div className={styles.newsletter_row}>
          <div className={styles.newsletter_column}>
            <p className={styles.newsletter_text}>
              And with the release of AI interface and its beta version, you will be among the first
              to receive a private access
            </p>

            <Button
              className={styles.newsletter_subscribeBtn}
              onClick={setActive.bind(null, true)}
              text="Subscribe Now"
            />
          </div>
          <Title className={clsx(styles.newsletter_title, styles.newsletter_title_end)}>
            — several times a week we will share <span>trending finds.</span>
          </Title>
        </div>

        <NewsletterSphere className={styles.newsletter_sphere} ref={sphereRef} />
      </div>
    </section>
  );
};
