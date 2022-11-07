import { Row, Col, Card, Button, Badge, Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { MenuOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import EditIcon from '@mui/icons-material/Edit';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import SummaryTable from './SummaryTable';
import ActivityTable from './ActivityTable';
import CommentTable from './CommentTable';

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

const Summary = () => {
  const params = useParams();
  return (
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
                <Button type="primary">{'サマリー'}</Button>
                <Link className="sidebar-link" to={`funding`}>
                  <Button>
                    <span>{'寄付決済'}</span>
                    <Badge className="ml-1 display-inline-flex pb-1" count={99}></Badge>
                  </Button>
                </Link>
                {params?.id === '2' && (
                  <Link className="sidebar-link" to={`course`}>
                    <Button>
                      <span>{'コース別'}</span>
                    </Button>
                  </Link>
                )}
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
        {/* サマリー */}
        <Card className="item mb-5">
          <Row>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <span className="page-sub-title">{'サマリー'}</span>
            </Col>
            <Col sm={24} md={24} lg={24}>
              <SummaryTable />
            </Col>
          </Row>
        </Card>

        {/* 活動報告 */}
        <Card className="item mb-5">
          <Row>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <span className="page-sub-title">{'活動報告'}</span>
                <Badge
                  count={99}
                  style={{
                    backgroundColor: '#bfbfbd',
                  }}
                />
              </Space>
            </Col>
            <Col sm={24} md={24} lg={24}>
              <ActivityTable />
            </Col>
          </Row>
        </Card>

        {/* 応援コメント */}
        <Card className="item mb-5">
          <Row>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <span className="page-sub-title">{'応援コメント'}</span>
                <Badge
                  count={99}
                  style={{
                    backgroundColor: '#bfbfbd',
                  }}
                />
              </Space>
            </Col>
            <Col sm={24} md={24} lg={24}>
              <CommentTable />
            </Col>
          </Row>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Summary;
