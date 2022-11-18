import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import TextArea from 'antd/lib/input/TextArea';

const ReceiptTemplate = () => {
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
        title={<StyledModalTitle>{'領収書テンプレート'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'名称'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'テンプレート1'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'表示タイトル'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'寄付金受領証明書'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'挨拶文'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <TextArea
                style={{ height: 120 }}
                value={
                  'この度は私たちの活動を応援くださり誠にありがとうございました。\n' +
                  'いただいたご支援は今後の活動で大切に使わせていただきます。\n' +
                  '今後とも、当団体の応援をよろしくお願い申し上げます。'
                }
              />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'備考欄'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <TextArea style={{ height: 120 }} />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default ReceiptTemplate;
