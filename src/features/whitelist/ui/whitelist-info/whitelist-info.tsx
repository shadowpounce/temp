import React from 'react';
import Title from 'shared/ui/title/title';
import styles from './whitelist-info.module.scss';

interface WhitelistInfoProps {
  icon: () => React.ReactNode;
  title: string;
  subtitle?: string;
}

const WhitelistInfo: React.FC<WhitelistInfoProps> = ({ title, subtitle, icon }) => {
  return (
    <div className={styles.info}>
      <div className={styles.info_wrapper}>
        <div className={styles.info_icon}>{icon()}</div>
        <Title level="h2" className={styles.info_title} children={title} />
        {subtitle && <p className={styles.info_subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default WhitelistInfo;
