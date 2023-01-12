import { useRouteMatch, useHistory } from 'react-router-dom';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Tabs, Space } from 'antd';
import Login from './Login';
import Register from 'app/pages/LoginPage/Register';
// IMAGE
import Logo from 'styles/assets/logo_congrant.svg';

const LoginPage = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  console.log('path', path);

  const onTabClick = key => {
    if (key === '2') {
      history.push('/app/register');
    } else {
      history.push('/app/login');
    }
  };

  const activeKey = path === '/app/login' ? '1' : '2';

  return (
    <>
      <LoginPageLayout>
        <Space className="mb-8" align="center">
          <img className="logo-icon" src={Logo} alt="コングラントロゴ" />
        </Space>
        <div className="login-wrapper">
          <Tabs
            defaultActiveKey={activeKey}
            onTabClick={onTabClick}
            type="card"
            tabBarGutter={4}
            className="login-card"
          >
            <Tabs.TabPane tab={<span style={{ textAlign: 'center' }}>{'ログイン'}</span>} key="1">
              <Login />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span style={{ textAlign: 'center' }}>{'お試し登録'}</span>} key="2">
              <Register />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default LoginPage;
