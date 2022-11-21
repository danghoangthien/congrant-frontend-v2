import { Link, useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Badge, Space, Breadcrumb } from 'antd';
import EditIcon from '@mui/icons-material/Edit';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { Helmet } from 'react-helmet-async';
// Components
import SummaryTable from './SummaryTable';
import ActivityTable from './ActivityTable';
import CommentTable from './CommentTable';

const Summary = () => {
  const params = useParams();
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'プロジェクトトップ'}</title>
          <meta name="description" content={'プロジェクトトップ'} />
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
                <div className="sub-page-title">{'プロジェクトトップ'}</div>
              </Col>
              <Col className="mr-2">
                <Breadcrumb className="bread-crumb" separator="">
                  <Breadcrumb.Item>
                    <span className="bread-crumb-content">サマリー</span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link className="bread-crumb-content" to={`funding`}>
                      寄付決済
                    </Link>
                  </Breadcrumb.Item>
                  {params?.id === '2' && (
                    <Breadcrumb.Item>
                      <Link className="bread-crumb-content" to={`course`}>
                        コース別
                      </Link>
                    </Breadcrumb.Item>
                  )}
                </Breadcrumb>
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col>
            <Link className="sidebar-link" to={`edit`}>
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
            <Button className="active mr-2" type="primary">
              {'活動報告の作成'}
            </Button>
          </Row>
          <Row>
            <ActivityTable />
          </Row>
          <Row justify="end" className="py-4 px-6">
            <Button className="active mr-2" type="secondary">
              {'一覧'}
            </Button>
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
            <CommentTable />
          </Row>
          <Row justify="end" className="py-4 px-6">
            <Button className="active mr-2" type="secondary">
              {'一覧'}
            </Button>
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Summary;
