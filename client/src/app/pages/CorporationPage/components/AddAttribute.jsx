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
import styled from 'styled-components/macro';

export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  .ant-radio-button-wrapper {
    width: 50%;
  }
`;
const attributes = [
  { label: '属性の追加', value: 0 },
  { label: '属性の削除', value: 1 },
];
const AddAttribute = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(attributes[0].value);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onRadioChange = ({ target: { value } }) => {
    setActiveTab(value);
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
          <Col sm={24} md={24} lg={24}>
            <StyledRadioGroup
              options={attributes}
              onChange={onRadioChange}
              value={attributes[activeTab].value}
              optionType="button"
              buttonStyle="solid"
            />
          </Col>
        </Row>
        <Row className="item mb-2">
          {activeTab === 0 ? (
            <SettingsInputContainer label={<SettingLabel label={'追加する属性'} required />}>
              <SettingInput placeholder={'選択してください'} />
            </SettingsInputContainer>
          ) : (
            <SettingsInputContainer label={<SettingLabel label={'削除する属性'} required />}>
              <SettingInput placeholder={'選択してください'} />
            </SettingsInputContainer>
          )}
        </Row>
      </Modal>
    </>
  );
};

export default AddAttribute;
