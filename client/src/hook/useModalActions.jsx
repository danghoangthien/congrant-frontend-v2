import { useState } from 'react';

function useModalActions({ onOk = () => {}, onCancel = () => {} }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    onOk();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onCancel();
  };

  return [isModalOpen, showModal, handleOk, handleCancel];
}

export default useModalActions;
