import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
// ANTD
import { Row, Col, Card, Button } from 'antd';
import AddIcon from '@mui/icons-material/Add';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// COMPONENT
import ActivityTable from './components/Activity/ActivityTable';
import Breadcumd from 'app/components/Breadcumd';
// CONST
import { HEADER_BREADCUMD_DATA, ProjectDetailHeader } from './consts';

const Blog = () => {
  // META情報
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'活動報告'}</title>
          <meta name="description" content={'活動報告'} />
        </Helmet>
      </>
    );
  };

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

  const LinkText = (
    <Link to={`/app/projects/${params.id}/summary`}>
      <Button
        className="icon-btn less-shadow-btn"
        icon={<span className="material-symbols-outlined fill-icon">chevron_left</span>}
      >
        {'プロジェクトトップへもどる'}
      </Button>
    </Link>
  );

  return (
    <>
      {renderPageTitle()}
      <ProjectDetailHeader
        Link={LinkText}
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
            <ActivityTable className="style-table" />
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Blog;
