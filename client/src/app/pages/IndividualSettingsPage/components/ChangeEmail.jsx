import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import { SettingsInputContainer, SettingLabel, SettingInput } from './Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const ChangeEmail = () => {
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
      <Button onClick={showModal}>
        <span>{'メールアドレスの変更'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'メールアドレスの変更'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="招待を送信"
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'新しいメールアドレス'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'tanaka@congrant.com'} />
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'認証コード'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'****'} type="password" />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default ChangeEmail;
