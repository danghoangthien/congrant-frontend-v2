import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { LoginPageLayout, StyledVericationBox } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Space, Card, Button } from 'antd';
// Images
import Logo from 'styles/assets/logo_congrant.svg';

// Number of input fields that make up SSN
const numOfFields = 4;

const useSSNFields = () => {
  const [ssnValues, setValue] = React.useState({
    ssn1: '',
    ssn2: '',
    ssn3: '',
  });

  return {
    handleChange: e => {
      const { maxLength, value, name } = e.target;
      const [fieldIndex] = name.split('-');

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < numOfFields) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`,
          );

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value,
      });
    },
  };
};

const SettingInput = ({ placeholder, ...rest }) => (
  <StyledVericationBox placeholder={placeholder} {...rest} />
);

const EmailVerify = () => {
  const history = useHistory();
  const { handleChange } = useSSNFields();

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
                <SettingInput
                  placeholder={'0'}
                  name="ssn-1"
                  maxLength={1}
                  onChange={handleChange}
                />
                <SettingInput
                  placeholder={'0'}
                  name="ssn-2"
                  maxLength={1}
                  onChange={handleChange}
                />
                <SettingInput
                  placeholder={'0'}
                  name="ssn-3"
                  maxLength={1}
                  onChange={handleChange}
                />
                <SettingInput
                  placeholder={'0'}
                  name="ssn-4"
                  maxLength={1}
                  onChange={handleChange}
                />
              </Space>
              <Button
                size="large"
                type="primary"
                style={{ width: '100%', fontWeight: '600' }}
                onClick={() => {
                  history.push(`/app/register/complete`);
                }}
              >
                認証
              </Button>
            </Row>
          </Card>
          <Row justify="end" style={{ width: '100%' }}>
            <Link to={`/app/register`} style={{ fontWeight: '300' }}>
              {'認証コードを再送する'}
            </Link>
          </Row>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default EmailVerify;
