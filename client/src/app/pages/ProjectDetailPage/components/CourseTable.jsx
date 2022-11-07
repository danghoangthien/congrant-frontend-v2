import { Select, Button, Table, Typography, Badge } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { StyledBadgeDot } from 'app/pages/SupporterPage/components/ContinuousContract.style';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  application_datetime: randomOutput(['2022-07-30  12:34:56']),
  receipt_status: randomOutput(['受領済み', '未受領']),
  date_of_receipt: '2022-07-30',
  supporter: randomOutput(['田中 太郎', '山田 花子', '鈴木 一郎']),
  receipt_method: randomOutput(['カード決済', '銀行振込']),
  number_of_words: randomOutput(['1口', '2口', '3口']),
  total_amount: randomOutput(['3,000円', '5,000円', '9,000円']),
}));

const columnMap = {
  application_datetime: {
    width: 200,
    title: '申込日時',
    dataIndex: 'application_datetime',
  },
  receipt_status: {
    width: 150,
    title: '受領ステータス',
    dataIndex: 'receipt_status',
    render: receipt_status => (
      <StyledBadgeDot>
        <Badge status="success" text={receipt_status} />
      </StyledBadgeDot>
    ),
  },
  date_of_receipt: {
    width: 150,
    title: '受領日',
    dataIndex: 'date_of_receipt',
  },
  supporter: {
    width: 150,
    title: 'サポーター',
    dataIndex: 'supporter',
    render: supporter => <Typography.Text type="success">{supporter}</Typography.Text>,
  },
  receipt_method: {
    width: 150,
    title: '受領方法',
    dataIndex: 'receipt_method',
  },
  number_of_words: {
    title: '口数',
    dataIndex: 'number_of_words',
  },
  total_amount: {
    width: 150,
    title: '合計金額',
    dataIndex: 'total_amount',
  },
  return_shipping_status: {
    title: 'リターン発送状況',
    render: ({ return_shipping_status }) => {
      const status = randomOutput(['未発送', '発送済み']);
      return (
        <Select
          defaultValue={{
            value: '1',
          }}
          style={{
            width: 185,
          }}
          onChange={() => {}}
        >
          <Select.Option value="1">{status}</Select.Option>
        </Select>
      );
    },
  },
  action: {
    title: 'アクション',
    render: row => <Button icon={<EllipsisOutlined />} />,
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const CourseTable = () => <Table dataSource={dataSource} columns={columns} pagination={false} />;

export default CourseTable;
