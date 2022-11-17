import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Tabs, Space } from 'antd';
import Login from './Login';
import TrialRegistration from './TrialRegistration';
// Icons
import LogoText from 'styles/assets/logo_text.svg';
import LogoIcon from 'styles/assets/logo_icon.svg';

const LoginPage = () => {
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
          <Tabs defaultActiveKey="1" type="card">
            <Tabs.TabPane tab={<span style={{ textAlign: 'center' }}>{'ログイン'}</span>} key="1">
              <Login />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span style={{ textAlign: 'center' }}>{'お試し登録'}</span>} key="2">
              <TrialRegistration />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default LoginPage;
