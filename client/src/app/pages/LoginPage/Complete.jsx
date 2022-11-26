import { Helmet } from 'react-helmet-async';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Space, Button, Card, Col } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

// IMAGE
import Logo from 'styles/assets/logo_congrant.svg';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';

const RegisterCompletePage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'コングラントIDの登録'}</title>
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

        <Card style={{ width: '600px' }} className="login-card" bodyStyle={{ padding: '40px' }}>
          <Row justify="center">
            <Col style={{ width: '400px' }}>
              <Row>
                <Col className="mb-4" span={24}>
                  <Row justify="center">
                    <div className="page-title">{'コングラントIDの登録'}</div>
                  </Row>
                </Col>
                <Col className="mb-8" span={24}>
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: '300',
                      textAlign: 'center',
                      lineHeight: '1.5',
                    }}
                  >
                    仮登録が完了しました。
                    <br />
                    はじめに、コングラントIDを登録してください。
                    <br />
                    <span style={{ color: DANGER_COLOR }}>※登録後の変更はできません</span>
                  </div>
                </Col>
                <Col span={24} className="mb-2">
                  <SettingsInputContainer
                    label={<SettingLabel label={'コングラントID（半角英数3文字以上）'} required />}
                  >
                    <SettingInput size="large" placeholder={'abczaidan'} />
                  </SettingsInputContainer>
                </Col>
                <Col className="mb-4" span={24}>
                  <SettingsInputContainer
                    label={
                      <SettingLabel
                        label={
                          <div style={{ fontWeight: '300', color: TEXT_GRAY_COLOR }}>
                            {'コングラントIDはプロジェクトページのURLの一部になります。'}
                            {
                              '団体名の略語などを登録してください。例）https://congrant.com/abczaidan/XXXXX'
                            }
                          </div>
                        }
                      />
                    }
                  />
                </Col>
                <Col span={24}>
                  <SettingsInputContainer>
                    <Button
                      size="large"
                      type="primary"
                      style={{ fontWeight: '600', width: '100%' }}
                      onClick={() => {}}
                    >
                      {'登録する（登録後の変更不可）'}
                    </Button>
                  </SettingsInputContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </LoginPageLayout>
    </>
  );
};

export default RegisterCompletePage;
