import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { getDefaultNav } from 'widgets/header/lib/utils';
import styles from './header-nav.module.scss';

interface HeaderNavProps {
  className?: string;
}

const navigation = getDefaultNav();

const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  return (
    <nav className={clsx(styles.nav, className)}>
      {navigation.map((item) => (
        <a className={styles.nav_item} href={item.path} key={item.path}>
          <span>{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default HeaderNav;
