import React, { useState } from 'react';
import { Row, Col, Modal, Radio, Space } from 'antd';
import useModalActions from 'hook/useModalActions';
import { SettingsInputContainer, SettingLabel, SettingInput } from 'utils/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
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
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  const [activeTab, setActiveTab] = useState(attributes[0].value);

  const onRadioChange = ({ target: { value } }) => {
    setActiveTab(value);
  };

  return (
    <>
      <Space onClick={() => showModal()}>
        <span
          className="material-symbols-outlined fill-icon"
          style={{ fontSize: '16px', display: 'flex' }}
        >
          sell
        </span>
        <span>{'属性を設定する'}</span>
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
