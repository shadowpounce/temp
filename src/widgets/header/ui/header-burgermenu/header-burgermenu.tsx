import React from 'react';
import clsx from 'clsx';
import styles from './header-burgermenu.module.scss';

interface HeaderBurgerProps {
  className?: string;
  active: boolean;
  onClick: () => void;
}

export const HeaderBurgermenu: React.FC<HeaderBurgerProps> = ({ onClick, active, className }) => {
  return (
    <button
      className={clsx(styles.burgermenu, active && styles.burgermenu_active, className)}
      onClick={onClick}
    >
      <div className={styles.burgermenu_inner}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};
