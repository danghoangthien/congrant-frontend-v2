import { Row, Col, Tag, Button, Table, Space } from 'antd';
import InviteUser from './InviteUser';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
// UTILS
import { randomOutput } from 'utils/helper';

const dataSource = Array.from(Array(3).keys()).map(i => ({
  id: `${i}`,
  authority: `管理者`,
  username: '吉川 はじめ',
  email: `yoshikawa@congrant.com`,
  operation_authority: randomOutput([
    'すべて',
    <>
      プロジェクトの変更
      <br />
      基本設定の変更
    </>,
    '-',
  ]),
  payment_notification: `受信`,
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
  operation_authority: {
    title: '操作権限',
    dataIndex: 'operation_authority',
  },
  payment_notification: {
    title: '決済関連通知',
    dataIndex: 'payment_notification',
  },
  action: {
    width: 120,
    title: '操作',
    render: row => (
      <Space>
        <Button
          className="more-menu-btn"
          icon={<span className="material-symbols-outlined fill-icon">edit</span>}
        ></Button>
        <Button
          className="more-menu-btn"
          icon={
            <span className="material-symbols-outlined fill-icon" style={{ color: DANGER_COLOR }}>
              delete
            </span>
          }
        ></Button>
      </Space>
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
