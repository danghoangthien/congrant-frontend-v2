import { Layout } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledSidebar, SlyledLayout } from './Layout.style';
import { Row, Col, Button } from 'antd';
import {
  PayCircleOutlined,
  HeartOutlined,
  PlaySquareOutlined,
  InfoCircleOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const CollapseIcon = ({ collapsed, ...props }) => {
  return (
    <>
      {collapsed ? (
        <MenuUnfoldOutlined {...{ ...props }} />
      ) : (
        <MenuFoldOutlined {...{ ...props }} />
      )}
    </>
  );
};

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <SlyledLayout>
        <Layout>
          <StyledSidebar>
            <Sider collapsed={collapsed}>
              <div className="my-10 mx-3">
                <Row>
                  <Col type="flex" align="left" sm={24} md={24} lg={24}>
                    <CollapseIcon onClick={() => setCollapsed(!collapsed)} />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col type="flex" align="left" sm={24} md={24} lg={24}>
                    <Link className="sidebar-link" to={`/funding/received`}>
                      <PayCircleOutlined className="display-inline-flex" />
                      {!collapsed ? <span className="ml-1">{'寄付決済'}</span> : <></>}
                    </Link>
                  </Col>
                  <Col className="mt-3" type="flex" align="left" sm={24} md={24} lg={24}>
                    {/*
                    <Link className="sidebar-link" to={`/funding/received`}>
                      <PayCircleOutlined className="display-inline-flex" />
                      {!collapsed ? <span className="ml-1">{'寄付決済'}</span> : <></>}
                    </Link>
                    */}
                  </Col>
                </Row>
              </div>
            </Sider>
          </StyledSidebar>

          <Layout>
            <Header>
              <Row>
                <Col type="flex" align="right" sm={24} md={24} lg={24}>
                  <HeartOutlined className="display-inline-flex" />
                  <span className="display-inline-flex ml-1">{'お得な割引プラン'}</span>
                  <PlaySquareOutlined className="display-inline-flex ml-2" />
                  <span className="display-inline-flex ml-1">{'お得な割引プラン'}</span>
                  <InfoCircleOutlined className="display-inline-flex ml-2" />
                  <span className="display-inline-flex ml-1">{'お得な割引プラン'}</span>
                  <span className="ml-1" style={{ fontSize: '30px' }}>
                    |
                  </span>
                  <UserOutlined className="display-inline-flex ml-2" style={{ fontSize: '30px' }} />
                  <span className="display-inline-flex ml-1">{'お得な割引プラン'}</span>
                </Col>
              </Row>
            </Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </SlyledLayout>
    </>
  );
};

export default AppLayout;
