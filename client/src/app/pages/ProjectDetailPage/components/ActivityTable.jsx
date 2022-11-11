import { Tag, Table, Dropdown, Button, Menu } from 'antd';
import { EllipsisOutlined, SendOutlined, TagFilled, DeleteFilled } from '@ant-design/icons';
import EditIcon from '@mui/icons-material/Edit';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(3).keys()).map(i => ({
  pub_date: '2023-04-01',
  status: '123,456円',
  title: '123件',
  support_amount_last_month: '123,456円',
  action: 'アクション',
}));

// Action Menu
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
    title: 'タイトル',
    dataIndex: 'title',
    render: title => 'マンスリーサポーター30人達成しました！',
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

const ActivityTable = () => (
  <Table tableLayout="fixed" dataSource={dataSource} columns={columns} pagination={false} />
);

export default ActivityTable;
