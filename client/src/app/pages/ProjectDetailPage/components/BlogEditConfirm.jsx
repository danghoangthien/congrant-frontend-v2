import React, { useState } from 'react';
import { Row, Col, Modal, Space, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { StyledFormCheckbox } from 'styles/FormElement.style';
import SaveIcon from '@mui/icons-material/Save';

const attributes = [
  { label: '属性の追加', value: 0 },
  { label: '属性の削除', value: 1 },
];

const options = [
  { label: '属性1', value: 1 },
  { label: '属性1', value: 2 },
  { label: '属性1', value: 3 },
  { label: '属性1', value: 4 },
];

const BlogEditConfirm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(attributes[0].value);

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

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
        <Button type="primary" className="icon-btn">
          <SaveIcon style={{ fontSize: '14px' }} className="mr-2" />
          <span>{'保存'}</span>
        </Button>
      </Space>

      <Modal
        title={<StyledModalTitle>{'活動報告記事の公開'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        className="modalStyle"
        cancelText="キャンセル"
        okText="公開する"
        style={{ borderRadius: '8px' }}
      >
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'記事タイトル'} />}>
            <p>{'マンスリーサポーター30人達成しました'}</p>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'サポーターへの通知'} />}>
            <StyledFormCheckbox>{'記事公開をサポーターに通知する'}</StyledFormCheckbox>
            <p
              style={{
                color: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              {
                'このプロジェクトに支援したサポーター全員に対して、記事公開がメールで通知されます。通知したくない場合はチェックを外してください。'
              }
            </p>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default BlogEditConfirm;
