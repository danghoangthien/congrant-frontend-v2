import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button } from 'antd';

import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';

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

        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} />}>
            <Input size="large" placeholder="tanaka@congrant.com" style={{ width: '100%' }} />
          </SettingsInputContainer>
        </Row>
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'パスワード'} />}>
            <Input.Password
              size="large"
              placeholder="＊＊＊＊＊＊＊＊＊＊"
              style={{ width: '100%' }}
            />
          </SettingsInputContainer>
        </Row>

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
          <Link to={'/app/projects'}>{'パスワードを忘れた方はこちら'}</Link>
        </Row>
      </div>
    </>
  );
};

export default Login;
