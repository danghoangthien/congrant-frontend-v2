import { Tag, Table, Dropdown, Button, Menu } from 'antd';
import { EllipsisOutlined, SendOutlined, TagFilled, DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const dataSource = Array.from(Array(3).keys()).map(i => ({
  pub_date: '2023-04-01',
  status: '123,456円',
  name: <Tag color="processing">{'単発'}</Tag>,
  comment: '応援しています！',
  reply: 'ありがとうございます！',
}));

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <>
            <SendOutlined style={{ color: 'black' }} />{' '}
            <span className="ml-2">{'メッセージを送る'}</span>
          </>
        ),
      },
      {
        key: '2',
        label: (
          <>
            <TagFilled style={{ color: 'black' }} />{' '}
            <span className="ml-2">{'属性を設定する'}</span>
          </>
        ),
      },
      {
        key: '3',
        label: (
          <>
            <DeleteFilled style={{ color: 'red' }} /> <span className="ml-2">{'削除'}</span>
          </>
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
    render: status => <Tag color="processing">{'単発'}</Tag>,
  },
  {
    width: 150,
    title: 'お名前',
    dataIndex: 'name',
    render: name => <Link to="/">田中 太郎</Link>,
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
      <>
        <Button className="active mr-2" type="primary">
          {'編集'}
        </Button>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      </>
    ),
  },
];

const CommentTable = () => (
  <Table tableLayout="fixed" dataSource={dataSource} columns={columns} pagination={false} />
);

export default CommentTable;
