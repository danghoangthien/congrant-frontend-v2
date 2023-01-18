import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// ANTD
import { Tabs, Row, Col, Card, Button, Space } from 'antd';
// COMPONENT
import BasicSetting from './components/BasicSetting';
// import PageEdit from './components/Activity/PageEdit';
// import BlogEditConfirm from './components/BlogEditConfirm';
// import Breadcumd from 'app/components/Breadcumd';
// CONST
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';

export const DETAIL_KEY_MAP = {
  BASIC_SETTING: '1',
  LOGIN_HISTORY: '2',
};

const Detail = ({ activeKey }) => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'登録団体'}</title>
          <meta name="description" content={'登録団体'} />
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
                  <div className="page-title">{'登録団体'}</div>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
        <Card>
          <Row justify="space-between" align="middle" className="item mb-5">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <Space size={16}>
                    <Link to={'/admin/organisations '}>
                      <Button
                        className="more-menu-btn"
                        icon={<span className="material-symbols-outlined">chevron_left</span>}
                      />
                    </Link>
                    <div style={{ fontSize: 24, fontWeight: 600 }}>
                      {'認定NPO法人コングラント（団体ID:1234）'}
                    </div>
                  </Space>
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Space>
                <Button type="primary">{'サポートログイン'}</Button>
              </Space>
            </Col>
          </Row>
          <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4} className="mt-6">
            <Tabs.TabPane tab="基本設定" key="1">
              <BasicSetting />
            </Tabs.TabPane>
            <Tabs.TabPane tab="ログイン履歴" key="2">
              <></>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default Detail;
