import { Layout, ConfigProvider } from 'antd';
import { SlyledLayout } from './Layout.style';
import { AdminLayoutPage } from './AdminLayoutPage.style';
import { AdminStyle } from 'styles/admin-styles';

import AdminSider from '../Sider/Admin';

const { Content } = Layout;

console.log(AdminStyle);

const AppLayout = ({ children }) => {
  return (
    <>
      <AdminStyle />
      <ConfigProvider autoInsertSpaceInButton={false}>
        <AdminLayoutPage>
          <SlyledLayout>
            <Layout>
              {/* サイド・Sidebar */}
              <AdminSider />
              <Layout>
                {/* メイン・Main Content */}
                <Content>{children}</Content>
              </Layout>
            </Layout>
          </SlyledLayout>
        </AdminLayoutPage>
      </ConfigProvider>
    </>
  );
};

export default AppLayout;
