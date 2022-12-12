import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInputPassword,
} from 'utils/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const TwoFactorModal = () => {
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
      <Button className="active" type="danger" onClick={showModal}>
        <span>{'2段階認証を解除する'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'2段階認証の解除'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        cancelText="キャンセル"
        okText="解除する"
        okButtonProps={{ type: 'danger' }}
      >
        <Row>
          <Col span={24}>
            <div>2段階認証を解除すると、セキュリティのリスクが高まります。</div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TwoFactorModal;
