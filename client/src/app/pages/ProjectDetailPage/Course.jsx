import { Link, useParams } from 'react-router-dom';
// Antd Components
import { Button, Col, Row, Card, Space } from 'antd';
// Components
import CourseTable from './components/CourseTable';
import Breadcumd from 'app/components/Breadcumd';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// Icons
import { DownloadOutlined } from '@ant-design/icons';
import EditIcon from '@mui/icons-material/Edit';
import { HEADER_BREADCUMD_DATA, SUMMARY_BREADCUMD_DATA, ProjectDetailHeader } from './consts';

const CoursePage = () => {
  const params = useParams();

  return (
    <>
      <ProjectDetailHeader
        Breadcumd={<Breadcumd data={HEADER_BREADCUMD_DATA} active={HEADER_BREADCUMD_DATA[1].id} />}
      />
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
                <Breadcumd
                  style="button"
                  data={SUMMARY_BREADCUMD_DATA(params?.id)}
                  active={SUMMARY_BREADCUMD_DATA(params?.id)[2].id}
                  separator={null}
                />
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
