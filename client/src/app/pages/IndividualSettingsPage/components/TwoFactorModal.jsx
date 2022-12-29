import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import useModalActions from 'hook/useModalActions';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInputPassword,
} from 'utils/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const TwoFactorModal = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* ボタン */}
      <Button className="active" type="primary" onClick={showModal}>
        <span>{'2段階認証を設定する'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'2段階認証の設定'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        cancelText="キャンセル"
        okText="変更する"
      >
        <Row>
          <Col span={24} className="mb-2">
            <Row align="end">
              <SettingsInputContainer
                label={<SettingLabel label={'電話番号（SMSを受信できる番号）'} required />}
              >
                <Col className="mb-2" sm={24} md={24} lg={24}>
                  <SettingInput placeholder={'08012345678'} />
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

export default TwoFactorModal;
