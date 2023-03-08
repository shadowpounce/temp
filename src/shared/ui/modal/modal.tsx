import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { toggleScroll } from 'shared/lib/utils';
import styles from './modal.module.scss';

interface ModalProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  timeout?: number;
  availableScroll?: boolean;
  animation?: {
    enter: string;
    enterActive: string;
    exit: string;
    exitActive: string;
  } | Record<string, string>;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  active,
  closeModal,
  children,
  className,
  animation,
  timeout,
  availableScroll = false,
}) => {
  const rendered = useRef(false);

  const handleScroll = (active: boolean) => {
    if (!availableScroll) {
      toggleScroll(active);
    }
  };

  const handleClickWrapper = (e: React.MouseEvent) => {
    if (e.button !== 2 && e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (rendered.current && active) {
      handleScroll(false);
    }
    rendered.current = true;
  }, [active]);

  useEffect(() => {
    return () => {
      handleScroll(true);
    };
  }, []);

  const container = typeof window !== 'undefined' && document.body!;

  const RenderElement = (
    <CSSTransition
      timeout={timeout || 350}
      in={active}
      classNames={animation || styles}
      mountOnEnter
      unmountOnExit
      onExited={handleScroll.bind(null, true)}
    >
      <div
        data-class="modal"
        className={clsx(styles.modal, !animation && styles.modal_default, className)}
        onMouseDown={handleClickWrapper}
      >
        {children}
      </div>
    </CSSTransition>
  );

  return container ? createPortal(RenderElement, container) : null;
};

export default Modal;
