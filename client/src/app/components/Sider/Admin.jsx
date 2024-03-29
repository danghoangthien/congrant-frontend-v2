import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
// ANTD
import { Row, Col, Menu, Button } from 'antd';
// Icons
import MenuIcon from '@mui/icons-material/Menu';

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
    key: '/admin/organisations',
    children: [getItem(<Link to={'/admin/organisations'}>登録団体</Link>, '1')],
  },
  {
    label: '契約',
    key: '/admin/contract',
    children: [getItem(<Link to={'/admin/agreements'}>契約プラン</Link>, '1')],
  },
  {
    label: 'レコード',
    key: '/admin/record',
    children: [
      getItem(<Link to={'/admin/records/donations'}>寄付決済</Link>, '1'),
      getItem(<Link to={'/admin/records/recurrings'}>継続契約</Link>, '2'),
      getItem(<Link to={'/admin/records/receipts'}>領収書</Link>, '3'),
    ],
  },
  {
    label: <Link to={'/admin/projects'}>プロジェクト</Link>,
    key: '/admin/projects',
  },
  {
    label: 'テレコム',
    key: '/admin/telecom',
    children: [
      getItem(<Link to={'/admin/telecom/change-amount'}>金額変更</Link>, '1'),
      getItem(<Link to={'/admin/telecom/change-payment-date'}>入金日設定</Link>, '2'),
    ],
  },
  {
    label: <Link to={'/admin/news'}>お知らせ</Link>,
    key: '/admin/news',
  },
  {
    label: 'ログ',
    key: '/admin/log',
    children: [
      getItem(<Link to={'/admin/logs'}>操作ログ</Link>, '1'),
      getItem(<Link to={'/admin/mail-logs'}>通知メールログ</Link>, '2'),
    ],
  },
  {
    label: 'ユーザー',
    key: '/admin/account',
    children: [
      getItem(<Link to={'/admin/admin-users'}>運営管理ユーザー</Link>, '1'),
      getItem(<Link to={'/admin/users'}>利用ユーザー</Link>, '2'),
    ],
  },
  {
    label: <Link to={'/admin/payment-details'}>入金明細</Link>,
    key: '/admin/payment-details',
  },
  {
    label: <Link to={'/admin/payment-templates'}>メールテンプレート</Link>,
    key: '/admin/mail-templates',
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
            <Button href="/admin/login" style={{ width: '100%' }}>
              ログアウト
            </Button>
          </Col>
        </Row>
      </div>
    </StyledSidebar>
  );
};

export default AdminSider;
