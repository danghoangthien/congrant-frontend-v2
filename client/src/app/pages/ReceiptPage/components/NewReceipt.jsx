import React, { useState } from 'react';
import moment from 'moment';
import { Row, Space, Modal, Button, DatePicker } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { PlusOutlined } from '@ant-design/icons';

const dateFormat = 'YYYY-MM-DD';

const NewReceipt = ({ title }) => {
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
      <Button
        onClick={e => {
          e.stopPropagation();
          showModal();
        }}
        type="primary"
      >
        <PlusOutlined className="display-inline-flex" />
        <span>{'作成する'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'領収書の新規作成'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="送信する"
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'発行ステータス'} />}>
            <SettingSelect value={'未発行'}></SettingSelect>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'発行日時'} />}>
            <DatePicker defaultValue={moment('2020-11-08', dateFormat)} format={dateFormat} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'受領日'} />}>
            <DatePicker defaultValue={moment('2020-11-08', dateFormat)} format={dateFormat} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'宛名'} />}>
            <SettingInput value={'田中太郎'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'住所'} />}>
            <Row className="mb-2">
              <SettingSelect value={'日本'}></SettingSelect>
            </Row>
            <Row className="mb-2">
              <Space>
                <SettingInput value={'5500002'} prefex={'〒'} style={{ width: '100%' }} />
                <SettingSelect style={{ width: '280px' }} value={'大阪府'} disabled></SettingSelect>
              </Space>
            </Row>
            <Row className="mb-2">
              <SettingInput value={'大阪市西区江戸堀'} />
            </Row>
            <Row>
              <SettingInput value={'1-2-3 ＊＊＊＊＊マンション301号室'} />
            </Row>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'テンプレート'} />}>
            <SettingSelect value={'標準領収書'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'テンプレメモート'} />}>
            <SettingTextarea value={'標準領収書'} />
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default NewReceipt;
