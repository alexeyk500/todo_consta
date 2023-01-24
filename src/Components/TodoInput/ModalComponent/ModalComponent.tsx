import React from 'react';
import classes from './ModalComponent.module.css';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';

type PropsType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const ModalComponent: React.FC<PropsType> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      hasOverlay
      onClickOutside={() => setIsModalOpen(false)}
      onEsc={() => setIsModalOpen(false)}
      className={classes.modal}
    >
      <div className={classes.textContainer}>
        <Text size="l" view="primary">
          {'Больше 5 дел создать нельзя'}
        </Text>
      </div>

      <div className={classes.buttonContainerModal}>
        <Button size="m" view="primary" label="Закрыть" width="default" onClick={() => setIsModalOpen(false)} />
      </div>
    </Modal>
  );
};

export default ModalComponent;
