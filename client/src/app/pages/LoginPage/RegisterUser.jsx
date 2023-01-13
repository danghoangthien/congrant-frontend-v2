import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Input, Space, Checkbox, Card, Button } from 'antd';
// IMAGE
import Logo from 'styles/assets/logo_congrant.svg';
// SPIRTE
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';

const RegisterUser = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'コングラントユーザー登録'}</title>
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
              <Col className="mb-4" span={24} type="flex" align="center">
                <span style={{ fontSize: 28, fontWeight: 600 }}>{'コングラントユーザー登録'}</span>
              </Col>
              <Col span={24} type="flex" align="center" style={{ lineHeight: 1.5 }}>
                <div>
                  認定NPO法人＊＊＊＊＊の田中太郎様から
                  <br />
                  コングラントへの招待が届きました。
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-6" span={24}>
                <SettingsInputContainer label={<SettingLabel label={'あなたのお名前'} />}>
                  <Space size={16}>
                    <Input size="large" placeholder="姓" />
                    <Input size="large" placeholder="名" />
                  </Space>
                </SettingsInputContainer>
              </Col>
              <Col className="mb-6" span={24}>
                <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} />}>
                  <Input size="large" disabled value="araki@congrant.com" />
                </SettingsInputContainer>
              </Col>
              <Col className="mb-6" span={24}>
                <SettingsInputContainer label={<SettingLabel label={'パスワード'} />}>
                  <Input.Password size="large" placeholder="＊＊＊＊＊＊＊＊＊＊" />
                </SettingsInputContainer>
              </Col>
              <Col className="mb-6" span={24}>
                <SettingsInputContainer>
                  <Checkbox>
                    <Link to={'/'}>利用規約・プライバシーポリシー</Link>
                    {'に同意する'}
                  </Checkbox>
                </SettingsInputContainer>
              </Col>
            </Row>
            <Row>
              <Link to="/app/login" style={{ width: '100%' }}>
                <Button type="primary" size="large" style={{ width: '100%', fontWeight: 600 }}>
                  {'登録してログイン'}
                </Button>
              </Link>
            </Row>
          </Card>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default RegisterUser;
