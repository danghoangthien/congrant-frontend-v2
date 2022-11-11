import { Link, useHistory } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import React, { useState } from 'react';
import { StyledSidebar, SlyledLayout, SlyledHeader } from './Layout.style';
import { Row, Col, Dropdown, Menu, Space } from 'antd';
import userImage from 'styles/assets/icon_avatar.svg';

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
import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserOutlined } from '@ant-design/icons';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

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

const items = [
  getItem('ホーム', '/', <HomeIcon />),
  getItem('プロジェクト', '/projects', <FlagIcon />),
  getItem('寄付決済', '/donations', <FavoriteIcon />),
  getItem('継続契約', '/reccurings', <AutorenewIcon />),
  getItem('領収書', '/receipts', <ReceiptIcon />),
  getItem('個人サポーター', '/individuals', <PersonIcon />),
  getItem('法人サポーター', '/corporations', <DomainIcon />),
  getItem('基本設定', '/settings', <SettingsIcon />),
  // getItem(null, 'sub-menu', null, [
  //   getItem(
  //     <div>
  //       <Link className="sub-menu-link" to={`test1`}>
  //         割引プラン
  //         <MoreHorizIcon />
  //       </Link>
  //     </div>,
  //     'g1',
  //   ),
  //   getItem(
  //     <Link className="sub-menu-link" to={`test2`}>
  //       ファンドレイジングを学ぶ
  //       <MoreHorizIcon />
  //     </Link>,
  //     'g2',
  //   ),
  //   getItem(
  //     <Link className="sub-menu-link" to={`test3`} target="_blank">
  //       ヘルプ＆サポート
  //       <OpenInNewIcon />
  //     </Link>,
  //     'g3',
  //   ),
  //   getItem(
  //     <Row className="user-box" align="middle">
  //       <div className="user-name">
  //         <span className="txt">{'NPO法人コングラント'}</span>
  //       </div>
  //       <Row align="middle">
  //         <img className="mr-2" src={userImage} alt="サポーター写真" />
  //         <div>
  //           <div className="representative-name">{'荒木 雄大'}</div>
  //         </div>
  //       </Row>
  //     </Row>,
  //     'g4',
  //   ),
  // ]),
];

const items4 = [
  getItem(
    <Row className="user-box" align="middle">
      <div className="user-name">
        <span className="txt">{'NPO法人コングラント'}</span>
      </div>
      <Row align="middle">
        <img className="mr-2" src={userImage} alt="サポーター写真" />
        <div>
          <div className="representative-name">{'荒木 雄大'}</div>
        </div>
      </Row>
    </Row>,
    'sub1',
    null,
    [
      getItem(
        <Link className="sub-user-menu-link" to={`test2`}>
          <AdminPanelSettingsIcon />
          団体設定
        </Link>,
        '3',
      ),
      getItem(
        <Link className="sub-user-menu-link" to={`test2`}>
          <ManageAccountsIcon />
          個人設定
        </Link>,
        '4',
      ),
      getItem(
        <Link className="sub-user-menu-link" to={`test2`}>
          <LogoutIcon />
          ログアウト
        </Link>,
        '5',
      ),
    ],
  ),
];

// const items2 = [
//   getItem(null, 'sub-menu', null, [
//     getItem(
//       <div>
//         <Link className="sub-menu-link" to={`test1`}>
//           割引プラン
//           <MoreHorizIcon />
//         </Link>
//       </div>,
//       'g1',
//     ),
//     getItem(
//       <Link className="sub-menu-link" to={`test2`}>
//         ファンドレイジングを学ぶ
//         <MoreHorizIcon />
//       </Link>,
//       'g2',
//     ),
//     getItem(
//       <Link className="sub-menu-link" to={`test3`} target="_blank">
//         ヘルプ＆サポート
//         <OpenInNewIcon />
//       </Link>,
//       'g3',
//     ),
//     getItem(
//       <Row className="user-box" align="middle">
//         <div className="user-name">
//           <span className="txt">{'NPO法人コングラント'}</span>
//         </div>
//         <Row align="middle">
//           <img className="mr-2" src={userImage} alt="サポーター写真" />
//           <div>
//             <div className="representative-name">{'荒木 雄大'}</div>
//           </div>
//         </Row>
//       </Row>,
//       'g4',
//     ),
//   ]),
// ];

// const items3 = [
//   getItem(
//     <div>
//       <Link className="sub-menu-link" to={`test1`}>
//         割引プラン
//         <MoreHorizIcon />
//       </Link>
//     </div>,
//     'g1',
//   ),
//   getItem(
//     <Link className="sub-menu-link" to={`test2`}>
//       ファンドレイジングを学ぶ
//       <MoreHorizIcon />
//     </Link>,
//     'g2',
//   ),
//   getItem(
//     <Link className="sub-menu-link" to={`test3`} target="_blank">
//       ヘルプ＆サポート
//       <OpenInNewIcon />
//     </Link>,
//     'g3',
//   ),
//   getItem(
//     <Row className="user-box" align="middle">
//       <div className="user-name">
//         <span className="txt">{'NPO法人コングラント'}</span>
//       </div>
//       <Row align="middle">
//         <img className="mr-2" src={userImage} alt="サポーター写真" />
//         <div>
//           <div className="representative-name">{'荒木 雄大'}</div>
//         </div>
//       </Row>
//     </Row>,
//     'g4',
//   ),
// ];

const AppLayout = ({ children }) => {
  console.count('AppLayout');
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  return (
    <>
      <ConfigProvider autoInsertSpaceInButton={false}>
        <SlyledLayout>
          <Layout>
            {/* サイド・Sidebar */}
            <StyledSidebar>
              <Sider
                trigger={null}
                collapsed={collapsed}
                collapsible
                width={216}
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
                <Row>
                  <Col span={24}>
                    <div className="my-4 mx-6">
                      {/* メニューアイコン・Menu Icon */}
                      <Row className="mb-4 menu-btn">
                        <MenuIcon onClick={() => setCollapsed(!collapsed)} />
                      </Row>

                      {/* コングラントロゴ・Logo */}
                      {/* <Row>
                        <div className="logo-wrapper">
                          <img className="logo-icon" src={LogoIcon} alt="コングラントロゴ" />
                          <img className="logo-text" src={LogoText} alt="コングラントロゴ" />
                        </div>
                      </Row> */}
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
                  </Col>

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

                  <Col className="user-box-wrapper" span={24}>
                    <Row>
                      <Link className="sub-menu-link" to={`test1`}>
                        割引プラン
                        <MoreHorizIcon />
                      </Link>
                    </Row>
                    <Row>
                      <Link className="sub-menu-link" to={`test2`}>
                        ファンドレイジングを学ぶ
                        <MoreHorizIcon />
                      </Link>
                    </Row>
                    <Row>
                      <Link className="sub-menu-link" to={`test3`} target="_blank">
                        ヘルプ＆サポート
                        <OpenInNewIcon />
                      </Link>
                    </Row>
                    <Row className="user-wrapper">
                      {/* <div className="user-name">
                        <span className="txt">{'NPO法人コングラント'}</span>
                      </div>
                      <Row align="middle">
                        <img className="mr-2" src={userImage} alt="サポーター写真" />
                        <div>
                          <div className="representative-name">{'荒木 雄大'}</div>
                        </div>
                      </Row> */}
                      <Menu items={items4} forceSubMenuRender={true} />
                    </Row>
                  </Col>
                </Row>
              </Sider>
            </StyledSidebar>

            <Layout>
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
