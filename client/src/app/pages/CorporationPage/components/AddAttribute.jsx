import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Checkbox, Space, DatePicker } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
} from 'app/pages/CorporationSettingPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { TagFilled } from '@ant-design/icons';

const AddAttribute = () => {
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
      <Space onClick={() => showModal()}>
        <TagFilled style={{ color: 'black' }} /> <span className="ml-2">{'属性を設定する'}</span>
      </Space>
      <Modal
        title={<StyledModalTitle>{'属性の設定'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
      >
        <Row className="item mb-2">
          <Col sm={24} md={12} lg={12}>
            <Button type="primary" style={{ width: '100%' }}>
              <span className="ml-2">{'属性の追加'}</span>
            </Button>
          </Col>
          <Col sm={24} md={12} lg={12}>
            <Button style={{ width: '100%' }}>
              <span className="ml-2">{'属性の削除'}</span>
            </Button>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'追加する属性'} required />}>
            <SettingInput placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default AddAttribute;
