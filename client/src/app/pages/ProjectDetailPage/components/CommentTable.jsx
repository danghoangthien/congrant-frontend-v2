import { Table, Menu, Space, Select, Row } from 'antd';
import { DANGER_COLOR } from 'styles/StyleConstants';
import Reply from './Reply';
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from 'app/pages/IndividualPage/components/Detail';
import { TableStyle } from 'app/components/Table/Table.style';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(10).keys()).map(i => ({
  pub_date: '2023-04-01',
  status: randomOutput([1, 2, 3]),
  name: randomOutput(['田中 太郎', 'テスト']),
  comment: '応援しています！',
  reply: 'ありがとうございます！',
}));

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
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.name}</span>
      </DrawerHandle>
    ),
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
  <TableStyle>
    <Table
      className="common-table"
      tableLayout="fixed"
      dataSource={dataSource}
      columns={columns}
      rowClassName={record => {
        console.log('record', record);
        return record.status === 1 ? 'table-row-light' : 'table-row-dark';
      }}
    />
  </TableStyle>
);

export default CommentTable;
