import styled from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Space, Card, Tag, Button } from 'antd';

import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';
// IMAGE
import Logo from 'styles/assets/logo_congrant.svg';

const StyledTag = styled(Tag)`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.5);
`;

const RegisterPage = () => {
  const history = useHistory();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'利用審査'}</title>
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

        <div style={{ width: '600px' }}>
          <Card
            className="login-card mb-6"
            style={{ width: '100%' }}
            bodyStyle={{ padding: '40px' }}
          >
            <Row justify="center">
              <Col className="mb-4" span={24}>
                <Row justify="center">
                  <div className="page-title">{'利用審査'}</div>
                </Row>
              </Col>
              <Col className="mb-8" span={24}>
                <div style={{ fontSize: '16px', textAlign: 'center', lineHeight: '1.5' }}>
                  次は利用審査を行います。
                  <br />
                  コングラントで寄付募集を開始するには以下の審査情報の入力が必要です。
                </div>
              </Col>
              <Col style={{ width: '400px' }}>
                <Row>
                  <Col className="mb-4" span={12}>
                    <Space size={16}>
                      <StyledTag style={{ marginRight: 0 }}>{'1'}</StyledTag>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: TEXT_GRAY_COLOR }}>
                        {'団体情報'}
                      </div>
                    </Space>
                  </Col>
                  <Col className="mb-4" span={12}>
                    <Space size={16}>
                      <StyledTag style={{ marginRight: 0 }}>{'2'}</StyledTag>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: TEXT_GRAY_COLOR }}>
                        {'代表者情報'}
                      </div>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space size={16}>
                      <StyledTag style={{ marginRight: 0 }}>{'3'}</StyledTag>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: TEXT_GRAY_COLOR }}>
                        {'管理者情報'}
                      </div>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space size={16}>
                      <StyledTag style={{ marginRight: 0 }}>{'4'}</StyledTag>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: TEXT_GRAY_COLOR }}>
                        {'口座情報'}
                      </div>
                    </Space>
                  </Col>
                  <Col span={24} className="mt-6">
                    <Button
                      size="large"
                      type="primary"
                      style={{ fontWeight: '600', width: '100%' }}
                      onClick={() => {
                        history.push(`/app/verification/organisation`);
                      }}
                    >
                      {'審査情報の入力に進む'}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          <Row justify="end" style={{ width: '100%' }}>
            <Link style={{ fontSize: 14 }} to={`/`}>
              {'まずは管理画面を試したい（審査をスキップ）'}
            </Link>
          </Row>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default RegisterPage;
