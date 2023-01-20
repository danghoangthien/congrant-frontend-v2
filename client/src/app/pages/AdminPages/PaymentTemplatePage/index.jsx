import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// ANTD
import { Tabs, Row, Col, Card, Button, Space } from 'antd';
// COMPONENT
import BasicSetting from './components/Dedicated';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';

export const DETAIL_KEY_MAP = {
  DEDICATED: '1',
  GENERIC: '2',
};

const Page = ({ activeKey }) => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'メールテンプレート'}</title>
          <meta name="description" content={'メールテンプレート'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        {/* Should create a component for this */}

        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <Space>
                  <div className="page-title">{'メールテンプレート'}</div>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
        <Card bodyStyle={{ padding: 32 }}>
          <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4}>
            <Tabs.TabPane tab="専用メール" key="1">
              <BasicSetting />
            </Tabs.TabPane>
            <Tabs.TabPane tab="汎用メール" key="2" disabled>
              <></>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default Page;
