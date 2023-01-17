import { Layout, ConfigProvider } from 'antd';
import React from 'react';
import { SlyledLayout } from './Layout.style';
import { AdminLayoutPage } from './AdminLayoutPage.style';

import AdminSider from '../Sider/Admin';

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <>
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
