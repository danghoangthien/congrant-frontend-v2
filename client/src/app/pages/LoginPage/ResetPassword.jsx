import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { LoginPageLayout, StyledVericationBox } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Space, Card, Button, Input } from 'antd';
// SPRITE
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';
// Images
import Logo from 'styles/assets/logo_congrant.svg';

const SettingInput = ({ placeholder, ...rest }) => (
  <StyledVericationBox placeholder={placeholder} {...rest} />
);

const ResetPassword = () => {
  const history = useHistory();
  const handleChange = e => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split('-');
    console.log(fieldName);
    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 5) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(`input[name=field-${fieldIntIndex + 1}]`);

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

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

        <div style={{ width: '100%', maxWidth: 480 }}>
          <Card className="login-card mb-6" bodyStyle={{ padding: '40px' }}>
            <Row className="mb-8">
              <Col className="mb-4" span={24}>
                <Row justify="center">
                  <div className="page-title">{'パスワードを忘れた方'}</div>
                </Row>
              </Col>
              <Col className="mb-8" span={24}>
                <div style={{ fontSize: '16px', textAlign: 'center', lineHeight: '1.5' }}>
                  アカウントに登録されているメールアドレスを入力してください。再設定メールを送信します。
                </div>
              </Col>
              <Col className="mb-6" span={24}>
                <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} />}>
                  <Input size="large" placeholder="tanaka@congrant.com" style={{ width: '100%' }} />
                </SettingsInputContainer>
              </Col>
              <Col span={24} className="mb-6">
                <Button size="large" type="primary" style={{ width: '100%', fontWeight: '600' }}>
                  パスワード再設定メールを送信
                </Button>
              </Col>
              <Col span={24}>
                <Link to={`/app/login`} style={{ fontWeight: '300' }}>
                  {'ログイン画面'}
                </Link>
              </Col>
            </Row>
          </Card>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default ResetPassword;
