import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../icons/logo.icon';
import styles from './logo.module.scss';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <NavLink to="/" className={clsx(styles.logo, className)}>
      <LogoIcon />
    </NavLink>
  );
}

export default Logo;