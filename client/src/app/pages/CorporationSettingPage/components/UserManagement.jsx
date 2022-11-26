import { Row, Col, Tag, Button, Table } from 'antd';
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
    width: 120,
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
    width: 120,
    title: '操作',
    render: row => (
      <Button
        className="icon-btn less-shadow-btn"
        icon={<span className="material-symbols-outlined fill-icon">delete</span>}
      >
        {'削除'}
      </Button>
    ),
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const UserManagement = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'ユーザー管理'}</div>
      </Col>
      <Col span={24} className="mb-6">
        <Table tableLayout="fixed" dataSource={dataSource} columns={columns} pagination={false} />
      </Col>
      <Col span={24}>
        <InviteUser />
      </Col>
    </Row>
  );
};

export default UserManagement;
