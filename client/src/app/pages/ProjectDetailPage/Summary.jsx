import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Badge, Space } from 'antd';
import EditIcon from '@mui/icons-material/Edit';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// Components
import Breadcumd from 'app/components/Breadcumd';
import SummaryTable from './components/SummaryTable';
import ActivityTable from './components/Activity/ActivityTable';
import CommentTable from './components/Comment/CommentTable';
// Icons
import { HEADER_BREADCUMD_DATA, SUMMARY_BREADCUMD_DATA, ProjectDetailHeader } from './consts';
// UTILS
import { randomOutput } from 'utils/helper';

const Summary = () => {
  const params = useParams();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'プロジェクトトップ'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  const LinkText = (
    <Link to="/app/projects">
      <Button
        className="icon-btn less-shadow-btn"
        icon={<span className="material-symbols-outlined fill-icon">chevron_left</span>}
      >
        {'一覧へもどる'}
      </Button>
    </Link>
  );

  return (
    <>
      {renderPageTitle()}
      <ProjectDetailHeader
        Link={LinkText}
        Breadcumd={<Breadcumd data={HEADER_BREADCUMD_DATA} active={HEADER_BREADCUMD_DATA[1].id} />}
      />
      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'プロジェクトトップ'}</div>
              </Col>
              <Col className="mr-2">
                <Breadcumd
                  style="button"
                  data={SUMMARY_BREADCUMD_DATA(params?.id)}
                  active={SUMMARY_BREADCUMD_DATA(params?.id)[0].id}
                  separator={null}
                />
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col>
            <Link className="sidebar-link" to={`edit?type=${randomOutput([1, 2, 3])}`}>
              <Button icon={<EditIcon />} type="primary" className="icon-btn">
                {'プロジェクトの編集'}
              </Button>
            </Link>
          </Col>
        </Row>
        {/* Should create a component for this */}

        {/* サマリー */}
        <Card className="mb-5 table-card" bodyStyle={{ padding: 0 }}>
          <Row justify="space-between" className="px-6 py-5">
            <Space align="center">
              <span className="page-sub-title">{'サマリー'}</span>
            </Space>
          </Row>
          <Row>
            <SummaryTable />
          </Row>
        </Card>

        {/* 活動報告 */}
        <Card className="mb-5 table-card pb-0" bodyStyle={{ padding: 0 }}>
          <Row justify="space-between" className="px-6 py-5">
            <Space align="center">
              <span className="page-sub-title">{'活動報告'}</span>
              <Badge
                className="common-badge"
                count={99}
                style={{
                  backgroundColor: '#f0f0ee',
                }}
              />
            </Space>
            <Link className="sidebar-link" to={`blogs/new-blog`}>
              <Button className="active mr-2" type="primary">
                {'活動報告の作成'}
              </Button>
            </Link>
          </Row>
          <Row>
            <ActivityTable pagination={false} />
          </Row>
          <Row justify="end" className="py-4 px-6">
            <Link className="sidebar-link" to={`blogs`}>
              <Button className="active mr-2" type="secondary">
                {'一覧'}
              </Button>
            </Link>
          </Row>
        </Card>

        {/* 応援コメント */}
        <Card className="mb-5 table-card pb-0" bodyStyle={{ padding: 0 }}>
          <Row justify="space-between" className="px-6 py-5">
            <Space align="center">
              <span className="page-sub-title">{'応援コメント'}</span>
              <Badge
                className="common-badge"
                count={99}
                style={{
                  backgroundColor: '#f0f0ee',
                }}
              />
            </Space>
          </Row>
          <Row>
            <CommentTable pagination={false} />
          </Row>
          <Row justify="end" className="py-4 px-6">
            <Link className="sidebar-link" to={`comments`}>
              <Button className="active mr-2" type="secondary">
                {'一覧'}
              </Button>
            </Link>
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Summary;
