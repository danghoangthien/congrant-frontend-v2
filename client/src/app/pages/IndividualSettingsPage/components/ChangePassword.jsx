import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import { SettingsInputContainer, SettingLabel, SettingInputPassword } from './Sprites';
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
        okText="変更する"
      >
        <Row>
          <Col className="mb-2" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'現在のパスワード'} required />}>
              <Col className="mb-4" sm={24} md={24} lg={24}>
                <SettingInputPassword placeholder={'******'} type="password" />
              </Col>
            </SettingsInputContainer>
          </Col>
          <Col className="mb-2" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'新しいパスワード'} required />}>
              <Col className="mb-4" sm={24} md={24} lg={24}>
                <SettingInputPassword placeholder={'******'} type="password" />
              </Col>
            </SettingsInputContainer>
          </Col>
          <Col className="mb-2" span={24}>
            <SettingsInputContainer
              label={<SettingLabel label={'新しいパスワード（確認用）'} required />}
            >
              <Col className="mb-4" sm={24} md={24} lg={24}>
                <SettingInputPassword placeholder={'******'} type="password" />
              </Col>
            </SettingsInputContainer>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ChangePassword;
