import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CourseTable from './CourseTable';
import {
  MailOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  EditOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Button, Col, Row, Card, Space } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import EditIcon from '@mui/icons-material/Edit';

const dataSource = Array.from(Array(5).keys()).map(i => ({
  i: `${i}`,
  item_name: `認知経路`,
  format: '単数選択',
}));

const columnMap = {
  empty: {
    width: 50,
    title: '',
    render: row => <MenuOutlined className="display-inline-flex" />,
  },
  item_name: {
    width: 150,
    title: '項目名',
    dataIndex: 'item_name',
  },
  format: {
    title: '形式',
    dataIndex: 'format',
  },

  action: {
    width: 180,
    title: 'アクション',
    render: row => (
      <>
        <Button icon={<EditOutlined />}>{'編集'}</Button>
        <Button icon={<EllipsisOutlined />} className="ml-2" />
      </>
    ),
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="ml-5"
      icon={<MailOutlined />}
      onClick={() => {
        console.log('selectedRowKeys', selectedRowKeys);
      }}
    >
      {'メールを送る'}
    </Button>
  );
};

const CoursePage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'Funding Received'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="item">
          <Row justify="space-between" align="middle" className="item mb-5">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <span className="page-title">
                    <span className="ml-1 page-title">{'プロジェクト'}</span>
                  </span>
                </Col>
                <Col className="mr-2">
                  <Link className="sidebar-link" to={`summary`}>
                    <Button>
                      <span>{'サマリー'}</span>
                    </Button>
                  </Link>
                  <Link className="sidebar-link" to={`funding`}>
                    <Button>
                      <span>{'寄付決済'}</span>
                    </Button>
                  </Link>
                  <Link className="sidebar-link" to={`course`}>
                    <Button type="primary">
                      <span>{'コース別'}</span>
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Link className="sidebar-link" to={`edit`}>
                <Button icon={<EditIcon fontSize="small" />} className="active" type="primary">
                  {'プロジェクトの編集'}
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
        <Card className="item mb-5">
          <Row>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <span className="page-sub-title">{'Aコース（残数：9個/20個）'}</span>
                <Button icon={<DownloadOutlined />}>{'ダウンロード'}</Button>
              </Space>
            </Col>
            <Col sm={24} md={24} lg={24}>
              <CourseTable />
            </Col>
          </Row>
        </Card>
        <Card className="item mb-5">
          <Row>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <span className="page-sub-title">{'Bコース（残数：9個/20個）'}</span>
                <Button icon={<DownloadOutlined />}>{'ダウンロード'}</Button>
              </Space>
            </Col>
            <Col sm={24} md={24} lg={24}>
              <CourseTable />
            </Col>
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default CoursePage;
