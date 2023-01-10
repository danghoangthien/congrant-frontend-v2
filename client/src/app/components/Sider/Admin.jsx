import { Link, useHistory, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
// ANTD
import { Row, Col, Menu, Button } from 'antd';
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
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import { PRIMARY_ADMIN_COLOR } from 'styles/StyleConstants';

// STYLE
import { StyledSidebar } from './AdminSider.style';

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
    label: 'ダッシュボード',
    key: '/admin/dashboard',
  },
  {
    label: '団体',
    key: '/admin/organization',
    children: [
      getItem('登録団体', '1'),
      getItem('未承認', '2'),
      getItem('ユーザーアカウント', '3'),
    ],
  },
  {
    label: '契約',
    key: '/app/contract',
    children: [getItem('契約プラン', '1'), getItem('利用料支払履歴', '2')],
  },
  {
    label: 'レコード',
    key: '/app/record',
    children: [getItem('寄付決済', '1'), getItem('継続契約', '2'), getItem('領収書', '3')],
  },
  {
    label: 'プロジェクト',
    key: '/admin/project',
  },
  {
    label: 'テレコム',
    key: '/app/telecom',
    children: [getItem('金額変更', '1'), getItem('入金日設定', '2')],
  },
  {
    label: 'お知らせ',
    key: '/admin/news',
  },
  {
    label: 'ログ',
    key: '/app/log',
    children: [getItem('操作ログ', '1'), getItem('通知メールログ', '2')],
  },
  {
    label: 'アカウント',
    key: '/app/account',
    children: [getItem('管理アカウント', '1'), getItem('ユーザーアカウント', '2')],
  },
];

const items = menuData.map(({ label, key, icon, children }) => getItem(label, key, icon, children));

const AdminSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();
  const selectedItem = menuData
    .filter(({ key }) => pathname.indexOf(key) === 0)
    .map(({ key }) => key);

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
          <div>
            <div style={{ margin: '16px 22px' }}>
              {/* メニューアイコン・Menu Icon */}
              <Row className="menu-btn" justify="center">
                <MenuIcon onClick={() => setCollapsed(!collapsed)} />
              </Row>

              <Row>
                <div style={{ color: PRIMARY_ADMIN_COLOR, fontSize: 28, fontWeight: 600 }}>
                  運営管理
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
            />
          </div>
        </div>
        <Row justify="center">
          <Col span={24} className="pb-6 px-6">
            <Button style={{ width: '100%' }}>ログアウト</Button>
          </Col>
        </Row>
      </div>
    </StyledSidebar>
  );
};

export default AdminSider;
