import React from 'react';
import clsx from 'clsx';
import styles from './newsletter-sphere.module.scss';

interface NewsletterSphereProps {
  className?: string;
}

export const NewsletterSphere = React.forwardRef<HTMLDivElement, NewsletterSphereProps>(
  (props, ref) => {
    const { className } = props;
    return (
      <div className={clsx(styles.sphere, className)}>
        <div className={styles.sphere_container} ref={ref}>
          <img src="/img/newsletter/sphere.svg" alt="sphere" className='img-cover' />
        </div>
      </div>
    );
  }
);
