import { Link, useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';
import AddIcon from '@mui/icons-material/Add';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// Components
import ActivityTable from './components/Activity/ActivityTable';
import Breadcumd from 'app/components/Breadcumd';
import { HEADER_BREADCUMD_DATA, ProjectDetailHeader } from './consts';

const Blog = () => {
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
      uri: `/app/projects/${params.id}/blogs`,
    },
  ];
  return (
    <>
      <ProjectDetailHeader
        Breadcumd={<Breadcumd data={BLOG_BREADCUMD_DATA} active={BLOG_BREADCUMD_DATA[2].id} />}
      />
      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'活動報告'}</div>
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col>
            <Link className="sidebar-link" to={`blogs/new-blog`}>
              <Button type="primary" className="icon-btn">
                <AddIcon style={{ fontSize: '14px' }} className="mr-2" />
                <span>{'活動報告の作成'}</span>
              </Button>
            </Link>
          </Col>
        </Row>
        {/* 活動報告 */}
        <Card className="mb-5 table-card pb-0" bodyStyle={{ padding: 0 }}>
          <Row>
            <ActivityTable />
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Blog;
