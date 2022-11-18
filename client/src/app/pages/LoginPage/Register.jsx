import { Row, Col, Input, Space, Checkbox, Tag, Button } from 'antd';

import {
  SettingsInputContainer,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';

const Register = () => {
  return (
    <div className="item pa-10">
      <Row className="mb-2">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <span className="page-sub-title" style={{ fontSize: '28px' }}>
            {'お試し登録'}
          </span>
        </Col>
      </Row>
      <Space
        className="mb-10"
        direction="vertical"
        align="center"
        size="middle"
        style={{ display: 'flex' }}
      >
        <SettingsInputContainer label={<SettingLabel label={'団体名'} />}>
          <Input placeholder="tanaka@congrant.com" style={{ width: '400px' }} />
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'担当者名'} />}>
          <Space>
            <Input placeholder="姓" style={{ width: '195px' }} />
            <Input placeholder="名" style={{ width: '195px' }} />
          </Space>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'パスワード'} />}>
          <Input type="password" placeholder="＊＊＊＊＊＊＊＊＊＊" style={{ width: '400px' }} />
        </SettingsInputContainer>
        <SettingsInputContainer>
          <Checkbox checked style={{ width: '400px' }}>
            {'利用規約・プライバシーポリシーに同意する'}
          </Checkbox>
        </SettingsInputContainer>
        <Button type="primary" style={{ width: '400px' }} onClick={() => {}}>
          {'お試し登録'}
        </Button>
      </Space>
      <Row className="mb-2"></Row>
    </div>
  );
};

export default Register;
