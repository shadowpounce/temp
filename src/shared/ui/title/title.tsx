import React from 'react';
import clsx from 'clsx';
import styles from './title.module.scss';

interface TitleProps {
  level?: 'h1' | 'h2' | 'h3';
  children?: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ level: Tag = 'h2', children, className }) => (
  <Tag className={clsx(styles.title, className)}>{children}</Tag>
);
export default Title;
