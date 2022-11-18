import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Space, Input, Checkbox } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInfoLabel,
  SettingTextarea,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { StyledUploadPicture } from 'app/components/Layout/SettingsLayout.style';

const { TextArea } = Input;

const AddCourse = ({ title }) => {
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
        title={<StyledModalTitle>{'コース登録'}</StyledModalTitle>}
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
            <SettingInput placeholder={'example'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'金額'} required />}>
            <SettingInput placeholder={'3,000'} suffix="円" />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'コース詳細'} required />}>
            <SettingTextarea
              rows={3}
              placeholder={
                '限定10個のコースです\n・代表直筆のお礼の手紙をお送りします\n・活動報告会へご招待させていただきます'
              }
            />
          </SettingsInputContainer>

          <SettingsInputContainer label={<SettingInfoLabel label={'イメージ画像'} />}>
            <StyledUploadPicture style={{ width: '600px' }}>
              <Space direction="vertical" align="center">
                <span className="upload-picture-title">{'+'}</span>
                <span className="upload-picture-title">{'アップロード'}</span>
              </Space>
            </StyledUploadPicture>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'個数制限'} />}>
            <Row>
              <Col sm={24} md={12} lg={12}>
                <Checkbox checked>{'個数制限を設ける'}</Checkbox>
              </Col>
              <Col sm={24} md={12} lg={12}>
                <Input placeholder={'30'} suffix="個" />
              </Col>
            </Row>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default AddCourse;
