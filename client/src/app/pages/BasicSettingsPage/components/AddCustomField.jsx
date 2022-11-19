import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Space, Input, Checkbox } from 'antd';
import { PlusOutlined, MenuOutlined } from '@ant-design/icons';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInfoLabel,
} from '../../CorporationSettingPage/components/Sprites';
import { DraggableInputItem } from './Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const { TextArea } = Input;

const AddCustomField = ({ title }) => {
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
        title={<StyledModalTitle>{title}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'項目名'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'寄付の使用用途'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'補足説明'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <TextArea placeholder={'寄付の使用用途のご希望がある場合はご選択ください。'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'回答形式'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Radio.Group onChange={() => {}} defaultValue={1}>
                <Space direction="horizontal">
                  <Radio value={1}>{'単数選択'}</Radio>
                  <Radio value={2}>{'複数選択'}</Radio>
                  <Radio value={3}>{'自由入力（1行）'}</Radio>
                  <Radio value={4}>{'自由入力（複数行）'}</Radio>
                </Space>
              </Radio.Group>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'回答選択肢'} required />}>
            <Row className="item mb-2">
              <Col sm={24} md={24} lg={24}>
                <DraggableInputItem count={88} InputComponent={<Input value={'手渡し'} />} />
              </Col>
            </Row>
            <Row className="item mb-2">
              <Col sm={24} md={24} lg={24}>
                <DraggableInputItem count={77} InputComponent={<Input value={'募金箱'} />} />
              </Col>
            </Row>
            <Row className="item mb-2">
              <Col sm={24} md={24} lg={24}>
                <DraggableInputItem count={99} InputComponent={<Input value={'郵便振替'} />} />
              </Col>
            </Row>
            <Row className="item">
              <Col sm={24} md={24} lg={24}>
                <Space align="center">
                  <MenuOutlined className="display-inline-flex" style={{ color: '#ffffff' }} />
                  <Input placeholder={'手渡し'} />
                  <Button className="active ml-2" type="primary">
                    <PlusOutlined className="display-inline-flex" />
                    <span className="ml-2">{'追加'}</span>
                  </Button>
                </Space>
              </Col>
            </Row>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'その他'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox checked>{'その他の回答を受け付ける（自由入力欄が表示されます）'}</Checkbox>
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default AddCustomField;
