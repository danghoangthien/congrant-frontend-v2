import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Input, Space, Tabs, Tag, Button } from 'antd';
import './Models/index';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
} from 'app/pages/CorporationSettingPage/components/Sprites';
import { PRIMARY_COLOR } from 'styles/StyleConstants';

// Icons
import LogoText from 'styles/assets/logo_text.svg';
import LogoIcon from 'styles/assets/logo_icon.svg';

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
  const { active } = useSelector(state => state['registerStep']);
  const TabName = ({ current, active, children }) => {
    const color = current === active ? PRIMARY_COLOR : '#D9D9D7';
    return (
      <Space>
        <StyledTag color={color}>{current}</StyledTag>
        {children}
      </Space>
    );
  };
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
          <Row className="mb-2">
            <Space
              className="mb-2 px-10 py-5"
              direction="vertical"
              align="center"
              size="middle"
              style={{ display: 'flex' }}
            >
              <StyledTabs
                activeKey={active}
                type="card"
                tabBarGutter={4}
                className="mt-6"
                moreIcon={null}
              >
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
            </Space>
          </Row>
        </div>
        <Space>
          <Button style={{ width: '700px', textAlign: 'end' }} type="link" onClick={() => {}}>
            {'まずは管理画面を試したい（審査をスキップ）'}
          </Button>
        </Space>
      </LoginPageLayout>
    </>
  );
};

export default RegisterStepsPage;
