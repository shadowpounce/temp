import React, { useEffect } from 'react';
import { ProductCard } from 'entities/product';
import Title from 'shared/ui/title/title';
import {
  ServicesLines,
  useLineAnimate,
  usePhases,
  useProductAnimate,
  useScroll,
} from '../services_components';
import styles from './services.module.scss';

export const Services: React.FC = () => {
  const { addPhase, runPhase } = usePhases();
  const linesRef = useLineAnimate(addPhase);
  const productRef1 = useProductAnimate('path1', addPhase, {
    from: 0.1, 
    to: 0.33,
    name: 'product1',
    side: 'left'
  });
  const productRef2 = useProductAnimate('path1', addPhase, {
    from: 0.5, 
    to: 0.8,
    name: 'product2',
    side: 'right'
  });

  const containerRef = useScroll(() => {
    runPhase('thumb')
      .runPhase('line')
      .delay(2000)
      .runPhase('product1')
      .delay(2150)
      .runPhase('product2');
  }); // Simple scroll cheker

  return (
    <section id="services" className={styles.services} ref={containerRef}>
      <div className={styles.services_container}>
        <Title className={styles.services_title}>
          Other monitoring services of advertising systems show products that already have passed
          their peak of popularity.
        </Title>

        <div className={styles.services_graph}>
          <ServicesLines className={styles.services_lines} ref={linesRef} />

          <ProductCard
            ref={productRef1}
            className={`${styles.services_product} ${styles.services_product1}`}
            img="/img/services/product-1.jpg"
            title="Our Product"
            type="block"
          />
          <ProductCard
            ref={productRef2}
            className={`${styles.services_product} ${styles.services_product2}`}
            img="/img/services/product-2.jpg"
            title="competitor item"
            type="block"
          />
        </div>
      </div>
    </section>
  );
};
