import React from 'react';
import { CompanyType } from '../../lib/utils';
import clsx from 'clsx';
import styles from './company-device.module.scss';

interface CompanyDeviceProps {
  className?: string;
  videoSrc: string;
  company: CompanyType;
  data: CompanyType[];
}

export const CompanyDevice: React.FC<CompanyDeviceProps> = ({
  className,
  videoSrc,
  company,
  data,
}) => {
  return (
    <div className={clsx(styles.device, className)}>
      <div className={styles.device_frame}>
        <video src={videoSrc} className="img-cover" playsInline autoPlay muted loop />
        <div className={styles.device_camera} />
        <p className={styles.device_offer}>
          {data.map((com) => (
            <div className={styles.device_offer_wrapper} data-active={com.name === company.name}>
              <span className={styles.device_offer_company}>{company.name}</span>
              <span className={styles.device_offer_price}>{company.price}$</span>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};
