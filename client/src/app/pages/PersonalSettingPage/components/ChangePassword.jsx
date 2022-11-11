import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import { SettingsInputContainer, SettingLabel, SettingInput } from './Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const ChangePassword = () => {
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
        <span>{'パスワードの変更'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'パスワードの変更'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="招待を送信"
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'新しいパスワード'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'******'} type="password" />
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer
            label={<SettingLabel label={'新しいパスワード（確認用）'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'******'} type="password" />
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'現在のパスワード'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'******'} type="password" />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default ChangePassword;
