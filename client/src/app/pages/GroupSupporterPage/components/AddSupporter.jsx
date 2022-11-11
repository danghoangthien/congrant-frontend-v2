import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Checkbox, Space, DatePicker } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
} from 'app/pages/GroupSettingsPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { PlusOutlined } from '@ant-design/icons';

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
      <Button onClick={showModal} className="active ml-2" type="primary">
        <PlusOutlined className="display-inline-flex" />
        <span className="ml-2">{'法人サポーターの登録'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'法人サポーターの新規登録'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        footer={null}
      >
        <Row className="item mb-2">
          <span>
            {'一括アップロードは'}
            <Button type="link">{'こちら'}</Button>
            {'から'}
          </span>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'法人名'} required />}>
            <SettingInput placeholder={'コングラント株式会社'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'法人名（ふりがな）'} required />}>
            <SettingInput placeholder={'コングラント株式会社'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'担当者名'} required />}>
            <Space direction="horizontal">
              <SettingInput style={{ width: '295px' }} />
              <SettingInput style={{ width: '295px' }} />
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'担当者名（ふりがな）'} />}>
            <Space direction="horizontal">
              <SettingInput style={{ width: '295px' }} />
              <SettingInput style={{ width: '295px' }} />
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'広報物への掲載'} />}>
            <Checkbox checked>{'許可する'}</Checkbox>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
            <SettingInput placeholder={'例：03-1234-5678'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'登記番号'} required />}>
            <SettingInput placeholder={'例：03-1234-5678'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'所在地'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingSelect value={'日本'}></SettingSelect>
            </Col>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput addonBefore="〒" placeholder={'0000000'} style={{ width: '295px' }} />
                <SettingInput disabled placeholder={'都道府県'} style={{ width: '295px' }} />
              </Space>
            </Col>
            <Col className="item my-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'市区町村'} />
              </Space>
            </Col>
            <Col className="item my-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'番地・建物名・部屋番号'} />
              </Space>
            </Col>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox>{'郵送物の送付先を別途指定する'}</Checkbox>
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'郵送物の送付'} />}>
            <Checkbox checked>{'許可する'}</Checkbox>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'郵送物数'} />}>
            <SettingInput placeholder={'選択してください'} suffix="部" />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'属性'} />}>
            <SettingInput placeholder={'1'} />
          </SettingsInputContainer>
        </Row>
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'カスタム項目'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'代表者名'} />}>
            <SettingInput placeholder={'入力してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'代表者名（ふりがな）'} />}>
            <SettingInput placeholder={'入力してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mt-15">
          <Col sm={24} md={24} lg={24} align="center">
            <Button className="active" type="primary" style={{ width: '100%' }}>
              <span className="ml-2">{'登録する'}</span>
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AddSupporter;
