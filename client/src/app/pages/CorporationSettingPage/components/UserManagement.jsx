import { Row, Col, Tag, Button, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import InviteUser from './InviteUser';

const dataSource = Array.from(Array(3).keys()).map(i => ({
  id: `${i}`,
  authority: `管理者`,
  username: '吉川 はじめ',
  email: `yoshikawa@congrant.com`,
}));

const columnMap = {
  authority: {
    width: 150,
    title: '権限',
    render: ({ authority }) => <Tag>{authority}</Tag>,
  },
  username: {
    title: 'ユーザー名',
    dataIndex: 'username',
  },
  email: {
    title: 'メールアドレス',
    dataIndex: 'email',
  },
  action: {
    width: 180,
    title: 'アクション',
    render: row => <Button icon={<DeleteIcon className="display-inline-flex" />}>{'削除'}</Button>,
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const UserManagement = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'ユーザー管理'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Col>
        </Row>
        <Row className="item">
          <Col sm={24} md={24} lg={24}>
            <InviteUser />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserManagement;
