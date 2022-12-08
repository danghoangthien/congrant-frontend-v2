import { Layout, ConfigProvider } from 'antd';
import React from 'react';
import { SlyledLayout } from './Layout.style';

import CustomSider from '../Sider';

const { Content } = Layout;

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
