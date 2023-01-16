import React from 'react';
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
          <title>{'2段階認証'}</title>
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
            <Row>
              <Col className="mb-4" span={24}>
                <Row justify="center">
                  <div className="page-title">{'2段階認証'}</div>
                </Row>
              </Col>
              <Space className="mb-6" size={16}>
                <SettingInput
                  placeholder="0"
                  maxLength={1}
                  name="field-1"
                  length="1"
                  onChange={handleChange}
                />
                <SettingInput
                  placeholder={'0'}
                  maxLength={1}
                  name="field-2"
                  length="1"
                  onChange={handleChange}
                />
                <SettingInput
                  placeholder={'0'}
                  maxLength={1}
                  name="field-3"
                  length="1"
                  onChange={handleChange}
                />
                <SettingInput
                  placeholder={'0'}
                  maxLength={1}
                  name="field-4"
                  length="1"
                  onChange={handleChange}
                />
              </Space>
              <Button
                size="large"
                type="primary"
                className="mb-4"
                style={{ width: '100%', fontWeight: '600' }}
                onClick={() => {
                  history.push(`/app/register/complete`);
                }}
              >
                {'ログイン'}
              </Button>
              <Col span={24}>
                <Row justify="left">
                  <span type="link" class="ant-btn-link">
                    {'コード再送'}
                  </span>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default EmailVerify;
