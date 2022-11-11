import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Checkbox, Space, DatePicker } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
  SettingTextarea,
} from 'app/pages/GroupSettingsPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { PlusOutlined } from '@ant-design/icons';

const AddFunding = () => {
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
      <Button onClick={showModal} className="active ml-2" type="primary">
        <PlusOutlined className="display-inline-flex" />
        <span className="ml-2">{'寄付の登録'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'寄付決済の新規登録'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        footer={null}
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'サポーター'} />}>
            <SettingInput placeholder={'コングラント株式会社'} />
          </SettingsInputContainer>
        </Row>

        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'受領日'} required />}>
            <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '600px' }} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'寄付タイプ'} />}>
            <SettingSelect value={'単発'} disabled />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'プロジェクト'} />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'プラン'} />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'単価・口数'} required />}>
            <Space direction="horizontal">
              <SettingInput style={{ width: '295px' }} value="3,000" suffix="円" />
              <SettingInput style={{ width: '295px' }} value="1" suffix="口" />
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'金額'} />}>
            <SettingInput value="3,000" suffix="円" />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'受領方法'} />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'受領方法'} />}>
            <SettingTextarea rows="3" placeholder={'備考を入力してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'カスタム項目'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'認知経路'} />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'寄付の使用用途'} />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'支援経験'} />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'受領方法'} />}>
            <SettingTextarea rows="3" />
          </SettingsInputContainer>
        </Row>
        <Row className="item mt-15">
          <Col sm={24} md={24} lg={24} align="center">
            <Button className="active" type="primary" style={{ width: '100%' }}>
              <span className="ml-2">{'登録する'}</span>
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AddFunding;
