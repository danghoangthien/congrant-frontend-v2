import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// Antd Components
import { Button, Col, Row, Card, Space, Breadcrumb } from 'antd';
// Components
import CourseTable from './components/CourseTable';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// Icons
import { DownloadOutlined } from '@ant-design/icons';
import EditIcon from '@mui/icons-material/Edit';

const CoursePage = () => {
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

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <span className="page-title">
                  <span className="sub-page-title">{'プロジェクトトップ'}</span>
                </span>
              </Col>
              <Col className="mr-2">
                <Breadcrumb className="bread-crumb" separator="">
                  <Breadcrumb.Item>
                    <Link className="bread-crumb-content" to={`summary`}>
                      サマリー
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link className="bread-crumb-content" to={`funding`}>
                      寄付決済
                    </Link>
                  </Breadcrumb.Item>
                  {params?.id === '2' && (
                    <Breadcrumb.Item>
                      <span className="bread-crumb-content">コース別</span>
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

        {/* コースカード・Course Card */}
        <Card className="mb-5 table-card" bodyStyle={{ padding: 0 }}>
          <Row className="px-6 py-4">
            <Space align="center">
              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                {'Aコース（残数：9個/20個）'}
              </span>
              <Button icon={<DownloadOutlined />}>{'ダウンロード'}</Button>
            </Space>
          </Row>
          <Row>
            {/* コーステーブル・Course Table */}
            <CourseTable />
          </Row>
        </Card>

        {/* コースカード・Course Card */}
        <Card className="table-card" bodyStyle={{ padding: 0 }}>
          <Row className="px-6 py-4">
            <Space align="center">
              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                {'Bコース（残数：9個/20個）'}
              </span>
              <Button icon={<DownloadOutlined />}>{'ダウンロード'}</Button>
            </Space>
          </Row>
          <Row>
            {/* コーステーブル・Course Table */}
            <CourseTable />
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default CoursePage;
