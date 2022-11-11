import { Layout, ConfigProvider } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledSidebar, SlyledLayout, SlyledHeader } from './Layout.style';
import { Row, Col, Dropdown, Menu, Typography, Tooltip } from 'antd';
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from '@ant-design/icons';

import LogoText from 'styles/assets/logo_text.svg';
import LogoIcon from 'styles/assets/logo_icon.svg';
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
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const { Header, Sider, Content } = Layout;

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
  console.count('AppLayout');
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isActive = path => {
    return path === location.pathname;
  };
  return (
    <>
      <ConfigProvider autoInsertSpaceInButton={false}>
        <SlyledLayout>
          <Layout>
            {/* サイド・Sidebar */}
            <StyledSidebar>
              <Sider collapsed={collapsed}>
                <div className="my-4 mx-6">
                  {/* メニューアイコン */}
                  <Row className="mb-4">
                    <Col type="flex" align="left" sm={24} md={24} lg={24}>
                      <MenuIcon className="menu-btn" onClick={() => setCollapsed(!collapsed)} />
                    </Col>
                  </Row>

                  {/* コングラントロゴ */}
                  <Row>
                    <div className="logo-wrapper">
                      <img className="logo-icon" src={LogoIcon} alt="コングラントロゴ" />
                      <img className="logo-text" src={LogoText} alt="コングラントロゴ" />
                    </div>
                  </Row>
                </div>

                <div>
                  <Row>
                    {/* ホーム */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/home`}>
                        <HighlightOnActive isActive={isActive(`/home`)}>
                          {collapsed ? (
                            <Tooltip title="ホーム" placement="right">
                              <HomeIcon />
                            </Tooltip>
                          ) : (
                            <HomeIcon />
                          )}
                          <span className="menu-txt">{'ホーム'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* プロジェクト */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/projects`}>
                        <HighlightOnActive isActive={isActive(`/projects`)}>
                          {collapsed ? (
                            <Tooltip title="プロジェクト" placement="right">
                              <FlagIcon />
                            </Tooltip>
                          ) : (
                            <FlagIcon />
                          )}
                          <span className="menu-txt">{'プロジェクト'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* 寄付決済 */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/donations`}>
                        <HighlightOnActive isActive={isActive(`/donations`)}>
                          {collapsed ? (
                            <Tooltip title="寄付決済" placement="right">
                              <FavoriteIcon />
                            </Tooltip>
                          ) : (
                            <FavoriteIcon />
                          )}
                          <span className="menu-txt">{'寄付決済'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* 継続契約 */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/reccurings`}>
                        <HighlightOnActive isActive={isActive(`/reccurings`)}>
                          {collapsed ? (
                            <Tooltip title="継続契約" placement="right">
                              <AutorenewIcon />
                            </Tooltip>
                          ) : (
                            <AutorenewIcon />
                          )}
                          <span className="menu-txt">{'継続契約'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* 領収書 */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/receipts`}>
                        <HighlightOnActive isActive={isActive(`/receipts`)}>
                          {collapsed ? (
                            <Tooltip title="領収書" placement="right">
                              <ReceiptIcon />
                            </Tooltip>
                          ) : (
                            <ReceiptIcon />
                          )}
                          <span className="menu-txt">{'領収書'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* 個人サポーター */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/individuals`}>
                        <HighlightOnActive isActive={isActive(`/individuals`)}>
                          {collapsed ? (
                            <Tooltip title="個人サポーター" placement="right">
                              <PersonIcon />
                            </Tooltip>
                          ) : (
                            <PersonIcon />
                          )}
                          <span className="menu-txt">{'個人サポーター'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* 法人サポーター */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/corporations`}>
                        <HighlightOnActive isActive={isActive(`/corporations`)}>
                          <DomainIcon />
                          <span className="menu-txt">{'法人サポーター'}</span>{' '}
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* 基本設定 */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/settings`}>
                        <HighlightOnActive isActive={isActive(`/settings`)}>
                          {collapsed ? (
                            <Tooltip title="基本設定" placement="right">
                              <SettingsIcon />
                            </Tooltip>
                          ) : (
                            <SettingsIcon />
                          )}
                          <span className="menu-txt">{'基本設定'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>
                    {/* 団体設定 */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/corporation-settings`}>
                        <HighlightOnActive isActive={isActive(`/corporation-settings`)}>
                          {collapsed ? (
                            <Tooltip title="団体設定" placement="right">
                              <SettingsIcon />
                            </Tooltip>
                          ) : (
                            <SettingsIcon />
                          )}
                          <span className="menu-txt">{'団体設定'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>
                    {/* 個人設定 */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/individuals-settings`}>
                        <HighlightOnActive isActive={isActive(`/individuals-settings`)}>
                          {collapsed ? (
                            <Tooltip title="個人設定" placement="right">
                              <ManageAccountsIcon />
                            </Tooltip>
                          ) : (
                            <ManageAccountsIcon />
                          )}
                          <span className="menu-txt">{'個人設定'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>
                    {/* Editor.js */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/editor`}>
                        <HighlightOnActive isActive={isActive(`/editor`)}>
                          {collapsed ? (
                            <Tooltip title="Editor.js" placement="right">
                              <EditIcon />
                            </Tooltip>
                          ) : (
                            <EditIcon />
                          )}
                          <span className="menu-txt">{'Editor.js'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>

                    {/* Ckeditor */}
                    <Col className="menu-item" span={24} type="flex" align="left">
                      <Link className="sidebar-link" to={`/Ckeditor`}>
                        <HighlightOnActive isActive={isActive(`/Ckeditor`)}>
                          {collapsed ? (
                            <Tooltip title="Ckeditor" placement="right">
                              <EditIcon />
                            </Tooltip>
                          ) : (
                            <EditIcon />
                          )}
                          <span className="menu-txt">{'Ckeditor'}</span>
                        </HighlightOnActive>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Sider>
            </StyledSidebar>

            <Layout>
              {/* ヘッダー・Header */}
              <SlyledHeader>
                <Header>
                  <Row justify="end" align="middle">
                    <Col className="nav-item mr-6">
                      <KeyboardDoubleArrowDownIcon className="icon" />
                      <span>{'お得な割引プラン'}</span>
                    </Col>
                    <Col className="nav-item mr-6">
                      <SlideshowIcon className="icon" />
                      <span>{'お得な割引プラン'}</span>
                    </Col>
                    <Col className="nav-item">
                      <HelpIcon className="icon" />
                      <span>{'お得な割引プラン'}</span>
                    </Col>
                    <span className="line ml-8 mr-8"></span>
                    <Dropdown overlay={menu}>
                      <Row align="middle">
                        <UserOutlined
                          className="user-icon display-inline-flex"
                          style={{ fontSize: '18px', color: '#ffffff' }}
                        />
                        <div className="mr-2">
                          <div className="name-wrapper organization-name">
                            <span className="txt">NPO法人コングラント</span>
                          </div>
                          <div className="name-wrapper account-name">
                            <span className="txt">荒木 雄大</span>
                          </div>
                        </div>
                        <ExpandMoreIcon style={{ fontSize: '16px' }} />
                      </Row>
                    </Dropdown>
                  </Row>
                </Header>
              </SlyledHeader>

              {/* メイン・Main Content */}
              <Content className="mx-6 my-7">{children}</Content>
            </Layout>
          </Layout>
        </SlyledLayout>
      </ConfigProvider>
    </>
  );
};

export default AppLayout;
