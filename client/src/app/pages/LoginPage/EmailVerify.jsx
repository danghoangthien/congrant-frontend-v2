import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout, StyledVericationBox } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Input, Space, Radio, Tag, Button } from 'antd';
// Icons
import LogoText from 'styles/assets/logo_text.svg';
import LogoIcon from 'styles/assets/logo_icon.svg';

const EmailVerify = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{''}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <LoginPageLayout>
        <Space className="mb-5" align="center">
          <img className="logo-icon" src={LogoIcon} alt="コングラントロゴ" />
          <img className="logo-text" src={LogoText} alt="コングラントロゴ" />
        </Space>
        <div className="item login-container">
          <Row className="mb-2">
            <Space
              className="mb-10 pa-10"
              direction="vertical"
              align="center"
              size="middle"
              style={{ display: 'flex' }}
            >
              <span className="page-sub-title" style={{ fontSize: '28px' }}>
                {'メールアドレス認証'}
              </span>
              <p style={{ textAlign: 'center', width: '375px' }}>
                {'登録いただいたメールアドレス宛に認証コードをお送りしました。'}
                <br />
                {'認証コードを入力して登録を完了させてください。'}
              </p>
              <Space className="mb-5">
                <StyledVericationBox>
                  <div className="verification-number">0</div>
                </StyledVericationBox>
                <StyledVericationBox>
                  <div className="verification-number">0</div>
                </StyledVericationBox>
                <StyledVericationBox>
                  <div className="verification-number">0</div>
                </StyledVericationBox>
                <StyledVericationBox>
                  <div className="verification-number">0</div>
                </StyledVericationBox>
              </Space>
              <Button type="primary" style={{ width: '375px' }} onClick={() => {}}>
                {'認証'}
              </Button>
            </Space>
          </Row>
        </div>
        <Space>
          <Button style={{ width: '400px', textAlign: 'end' }} type="link" onClick={() => {}}>
            {'パスワードを忘れた方はこちら'}
          </Button>
        </Space>
      </LoginPageLayout>
    </>
  );
};

export default EmailVerify;
