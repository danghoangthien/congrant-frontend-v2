import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
// ANTD
import { Row, Col, Menu, Dropdown } from 'antd';
// Icons
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// IMAGE
import userImage from 'styles/assets/icon_avatar.svg';

// STYLE
import { StyledSidebar } from './Sider.style';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('ホーム', '/app/home', <HomeIcon />),
  getItem('プロジェクト', '/app/projects', <FlagIcon />),
  getItem('寄付決済', '/app/donations', <FavoriteIcon />),
  getItem('継続契約', '/app/reccurings', <AutorenewIcon />),
  getItem('領収書', '/app/receipts', <ReceiptIcon />),
  getItem('個人サポーター', '/app/individuals', <PersonIcon />),
  getItem('法人サポーター', '/app/corporations', <DomainIcon />),
  getItem('基本設定', '/app/settings', <SettingsIcon />),
  // getItem('決済明細', '/app/payments/stripe', <FormatListBulletedIcon />),
  // getItem('決済明細', '/app/payments/stripe', <FormatListBulletedIcon />),
  // getItem('決済明細', '/app/payments/stripe', <FormatListBulletedIcon />),
  // getItem('決済明細', '/app/payments/stripe', <FormatListBulletedIcon />),
  // getItem('決済明細', '/app/payments/stripe', <FormatListBulletedIcon />),
  // getItem('決済明細', '/app/payments/stripe', <FormatListBulletedIcon />),
  // getItem('決済明細', '/app/payments/stripe', <FormatListBulletedIcon />),
];

const sub_menu = (
  <Menu
    items={[
      {
        key: '1',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/corporation-settings`}>
            <AdminPanelSettingsIcon />
            団体設定
          </Link>
        ),
      },
      {
        key: '2',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/individuals-settings`}>
            <ManageAccountsIcon />
            個人設定
          </Link>
        ),
      },
      {
        key: '3',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/payments/stripe`}>
            <FormatListBulletedIcon />
            決済明細
          </Link>
        ),
      },
      {
        key: '4',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/logout`}>
            <LogoutIcon />
            ログアウト
          </Link>
        ),
      },
    ]}
  />
);

const CustomSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  return (
    <StyledSidebar
      trigger={null}
      collapsed={collapsed}
      collapsible
      width={217}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="sider-menu-wrapper">
        {/* MAIN MENU */}
        <div className="main-menu">
          <div style={{ margin: '16px 22px' }}>
            {/* メニューアイコン・Menu Icon */}
            <Row className="menu-btn" justify="center">
              <MenuIcon onClick={() => setCollapsed(!collapsed)} />
            </Row>

            {/* コングラントロゴ・Logo */}
            <Row>
              <div className="logo-wrapper">
                <img className="logo-icon" src={LogoIcon} alt="コングラントロゴ" />
                <img className="logo-text" src={LogoText} alt="コングラントロゴ" />
              </div>
            </Row>
          </div>

          {/* メアインメニュー・Main Menu */}
          <Menu
            className="main-menu"
            mode="inline"
            items={items}
            selectable
            defaultOpenKeys={['sub-menu']}
            defaultSelectedKeys={['1']}
            onClick={item => {
              if (item.key !== 'logo') {
                history.push(item.key);
              }
            }}
          />
        </div>

        {/* <Col>
                  <Menu
                    className="main-menu"
                    mode="inline"
                    items={items2}
                    selectable
                    // defaultOpenKeys={['sub-menu']}
                    // defaultSelectedKeys={['1']}
                  />
                </Col> */}

        <div className="user-box-wrapper">
          <Row>
            <Col className="user-box-item will-collapsed-item" span={24}>
              <Link className="sub-menu-link" to={`test1`}>
                割引プラン
                <MoreHorizIcon />
              </Link>
            </Col>
            <Col className="user-box-item will-collapsed-item" span={24}>
              <Link className="sub-menu-link" to={`test2`}>
                ファンドレイジングを学ぶ
                <MoreHorizIcon />
              </Link>
            </Col>
            <Col className="user-box-item will-collapsed-item" span={24}>
              <Link className="sub-menu-link" to={`test3`} target="_blank">
                ヘルプ＆サポート
                <OpenInNewIcon />
              </Link>
            </Col>
            <Col className="user-box-item" span={24}>
              <Dropdown overlay={sub_menu} placement="top" arrow={false}>
                <div className="user-box">
                  <div className="user-name will-collapsed-item -fast">
                    <span className="txt">{'NPO法人コングラント'}</span>
                  </div>
                  <Row align="middle">
                    <img className="mr-2" src={userImage} alt="サポーター写真" />
                    <div className="will-collapsed-item -fast">
                      <div className="representative-name">{'荒木 雄大'}</div>
                    </div>
                  </Row>
                </div>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default CustomSider;
