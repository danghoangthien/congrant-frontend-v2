import { Table, Dropdown, Button, Menu, Space, Select } from 'antd';
import { Link } from 'react-router-dom';
import { DANGER_COLOR } from 'styles/StyleConstants';
import Reply from './Reply';
const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(10).keys()).map(i => ({
  pub_date: '2023-04-01',
  status: randomOutput([1, 2, 3]),
  name: randomOutput([
    <Link to="/">
      <span style={{ fontWeight: 600 }}>田中 太郎</span>
    </Link>,
    <Link to="/">
      <span style={{ fontWeight: 600 }}>テスト</span>
    </Link>,
  ]),
  comment: '応援しています！',
  reply: 'ありがとうございます！',
}));

const menu = (
  <Menu
    className="action-menu"
    items={[
      {
        key: '1',
        label: (
          <Space>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              content_copy
            </span>
            <span>{'複製'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle', color: DANGER_COLOR }}
            >
              delete
            </span>
            <span style={{ color: DANGER_COLOR }}>{'削除'}</span>
          </Space>
        ),
      },
    ]}
  />
);

const columns = [
  {
    width: 150,
    title: '公開日時',
    dataIndex: 'pub_date',
    render: pub_date => pub_date,
  },
  {
    width: 150,
    title: 'お名前',
    dataIndex: 'name',
    render: name => name,
  },
  {
    width: 150,
    title: '公開/非公開',
    dataIndex: 'status',
    render: status => {
      if ([1, 2].includes(status)) {
        return (
          <Select defaultValue={status}>
            <Select.Option value={1}>{'公開'}</Select.Option>
            <Select.Option value={2}>{'非公開'}</Select.Option>
          </Select>
        );
      } else return <span>{'非公開希望'}</span>;
    },
  },
  {
    title: 'コメント',
    dataIndex: 'comment',
    render: comment => '応援しています！',
  },
  {
    title: '返信',
    dataIndex: 'reply',
    render: reply => 'ありがとうございます！',
  },
  {
    width: 150,
    title: 'アクション',
    align: 'center',
    dataIndex: 'action',
    render: action => (
      <Space>
        <Reply />
      </Space>
    ),
  },
];

const CommentTable = () => (
  <Table
    className="common-table"
    tableLayout="fixed"
    dataSource={dataSource}
    columns={columns}
    pagination={false}
    rowClassName={record => {
      console.log('record', record);
      return record.status === 1 ? 'table-row-light' : 'table-row-dark';
    }}
  />
);

export default CommentTable;
