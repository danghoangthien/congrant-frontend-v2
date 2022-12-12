import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInputPassword,
} from 'utils/Sprites';
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
      {/* ボタン */}
      <Button onClick={showModal}>
        <span>{'メールアドレスの変更'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'メールアドレスの変更'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="変更する"
      >
        <Row>
          <Col span={24} className="mb-2">
            <Row align="end">
              <SettingsInputContainer
                label={<SettingLabel label={'新しいメールアドレス'} required />}
              >
                <Col className="mb-2" sm={24} md={24} lg={24}>
                  <SettingInput placeholder={'tanaka@congrant.com'} />
                </Col>
              </SettingsInputContainer>
              <Button>
                <span>{'認証コードを送信'}</span>
              </Button>
            </Row>
          </Col>
          <Col span={24} className="mb-2">
            <SettingsInputContainer label={<SettingLabel label={'認証コード'} required />}>
              <Col className="mb-5" sm={24} md={24} lg={24}>
                <SettingInputPassword placeholder={'****'} type="password" />
              </Col>
            </SettingsInputContainer>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ChangeEmail;
