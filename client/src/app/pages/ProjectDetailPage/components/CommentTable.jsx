import { Table, Dropdown, Button, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import { StyledStatusTag2 } from 'styles/StatusTag.style';
import { DANGER_COLOR } from 'styles/StyleConstants';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(3).keys()).map(i => ({
  pub_date: '2023-04-01',
  status: randomOutput([
    <StyledStatusTag2 className="public">{'公開'}</StyledStatusTag2>,
    <StyledStatusTag2 className="non-public">{'非公開'}</StyledStatusTag2>,
  ]),
  name: randomOutput([<Link to="/">田中 太郎</Link>, <Link to="/">Huy Nguyen</Link>]),
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
    title: 'ステータス',
    dataIndex: 'status',
    render: status => status,
  },
  {
    width: 150,
    title: 'お名前',
    dataIndex: 'name',
    render: name => name,
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
        <Button type="primary">{'編集'}</Button>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button
            icon={<span className="material-symbols-outlined">more_horiz</span>}
            className="more-menu-btn"
          />
        </Dropdown>
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
  />
);

export default CommentTable;
