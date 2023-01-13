import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
// ANTD
import { Row, Col, Card, Button } from 'antd';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// COMPONENT
import CommentTable from './components/Comment/CommentTableFull';
import Breadcumd from 'app/components/Breadcumd';
// CONST
import { HEADER_BREADCUMD_DATA, ProjectDetailHeader } from './consts';

const Comment = () => {
  // META情報
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'応援コメント'}</title>
          <meta name="description" content={'応援コメント'} />
        </Helmet>
      </>
    );
  };

  const params = useParams();

  const COMMENT_BREADCUMD_DATA = [
    HEADER_BREADCUMD_DATA[0],
    {
      id: 2,
      title: 'プロジェクトトップ',
      uri: `/app/projects/${params.id}/summary`,
    },
    {
      id: 3,
      title: '応援コメント',
      uri: `/app/projects/${params.id}/comments`,
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
        Breadcumd={
          <Breadcumd data={COMMENT_BREADCUMD_DATA} active={COMMENT_BREADCUMD_DATA[2].id} />
        }
      />

      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'応援コメント'}</div>
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col />
        </Row>
        {/* 活動報告 */}
        <Card className="mb-5 table-card pb-0" bodyStyle={{ padding: 0 }}>
          <Row>
            <CommentTable className="style-table" />
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Comment;
