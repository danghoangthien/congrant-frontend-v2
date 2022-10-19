import { Layout } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledSidebar, SlyledLayout, SlyledHeader } from './Layout.style';
import { Row, Col, Button, Dropdown, Menu, Space, Typography } from 'antd';
import {
  HeartOutlined,
  PlaySquareOutlined,
  InfoCircleOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from '@ant-design/icons';

import LogoImage from 'styles/assets/logo_congrant.svg';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DomainIcon from '@mui/icons-material/Domain';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';

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
              <div className="my-4 mx-6">
                {/* メニューアイコン */}
                <Row className="mb-4">
                  <Col type="flex" align="left" sm={24} md={24} lg={24}>
                    <MenuIcon onClick={() => setCollapsed(!collapsed)} />
                  </Col>
                </Row>

                {/* コングラントロゴ */}
                <Row>
                  <img src={LogoImage} alt="コングラントロゴ" />
                </Row>
              </div>

              <div>
                <Row>
                  {/* ホーム */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/home`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/home`)}>
                          <HomeIcon />
                          <span className="menu-txt">{'ホーム'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* プロジェクト */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/projects`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/projects`)}>
                          <FlagIcon />
                          <span className="menu-txt">{'プロジェクト'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* 寄付決済 */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/donations`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/donations`)}>
                          <FavoriteIcon />
                          <span className="menu-txt">{'寄付決済'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* 継続契約 */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/reccurings`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/reccurings`)}>
                          <AutorenewIcon />
                          <span className="menu-txt">{'継続契約'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* 領収書 */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/receipts`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/receipts`)}>
                          <ReceiptIcon />
                          <span className="menu-txt">{'領収書'}</span>{' '}
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* 個人サポーター */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/individuals`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/individuals`)}>
                          <PersonIcon />
                          <span className="menu-txt">{'個人サポーター'}</span>{' '}
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* 法人サポーター */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/corporations`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/corporations`)}>
                          <DomainIcon />
                          <span className="menu-txt">{'法人サポーター'}</span>{' '}
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* 基本設定 */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/settings`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/settings`)}>
                          <SettingsIcon />
                          <span className="menu-txt">{'基本設定'}</span>{' '}
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* Editor.js */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/editor`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/editor`)}>
                          <EditIcon />
                          <span className="menu-txt">{'Editor.js'}</span>
                        </HighlightOnActive>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </Col>

                  {/* Ckeditor */}
                  <Col className="py-3 px-6" span={24} type="flex" align="left">
                    <Link className="sidebar-link" to={`/Ckeditor`}>
                      {!collapsed ? (
                        <HighlightOnActive isActive={isActive(`/Ckeditor`)}>
                          <EditIcon />
                          <span className="menu-txt">{'Ckeditor'}</span>
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
