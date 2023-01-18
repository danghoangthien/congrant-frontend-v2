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
          <title>{'活動報告編集'}</title>
          <meta name="description" content={'活動報告編集'} />
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
                  <div className="page-title">{'お知らせ'}</div>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
        <Card bodyStyle={{ padding: 32 }}>
          <Row justify="space-between" align="middle" className="item mb-5">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col>
                  <Space size={16}>
                    <Link to={'/admin/news'}>
                      <Button
                        className="more-menu-btn"
                        icon={<span className="material-symbols-outlined">chevron_left</span>}
                      />
                    </Link>
                    <div style={{ fontSize: 28, fontWeight: 600 }}>{'新規お知らせ'}</div>
                  </Space>
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Space>
                <Button type="primary">{'保存する'}</Button>
              </Space>
            </Col>
          </Row>
          <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4} className="mt-6">
            <Tabs.TabPane tab="専用メール" key="1">
              <BasicSetting />
            </Tabs.TabPane>
            <Tabs.TabPane tab="汎用メール" key="2">
              <></>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default Page;
