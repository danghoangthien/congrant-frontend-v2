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
      <Button onClick={showModal} type="primary">
        <PlusOutlined className="display-inline-flex" />
        <span>{'追加'}</span>
      </Button>
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
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：tanaka@congrant.com'} />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default InviteUser;
