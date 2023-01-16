import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Row, Card, Input, Button, Col } from 'antd';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';

const Login = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'運営管理ログイン'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <LoginPageLayout>
      {renderPageTitle()}
      <div style={{ width: '100%', maxWidth: 480 }}>
        <Card className="login-card mb-6" bodyStyle={{ padding: '40px' }}>
          <Row className="mb-6">
            <Col sm={24} md={24} lg={24} type="flex" align="center">
              <span className="page-sub-title" style={{ fontSize: '28px' }}>
                {'運営管理ログイン'}
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
              {'ワンタイムパスワード送信'}
            </Button>
          </Row>
        </Card>
      </div>
    </LoginPageLayout>
  );
};

export default Login;
