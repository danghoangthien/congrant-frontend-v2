import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Row, Card, Input, Button, Col } from 'antd';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';
import styled from 'styled-components/macro';
import { PRIMARY_ADMIN_COLOR } from 'styles/StyleConstants';

export const StyledButton = styled(Button)`
  width: 100%;
  font-weight: 600;
  background: ${PRIMARY_ADMIN_COLOR};
  border-color: ${PRIMARY_ADMIN_COLOR};

  &:hover,
  &:focus {
    opacity: 0.8;
    background: ${PRIMARY_ADMIN_COLOR};
    border-color: ${PRIMARY_ADMIN_COLOR};
  }
`;

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
            <StyledButton type="primary" size="large" onClick={() => {}}>
              {'ワンタイムパスワード送信'}
            </StyledButton>
          </Row>
        </Card>
      </div>
    </LoginPageLayout>
  );
};

export default Login;
