import React, { useState } from 'react';
// ANTD
import { Button, Modal } from 'antd';
// COMPONENT
import { SettingsInputContainer, SettingLabel, SettingInput } from 'utils/Sprites';

const SaveFilter = ({ model, columnMap, localstorageKey }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* BUTTON */}
      <Button onClick={showModal} size="small">
        {'保存'}
      </Button>

      {/* MODAL */}
      <Modal
        title="フィルタ条件の保存"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        cancelText="キャンセル"
        okText="保存する"
      >
        <SettingsInputContainer label={<SettingLabel label={'フィルタ名'} required />}>
          <SettingInput style={{ width: '100%', maxWidth: 600 }} placeholder={'フィルタ1'} />
        </SettingsInputContainer>
      </Modal>
    </>
  );
};

export default SaveFilter;
