import React from 'react';
import ArrowRightLongIcon from '../icons/arrow-right-long.icon';
import clsx from 'clsx';
import styles from './button.module.scss';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  text: string;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick, type = "button" }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick} type={type}>
      <span className={styles.button_text}>{text}</span>
      <ArrowRightLongIcon className={styles.button_arrow} />
    </button>
  );
};

export default Button;
