import { Layout } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledSidebar, SlyledLayout, SlyledHeader } from './Layout.style';
import { Row, Col, Button, Dropdown, Menu, Space, Typography } from 'antd';
import {
  PayCircleOutlined,
  HeartOutlined,
  PlaySquareOutlined,
  InfoCircleOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            アカウント設定
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            ログアウト
          </a>
        ),
      },
    ]}
  />
);

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

const HighlightOnActive = ({ children, isActive }) => {
  const Wrapper = isActive ? Typography.Text : React.Fragment;
  return <Wrapper type="success">{children}</Wrapper>;
};

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isActive = path => {
    return path === location.pathname;
  };
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
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/funding/received`)}>
                          <span className="ml-1">{'寄付決済'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>
                  <Col className="mt-3" type="flex" align="left" sm={24} md={24} lg={24}>
                    <Link className="sidebar-link" to={`/supporter`}>
                      <UserOutlined className="display-inline-flex" />
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/supporter`)}>
                          <span className="ml-1">{'個人サポーター'}</span>{' '}
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>
                  <Col className="mt-3" type="flex" align="left" sm={24} md={24} lg={24}>
                    <Link className="sidebar-link" to={`/group-supporter`}>
                      <UserOutlined className="display-inline-flex" />
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/group-supporter`)}>
                          <span className="ml-1">{'法人サポーター'}</span>{' '}
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>
                  <Col className="mt-3" type="flex" align="left" sm={24} md={24} lg={24}>
                    <Link className="sidebar-link" to={`/editor`}>
                      <UserOutlined className="display-inline-flex" />
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/editor`)}>
                          <span className="ml-1">{'Editor.js'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>
                  <Col className="mt-3" type="flex" align="left" sm={24} md={24} lg={24}>
                    <Link className="sidebar-link" to={`/Ckeditor`}>
                      <UserOutlined className="display-inline-flex" />
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/Ckeditor`)}>
                          <span className="ml-1">{'Ckeditor'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>
                </Row>
              </div>
            </Sider>
          </StyledSidebar>

          <Layout>
            <SlyledHeader>
              <Header>
                <Row justify="end" align="middle">
                  <div>
                    <HeartOutlined className="display-inline-flex" />
                    <span className="display-inline-flex ml-1">{'お得な割引プラン'}</span>
                  </div>
                  <div>
                    <PlaySquareOutlined className="display-inline-flex ml-4" />
                    <span className="display-inline-flex ml-1">{'お得な割引プラン'}</span>
                  </div>
                  <div>
                    <InfoCircleOutlined className="display-inline-flex ml-4" />
                    <span className="display-inline-flex ml-1">{'お得な割引プラン'}</span>
                  </div>
                  <span className="line ml-8 mr-8"></span>
                  <Dropdown overlay={menu}>
                    <Row align="middle">
                      <UserOutlined
                        className="user-icon display-inline-flex"
                        style={{ fontSize: '18px', color: '#ffffff' }}
                      />
                      <span className="display-inline-flex ml-4">{'荒木 雄大'}</span>
                      <DownOutlined className="ml-4" style={{ fontSize: '12px' }} />
                    </Row>
                  </Dropdown>
                </Row>
              </Header>
            </SlyledHeader>
            <Content
              style={{
                minHeight: '90vh',
              }}
            >
              {children}
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </SlyledLayout>
    </>
  );
};

export default AppLayout;
