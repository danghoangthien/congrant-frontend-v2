import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Space, Button } from 'antd';

import {
  SettingsInputContainer,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';

const Login = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'ログイン'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <div className="pa-10">
        <Row className="mb-6">
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
          size={24}
          style={{ display: 'flex' }}
        >
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} />}>
            <Input size="large" placeholder="tanaka@congrant.com" style={{ width: '400px' }} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'パスワード'} />}>
            <Input.Password
              size="large"
              placeholder="＊＊＊＊＊＊＊＊＊＊"
              style={{ width: '400px' }}
            />
          </SettingsInputContainer>
        </Space>

        <Row className="mb-8">
          <Button
            type="primary"
            size="large"
            style={{ fontWeight: '600', width: '100%' }}
            onClick={() => {}}
          >
            {'ログイン'}
          </Button>
        </Row>
        <Row>
          <Link to={'/projects'}>{'パスワードを忘れた方はこちら'}</Link>
        </Row>
      </div>
    </>
  );
};

export default Login;
