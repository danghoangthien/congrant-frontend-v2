import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const AddDonationPlan = () => {
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
        title={<StyledModalTitle>{'プラン登録'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="招待を送信"
      >
        <Row className="item mb-2">
          <SettingsInputContainer
            label={<SettingLabel label={'寄付タイプ（決済頻度）'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <Radio checked>{'単発'}</Radio>
                <Radio>{'毎月（定期決済）'}</Radio>
                <Radio>{'毎年（定期決済）'}</Radio>
              </Space>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'名称'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'応援会員'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'金額'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'3,000'} />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default AddDonationPlan;
