import { Link, useHistory, useLocation } from 'react-router-dom';
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

const menuData = [
  {
    label: 'ホーム',
    key: '/app/home',
    icon: <HomeIcon />,
  },
  {
    label: 'プロジェクト',
    key: '/app/projects',
    icon: <FlagIcon />,
  },
  {
    label: '寄付決済',
    key: '/app/donations',
    icon: <FavoriteIcon />,
  },
  {
    label: '継続契約',
    key: '/app/reccurings',
    icon: <AutorenewIcon />,
  },
  {
    label: '領収書',
    key: '/app/receipts',
    icon: <ReceiptIcon />,
  },
  {
    label: '個人サポーター',
    key: '/app/individuals',
    icon: <PersonIcon />,
  },
  {
    label: '法人サポーター',
    key: '/app/corporations',
    icon: <DomainIcon />,
  },
  {
    label: '基本設定',
    key: '/app/settings',
    icon: <SettingsIcon />,
  },
];

const items = menuData.map(({ label, key, icon }) => getItem(label, key, icon));

const sub_menu = (
  <Menu
    items={[
      {
        key: '1',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/corporation-settings`}>
            <span className="material-symbols-outlined fill-icon mr-2" style={{ fontSize: 16 }}>
              admin_panel_settings
            </span>
            団体設定
          </Link>
        ),
      },
      {
        key: '2',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/individuals-settings`}>
            <span className="material-symbols-outlined fill-icon mr-2" style={{ fontSize: 16 }}>
              manage_accounts
            </span>
            個人設定
          </Link>
        ),
      },
      {
        key: '3',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/payment-details/stripe`}>
            <span className="material-symbols-outlined fill-icon mr-2" style={{ fontSize: 16 }}>
              list
            </span>
            決済明細
          </Link>
        ),
      },
      {
        key: '4',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/contract`}>
            <span className="material-symbols-outlined fill-icon mr-2" style={{ fontSize: 16 }}>
              edit_document
            </span>
            契約内容
          </Link>
        ),
      },
      {
        key: '5',
        title: '',
        label: (
          <Link className="sub-user-menu-link" to={`/app/logout`}>
            <span className="material-symbols-outlined fill-icon mr-2" style={{ fontSize: 16 }}>
              logout
            </span>
            ログアウト
          </Link>
        ),
      },
    ]}
  />
);

const sub_menu2 = (
  <Menu
    items={[
      {
        key: '1',
        title: '',
        label: (
          <a
            href="https://congrant.com/jp/fundraisingtips/index.html"
            className="sub-user-menu-link"
            target="_blank"
            rel="noreferrer"
          >
            ファンドレイジングのコツ100選
          </a>
        ),
      },
      {
        key: '2',
        title: '',
        label: (
          <a target="blank" className="sub-user-menu-link" href={`/app/learning`}>
            動画で学ぶファンドレイジング
          </a>
        ),
      },
    ]}
  />
);

const CustomSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  const selectedItem = menuData.filter(({ key }) => pathname === key).map(({ key }) => key);
  return (
    <StyledSidebar
      breakpoint="xl"
      trigger={null}
      collapsed={collapsed}
      collapsible
      width={200}
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
            selectedKeys={selectedItem}
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
                <span className="material-symbols-outlined icon fill-icon">redeem</span>
              </Link>
            </Col>
            <Col className="user-box-item will-collapsed-item" span={24}>
              <Dropdown overlay={sub_menu2} placement="top" arrow={false}>
                <span className="sub-menu-link">
                  ファンドレイジングを学ぶ
                  <span className="material-symbols-outlined icon fill-icon">school</span>
                </span>
              </Dropdown>
            </Col>
            <Col className="user-box-item will-collapsed-item" span={24}>
              <Link className="sub-menu-link" to={`test3`} target="_blank">
                ヘルプ＆サポート
                <span className="material-symbols-outlined icon fill-icon">help</span>
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
