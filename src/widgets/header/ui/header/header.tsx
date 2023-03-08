import React from 'react';
import { HeaderBurgermenu } from '../header-burgermenu/header-burgermenu';
import HeaderNav from '../header-nav/header-nav';
import Logo from 'shared/ui/logo/logo';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_container}`}>
        <Logo className={styles.header_logo} />
        <HeaderNav className={styles.header_nav} />
        <HeaderBurgermenu className={styles.header_burgermenu} active={false} onClick={() => {}} />
      </div>
    </header>
  );
};
