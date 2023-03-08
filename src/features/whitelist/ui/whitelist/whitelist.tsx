import React from 'react';
import WhitelistForm from '../whitelist-form/whitelist-form';
import WhitelistInfo from '../whitelist-info/whitelist-info';
import { useWhitelist } from 'features/whitelist/lib/hooks';
import CrossIcon from 'shared/ui/icons/cross.icon';
import MessageIcon from 'shared/ui/icons/message.icon';
import Modal from 'shared/ui/modal/modal';
import Title from 'shared/ui/title/title';
import styles from './whitelist.module.scss';
import MarkIcon from 'shared/ui/icons/mark.icon';

export const Whitelist: React.FC = () => {
  const { active, stage, setActive } = useWhitelist();
  const handleClose = () => setActive(false);

  return (
    <Modal
      className={styles.whitelist}
      active={active}
      closeModal={setActive.bind(null, false)}
      animation={styles}
    >
      <div className={styles.whitelist_modal}>
        <header className={styles.whitelist_header}>
          {stage === 'form' && (
            <Title level="h2" className={styles.whitelist_title}>
              Join Our List
            </Title>
          )}

          <button className={styles.whitelist_closeBtn} onClick={handleClose}>
            <CrossIcon />
          </button>
        </header>

        {stage === 'form' && <WhitelistForm />}

        {stage === 'verify' && (
          <WhitelistInfo
            icon={MessageIcon}
            title="Verify your email"
            subtitle="Hi! Use your link below to verify your email and start enjoying new trending finds."
          />
        )}

        {stage === 'complete' && (
          <WhitelistInfo icon={MarkIcon} title="Thank you for subscribing!" />
        )}
      </div>
    </Modal>
  );
};
