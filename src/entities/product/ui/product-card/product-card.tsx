import React from 'react';
import clsx from 'clsx';
import styles from './product-card.module.scss';

interface ProductCardProps {
  className?: string;
  type?: 'inline' | 'block';
  title: string;
  img: string;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, type = 'inline', img, title }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.card, styles[`card_${type}`], className)}>
        <div className={styles.card_column}>
          <h3 className={styles.card_title}>{title}</h3>
          <button className={styles.card_addBtn} data-class="button" />
        </div>
        <img className={styles.card_img} src={img} alt="product" />
      </div>
    );
  }
);
