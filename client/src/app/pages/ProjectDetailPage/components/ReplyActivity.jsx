import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Checkbox, Space, DatePicker } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingTextarea,
  SettingHepler,
} from 'utils/Sprites';
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
const ReplyActivity = () => {
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
      <Button onClick={() => showModal()} type="primary">
        {'返信'}
      </Button>

      <Modal
        title={<StyledModalTitle>{'応援コメントへの返信'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="返信する"
      >
        <Row>
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'応援コメント'} />}>
              <div style={{ fontWeight: '600' }}>山田 花子</div>
              <div>活動頑張ってください。応援しています。</div>
            </SettingsInputContainer>
          </Col>
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'返信内容'} />}>
              <SettingTextarea
                rows={3}
                placeholder={'ここにサポーターへの返信を記載してください。'}
              />
            </SettingsInputContainer>
          </Col>
          <Col span={24}>
            <SettingsInputContainer label={<SettingLabel label={'サポーターへの通知'} />}>
              <Checkbox checked>{'サポーターにメールで通知する'}</Checkbox>
            </SettingsInputContainer>
            <SettingHepler>
              返信内容がサポーターにメールで通知されます。
              <br />
              通知したくない場合はチェックを外してください。
            </SettingHepler>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ReplyActivity;
