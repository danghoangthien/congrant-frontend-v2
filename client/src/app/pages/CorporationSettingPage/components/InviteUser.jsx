import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { SettingsInputContainer, SettingLabel, SettingInput } from './Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const InviteUser = () => {
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
      <Button className="icon-btn" onClick={showModal} type="primary">
        <span class="material-symbols-outlined">add</span>
        <span>{'追加'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'新規ユーザーの招待'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="招待を送信"
      >
        <Row>
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
            <SettingInput placeholder={'例：tanaka@congrant.com'} />
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default InviteUser;
