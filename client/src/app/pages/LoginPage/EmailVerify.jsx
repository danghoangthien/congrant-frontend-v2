import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { LoginPageLayout, StyledVericationBox } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Space, Card, Button } from 'antd';
// Images
import Logo from 'styles/assets/logo_congrant.svg';

// Number of input fields that make up SSN
// const numOfFields = 4;

// const useSSNFields = () => {
//   const [ssnValues, setValue] = React.useState({
//     ssn1: '',
//     ssn2: '',
//     ssn3: '',
//   });

//   return {
//     handleChange: e => {
//       console.log('handleChange');
//       const { maxLength, value, name } = e.target;
//       const [fieldIndex] = name.split('-');
//       console.log(fieldIndex);

//       // Check if they hit the max character length
//       if (value.length >= maxLength) {
//         console.log('11111');
//         console.log(parseInt(fieldIndex, 10));
//         // Check if it's not the last input field
//         if (parseInt(fieldIndex, 10) < numOfFields) {
//           console.log('22222');
//           // Get the next input field
//           const nextSibling = document.querySelector(
//             `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`,
//           );
//           console.log(nextSibling);

//           // If found, focus the next field
//           if (nextSibling !== null) {
//             console.log('aaaaa');
//             nextSibling.focus();
//           }
//         }
//       }

//       setValue({
//         ...value,
//         [`ssn${fieldIndex}`]: value,
//       });
//     },
//   };
// };

const SettingInput = ({ placeholder, ...rest }) => (
  <StyledVericationBox placeholder={placeholder} {...rest} />
);

const EmailVerify = () => {
  const history = useHistory();
  // const { handleChange } = useSSNFields();
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
