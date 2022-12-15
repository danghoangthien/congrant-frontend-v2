import React, { useState } from 'react';
import moment from 'moment';
import { Row, Space, Radio, Button, DatePicker, Col } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
} from 'utils/Sprites';
// STYLE
import styled from 'styled-components/macro';
import { StyledModalTitle, StyledModal } from 'styles/Modal.style';
import { PlusOutlined } from '@ant-design/icons';

const StyledForm = styled.div``;

const dateFormat = 'YYYY-MM-DD';

const Form = () => (
  <StyledForm>
    <Row className="item mb-2">
      <SettingsInputContainer label={<SettingLabel label={'発行ステータス'} required />}>
        <Radio.Group onChange={() => {}} defaultValue={1}>
          <Space direction="horizontal">
            <Radio value={1}>{'未発行'}</Radio>
            <Radio value={2}>{'発行済み'}</Radio>
          </Space>
        </Radio.Group>
      </SettingsInputContainer>
      <SettingsInputContainer label={<SettingLabel label={'発行日'} />}>
        <DatePicker
          value={null}
          size="large"
          placeholder={'yyyy-mm-dd'}
          style={{ width: '100%' }}
        />
      </SettingsInputContainer>
      <SettingsInputContainer label={<SettingLabel label={'受領日'} />}>
        <DatePicker
          size="large"
          defaultValue={moment('2020-11-08', dateFormat)}
          format={dateFormat}
          style={{ width: '100%' }}
        />
      </SettingsInputContainer>
      <SettingsInputContainer label={<SettingLabel label={'宛名'} required />}>
        <SettingInput value={'田中太郎'} />
      </SettingsInputContainer>
      <SettingsInputContainer label={<SettingLabel label={'住所'} />}>
        <Row className="mb-2">
          <SettingSelect value={'日本'}></SettingSelect>
        </Row>
        <Row className="mb-2">
          <Space>
            <SettingInput value={'5500002'} prefix={'〒'} style={{ width: '100%' }} />
            <SettingSelect style={{ width: '215px' }} value={'大阪府'} disabled></SettingSelect>
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
      <SettingsInputContainer label={<SettingLabel label={'モート'} />}>
        <SettingTextarea value={'標準領収書'} rows={5} />
      </SettingsInputContainer>
    </Row>
    <Row className="item mt-10">
      <Col sm={24} md={24} lg={24} align="center">
        <Button size="large" className="active" type="primary" style={{ width: '100%' }}>
          <span className="ml-2">{'登録する'}</span>
        </Button>
      </Col>
    </Row>
  </StyledForm>
);
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
      <StyledModal
        title={<StyledModalTitle className="modal-title">{'領収書の新規作成'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={480}
        className="modalStyle"
        footer={null}
        closeIcon={<span className="material-symbols-outlined">close</span>}
      >
        <Form />
      </StyledModal>
    </>
  );
};

export default NewReceipt;
