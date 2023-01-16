import { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, Radio, Space } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel, SettingInput } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const Edit = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button className="icon-btn" onClick={showModal} type="primary">
        <span>{'編集'}</span>
      </Button>

      {/* モーダル・Modal */}
      <Modal
        title={<StyledModalTitle>{'運営管理ユーザーの登録'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録"
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'ユーザー名'} required />}>
            <Row gutter={24}>
              <Col className="item mb-5" sm={24} md={12} lg={12}>
                <SettingInput placeholder={'姓'} />
              </Col>
              <Col className="item mb-5" sm={24} md={12} lg={12}>
                <SettingInput placeholder={'名'} />
              </Col>
            </Row>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={''} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer
            label={<SettingLabel label={'電話番号（2段階認証に利用）'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'+818012345678'} />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default Edit;
