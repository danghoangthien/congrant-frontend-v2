import { Row, Col, Input, Space, Radio, Tag, Button } from 'antd';

import {
  SettingsInputContainer,
  SettingLabel,
} from 'app/pages/GroupSettingsPage/components/Sprites';

const Login = () => {
  return (
    <div className="item pa-10">
      <Row className="mb-2">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <span className="page-sub-title" style={{ fontSize: '28px' }}>
            {'ログイン'}
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
        <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} />}>
          <Input placeholder="tanaka@congrant.com" style={{ width: '400px' }} />
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'パスワード'} />}>
          <Input type="password" placeholder="＊＊＊＊＊＊＊＊＊＊" style={{ width: '400px' }} />
        </SettingsInputContainer>
        <Button type="primary" style={{ width: '400px' }} onClick={() => {}}>
          {'ログイン'}
        </Button>
        <Col sm={24} md={24} lg={24} type="flex" align="left">
          <Button
            style={{ width: '400px', textAlign: 'left', paddingLeft: '0px' }}
            type="link"
            onClick={() => {}}
          >
            {'パスワードを忘れた方はこちら'}
          </Button>
        </Col>
      </Space>
      <Row className="mb-2"></Row>
    </div>
  );
};

export default Login;
