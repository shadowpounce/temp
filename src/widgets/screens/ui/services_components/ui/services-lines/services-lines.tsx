import React from 'react';
import clsx from 'clsx';
import styles from './services-lines.module.scss';

interface ServicesLinesProps {
  className?: string;
  children?: React.ReactNode;
}

export const ServicesLines = React.forwardRef<SVGSVGElement, ServicesLinesProps>((props, ref) => {
  const { className, children } = props;

  return (
    <svg
      ref={ref}
      className={clsx(styles.lines, className)}
      preserveAspectRatio="none"
      viewBox="0 0 1668 601"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 597L154 596C541.757 596 487.5 4 854.037 4C1168.5 4 1159.03 596 1514 596H1664"
        stroke="black"
        strokeWidth="2"
        data-animate="line"
        id="path1"
        className={styles.lines_item}
      />
      <path
        d="M4 597L154 596C541.757 596 506 131 842 131C1129 131 1159.03 596 1514 596H1664"
        stroke="#ABABAB"
        strokeWidth="2"
        data-animate="line"
        className={styles.lines_item}
      />
      <path
        d="M4 596L154 595.003C541.757 595.003 551.5 241 854.037 241C1097 241 1159.03 595.003 1514 595.003H1663H1664"
        stroke="#FF5959"
        strokeWidth="2"
        data-animate="line"
        id="path2"
        className={styles.lines_item}
      />
      <path
        d="M4 597L154 596C541.757 596 487.5 4 854.037 4C1168.5 4 1159.03 596 1514 596H1664"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
        className={styles.lines_item}
        data-animate="thumb"
      />
      <path
        d="M4 597L154 596C541.757 596 506 131 842 131C1129 131 1159.03 596 1514 596H1664"
        stroke="#ABABAB"
        strokeWidth="8"
        strokeLinecap="round"
        className={styles.lines_item}
        data-animate="thumb"
      />
      <path
        d="M4 596L154 595.003C541.757 595.003 551.5 241 854.037 241C1097 241 1159.03 595.003 1514 595.003H1663H1664"
        stroke="#FF5959"
        strokeWidth="8"
        strokeLinecap="round"
        className={styles.lines_item}
        data-animate="thumb"
      />
      {children}
    </svg>
  );
});
