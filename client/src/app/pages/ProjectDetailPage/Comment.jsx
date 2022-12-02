import { useParams } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// Components
import CommentTable from './components/CommentTable';
import Breadcumd from 'app/components/Breadcumd';
import { HEADER_BREADCUMD_DATA, ProjectDetailHeader } from './consts';

const Comment = () => {
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
  return (
    <>
      <ProjectDetailHeader
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
            <CommentTable />
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Comment;
