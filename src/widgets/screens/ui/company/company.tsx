import React, { useEffect, useState } from 'react';
import { useDynamicRefs, useProductAnimate } from '../company_components/lib/hooks';
import Marquee from 'shared/ui/marquee/marquee';
import { CompanyDevice, getCompanyData } from '../company_components';
import styles from './company.module.scss';

const initialData = getCompanyData();

export const Company: React.FC = () => {
  const [companyActive, setCompanyActive] = useState(initialData[0]);

  useProductAnimate('[data-company]', initialData, setCompanyActive);

  return (
    <>
      <CompanyDevice
        data={initialData}
        className={styles.company_device}
        company={companyActive}
        videoSrc="/video/hero/v-2.mp4"
      />
      <section className={`${styles.company} section`} id="company">
        <Marquee duration={10000} direction="left" className={styles.company_marquee}>
          <div className={styles.company_marquee_container}>
            {initialData.map((company, id) => (
              <p
                className={styles.company_marquee_item}
                key={company.name}
                style={
                  company.name === `Ali Express`
                    ? {
                        padding: `0 20px`,
                      }
                    : {}
                }
                data-company={company.name}
              >
                {company.name}
              </p>
            ))}
          </div>
        </Marquee>
      </section>
    </>
  );
};
