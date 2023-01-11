import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
// ANTD
import { Tabs, Row, Col, Card, Select, Space } from 'antd';
// COMPONENT
import BasicSetting from './components/Activity/BasicSetting';
import PageEdit from './components/Activity/PageEdit';
import BlogEditConfirm from './components/BlogEditConfirm';
import Breadcumd from 'app/components/Breadcumd';
// CONST
import { HEADER_BREADCUMD_DATA, ProjectDetailHeader } from './consts';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';

export const DETAIL_KEY_MAP = {
  BASIC_SETTING: '1',
  PAGE_EDIT: '2',
};

const Edit = ({ activeKey }) => {
  const params = useParams();

  const BLOG_BREADCUMD_DATA = [
    HEADER_BREADCUMD_DATA[0],
    {
      id: 2,
      title: 'プロジェクトトップ',
      uri: `/app/projects/${params.id}/summary`,
    },
    {
      id: 3,
      title: '活動報告',
      uri: `/app/projects/${params.id}/blogs/`,
    },
    {
      id: 4,
      title: 'マンスリーサポーター30人達成しました！',
      uri: `/app/projects/${params.id}/blogs/${params.blogId}/edit`,
    },
  ];

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
      <ProjectDetailHeader
        Breadcumd={<Breadcumd data={BLOG_BREADCUMD_DATA} active={BLOG_BREADCUMD_DATA[3].id} />}
      />
      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'活動報告編集'}</div>
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col>
            <Space>
              <Select
                defaultValue={{
                  value: 1,
                }}
                style={{
                  width: '100%',
                }}
              >
                <Select.Option value={1}>{'下書き'}</Select.Option>
              </Select>
              <BlogEditConfirm />
            </Space>
          </Col>
        </Row>
        {/* 活動報告 */}
        <Card>
          <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4} className="mt-6">
            <Tabs.TabPane tab="基本設定" key="1">
              <BasicSetting />
            </Tabs.TabPane>
            <Tabs.TabPane tab="ページ編集" key="2">
              <PageEdit />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default Edit;
