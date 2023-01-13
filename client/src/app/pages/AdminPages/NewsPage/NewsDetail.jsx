import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
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
  PAGE_EDIT: '2',
};

const Detail = ({ activeKey }) => {
  const params = useParams();

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
                  <div className="sub-page-title">{'お知らせ'}</div>
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
                  <Space>
                    <Button type="primary">{'<'}</Button>
                    <div className="sub-page-title">{'新規お知らせ'}</div>
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
            <Tabs.TabPane tab="基本設定" key="1">
              <BasicSetting />
            </Tabs.TabPane>
            <Tabs.TabPane tab="ページ編集" key="2">
              <></>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default Detail;
