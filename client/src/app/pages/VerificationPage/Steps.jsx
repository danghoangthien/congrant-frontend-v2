import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Card, Space, Tabs, Tag, Button } from 'antd';
import './Models/index';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { PRIMARY_COLOR } from 'styles/StyleConstants';
// IMAGE
import { LogoBox } from './components/Logo';
import DoneIcon from '@mui/icons-material/Done';

const StyledTag = styled(Tag)`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  border-color: #d9d9d7;
  font-weight: 600;
  font-size: 16px;
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    border-bottom: none !important;
  }
  .ant-tabs-tab {
    border: none !important;
    background: none !important;
  }
  .ant-tabs-card {
    .ant-tabs-nav .ant-tabs-tab {
      background: none;
    }
  }
`;

const RegisterStepsPage = () => {
  const { active, completed } = useSelector(state => state['registerStep']);
  const TabName = ({ current, active, children }) => {
    const color = current === active ? PRIMARY_COLOR : '#D9D9D7';
    const isCurrentTabCompleted = completed.includes(current);
    return (
      <Space size={16}>
        <StyledTag color={color}>{isCurrentTabCompleted ? <DoneIcon /> : current}</StyledTag>
        {children}
      </Space>
    );
  };

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
        <LogoBox />

        <Card className="login-card" bodyStyle={{ padding: '40px' }} style={{ width: '680px' }}>
          <Row className="usage-wrapper mb-8">
            <StyledTabs activeKey={active} type="card" moreIcon={null}>
              <Tabs.TabPane
                tab={
                  <TabName current="1" active={active}>
                    {'団体情報'}
                  </TabName>
                }
                key="1"
              >
                <Step1 />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <TabName current="2" active={active}>
                    {'管理者情報'}
                  </TabName>
                }
                key="2"
              >
                <Step2 />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <TabName current="3" active={active}>
                    {'代表者情報'}
                  </TabName>
                }
                key="3"
              >
                <Step3 />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <TabName current="4" active={active}>
                    {'口座情報'}
                  </TabName>
                }
                key="4"
              >
                <Step4 />
              </Tabs.TabPane>
            </StyledTabs>
          </Row>
          <Row>
            <Button
              className="link-btn"
              type="link"
              style={{ boxShadow: 'none' }}
              onClick={() => {}}
            >
              {'まずは管理画面を試したい（審査をスキップ）'}
            </Button>
          </Row>
        </Card>
      </LoginPageLayout>
    </>
  );
};

export default RegisterStepsPage;
