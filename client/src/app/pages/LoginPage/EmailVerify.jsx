import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { LoginPageLayout, StyledVericationBox } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Space, Card, Button } from 'antd';
// Images
import Logo from 'styles/assets/logo_congrant.svg';

const SettingInput = ({ placeholder, ...rest }) => (
  <StyledVericationBox placeholder={placeholder} {...rest} />
);

const EmailVerify = () => {
  const history = useHistory();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'メールアドレス認証'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <LoginPageLayout>
        <Space className="mb-8" align="center">
          <img className="logo-icon" src={Logo} alt="コングラントロゴ" />
        </Space>

        <Card className="login-card" bodyStyle={{ padding: '40px' }}>
          <Row className="mb-8">
            <Col className="mb-4" span={24}>
              <Row justify="center">
                <div className="page-title">{'メールアドレス認証'}</div>
              </Row>
            </Col>
            <Col className="mb-8" span={24}>
              <div style={{ fontSize: '16px', textAlign: 'center', lineHeight: '1.5' }}>
                登録いただいたメールアドレス宛に認証コードを
                <br />
                お送りしました。
                <br />
                認証コードを入力して登録を完了させてください。
              </div>
            </Col>
            <Space className="mb-6" size={16}>
              <SettingInput placeholder={'0'} />
              <SettingInput placeholder={'0'} />
              <SettingInput placeholder={'0'} />
              <SettingInput placeholder={'0'} />
            </Space>
            <Button
              size="large"
              type="primary"
              style={{ width: '100%', fontWeight: '600' }}
              onClick={() => {
                history.push(`/register/complete`);
              }}
            >
              認証
            </Button>
          </Row>
          <Link to={`/register`} style={{ fontWeight: '300' }}>
            {'認証コードを再送する'}
          </Link>
        </Card>
      </LoginPageLayout>
    </>
  );
};

export default EmailVerify;
