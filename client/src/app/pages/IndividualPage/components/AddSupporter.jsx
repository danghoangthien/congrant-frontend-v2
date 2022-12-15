import { useState } from 'react';
import { Link } from 'react-router-dom';
// ANTD
import { Row, Col, Button, Radio, Checkbox, Space, DatePicker } from 'antd';
// COMPONENT
import { SettingsInputContainer, SettingLabel, SettingInput, SettingSelect } from 'utils/Sprites';
// STYLE
import styled from 'styled-components/macro';
import { StyledModalTitle, StyledModal } from 'styles/Modal.style';

const StyledForm = styled.div`
  padding: 22px 32px;
`;

const Form = () => (
  <StyledForm>
    <Row className="item mb-6">
      <span>
        {'一括アップロードは'}
        <Link to={'test'}>{'こちら'}</Link>
        {'から'}
      </span>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'氏名'} />}>
        <Space className="input-wrapper" size={16}>
          <SettingInput />
          <SettingInput />
        </Space>
      </SettingsInputContainer>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'ふりがな'} />}>
        <Space className="input-wrapper" size={16}>
          <SettingInput />
          <SettingInput />
        </Space>
      </SettingsInputContainer>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'広報物への掲載'} />}>
        <Checkbox checked>{'許可する'}</Checkbox>
      </SettingsInputContainer>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'性別'} />}>
        <Radio.Group onChange={() => {}} value={1}>
          <Radio value={1}>{'男性'}</Radio>
          <Radio value={2}>{'女性'}</Radio>
          <Radio value={3}>{'その他'}</Radio>
          <Radio value={4}>{'無回答'}</Radio>
        </Radio.Group>
      </SettingsInputContainer>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'生年月日'} />}>
        <DatePicker size="large" placeholder={'yyyy-mm-dd'} style={{ width: '100%' }} />
      </SettingsInputContainer>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
        <SettingInput placeholder={'tanaka@gmail.com'} />
      </SettingsInputContainer>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'電話番号'} />}>
        <SettingInput placeholder={'08000000000'} />
      </SettingsInputContainer>
    </Row>
    <Row className="item mb-6">
      <SettingsInputContainer label={<SettingLabel label={'住所'} />}>
        <Col className="item mb-4" sm={24} md={24} lg={24}>
          <SettingSelect size="large" value={'日本'}></SettingSelect>
        </Col>
        <Col className="item mb-4" sm={24} md={24} lg={24}>
          <Space size={16} className="input-wrapper">
            <SettingInput
              addonBefore="〒"
              placeholder={'0000000'}
              style={{ width: '100%', padding: 0 }}
            />
            <SettingInput disabled placeholder={'都道府県'} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col className="mb-4" sm={24} md={24} lg={24}>
          <SettingInput placeholder={'市区町村'} />
        </Col>
        <Col className="mb-4" sm={24} md={24} lg={24}>
          <SettingInput placeholder={'番地・建物名・部屋番号'} />
        </Col>
        <Col sm={24} md={24} lg={24}>
          <Checkbox>{'郵送物の送付先を別途指定する'}</Checkbox>
        </Col>
      </SettingsInputContainer>
    </Row>
    <Row className="mb-6">
      <SettingsInputContainer label={<SettingLabel label={'郵送物の送付'} />}>
        <Checkbox checked>{'許可する'}</Checkbox>
      </SettingsInputContainer>
    </Row>
    <Row className="mb-6">
      <SettingsInputContainer label={<SettingLabel label={'郵送物数'} />}>
        <SettingInput placeholder={'1'} suffix="部" />
      </SettingsInputContainer>
    </Row>
    <Row className="mb-6">
      <SettingsInputContainer label={<SettingLabel label={'属性'} />}>
        <SettingSelect size="large" placeholder={'選択してください'} />
      </SettingsInputContainer>
    </Row>
    <Row className="mb-4">
      <Col sm={24} md={24} lg={24}>
        <span className="page-sub-title">{'カスタム項目'}</span>
      </Col>
    </Row>
    <Row className="mb-6">
      <SettingsInputContainer label={<SettingLabel label={'お子様のお名前'} />}>
        <SettingInput placeholder={'入力してください'} />
      </SettingsInputContainer>
    </Row>
    <Row className="item">
      <Col sm={24} md={24} lg={24} align="center">
        <Button
          size="large"
          className="active"
          type="primary"
          style={{ width: '100%', fontWeight: '600' }}
        >
          <span>{'登録する'}</span>
        </Button>
      </Col>
    </Row>
  </StyledForm>
);

const AddSupporter = () => {
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
      <Button onClick={showModal} className="active icon-btn" type="primary">
        <span className="material-symbols-outlined">add</span>
        <span>{'個人サポーターの登録'}</span>
      </Button>

      {/* 個人サポーターの新規登録モーダル・Add Supporter Modal */}
      <StyledModal
        title={
          <StyledModalTitle className="modal-title">{'個人サポーターの新規登録'}</StyledModalTitle>
        }
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={480}
        footer={null}
        closeIcon={<span className="material-symbols-outlined">close</span>}
      >
        <Form />
      </StyledModal>
    </>
  );
};

export default AddSupporter;
