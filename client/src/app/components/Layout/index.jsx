import { Layout, ConfigProvider } from 'antd';
import React from 'react';
import { SlyledLayout } from './Layout.style';

import CustomSider from '../Sider';

const { Content } = Layout;

// const menu = (
//   <Menu
//     items={[
//       {
//         key: '1',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//             アカウント設定
//           </a>
//         ),
//       },
//       {
//         key: '2',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//             ログアウト
//           </a>
//         ),
//       },
//     ]}
//   />
// );

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
  return (
    <>
      <ConfigProvider autoInsertSpaceInButton={false}>
        <SlyledLayout>
          <Layout>
            {/* サイド・Sidebar */}
            <CustomSider />
            <Layout>
              {/* メイン・Main Content */}
              <Content>{children}</Content>
            </Layout>
          </Layout>
        </SlyledLayout>
      </ConfigProvider>
    </>
  );
};

export default AppLayout;
