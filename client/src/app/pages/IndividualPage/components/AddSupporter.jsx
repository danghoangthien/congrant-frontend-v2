import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Checkbox, Space, DatePicker } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
} from 'app/pages/CorporationSettingPage/components/Sprites';
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
        <span className="ml-2">{'個人サポーターの登録'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'個人サポーターの新規登録'}</StyledModalTitle>}
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
          <SettingsInputContainer label={<SettingLabel label={'氏名'} />}>
            <Space direction="horizontal">
              <SettingInput style={{ width: '295px' }} />
              <SettingInput style={{ width: '295px' }} />
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'ふりがな'} />}>
            <Space direction="horizontal">
              <SettingInput style={{ width: '295px' }} />
              <SettingInput style={{ width: '295px' }} />
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'広報物への掲載)'} />}>
            <Radio.Group onChange={() => {}} value={1}>
              <Radio value={1}>{'男性'}</Radio>
              <Radio value={2}>{'女性'}</Radio>
              <Radio value={3}>{'その他'}</Radio>
              <Radio value={4}>{'無回答'}</Radio>
            </Radio.Group>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
            <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '600px' }} />
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
          <SettingsInputContainer label={<SettingLabel label={'住所'} />}>
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
          <SettingsInputContainer label={<SettingLabel label={'性別'} />}>
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
            <span className="page-sub-title">{'名寄せ先の選択'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'属性'} />}>
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
