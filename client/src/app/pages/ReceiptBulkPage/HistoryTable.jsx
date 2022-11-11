import { Space, Button, Table } from 'antd';
import { DownloadOutlined, SendOutlined } from '@ant-design/icons';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  created_at: randomOutput(['2023-04-01 12:34:56']),
  number: randomOutput(['136件']),
  created_by: randomOutput(['荒木 雄大']),
}));

const columnMap = {
  created_at: {
    width: 200,
    title: '作成日時',
    dataIndex: 'created_at',
  },
  number: {
    width: 150,
    title: '件数',
    dataIndex: 'number',
  },
  created_by: {
    width: 300,
    title: '金額',
    dataIndex: 'created_by',
  },
  action: {
    title: 'アクション',
    render: row => (
      <Space>
        <Button className="bold" icon={<DownloadOutlined />} type="primary">
          {'ダウンロード（zip）'}
        </Button>
        <Button className="bold" icon={<SendOutlined />} type="primary">
          {'メールで送る'}
        </Button>
      </Space>
    ),
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const HistoryTable = () => <Table dataSource={dataSource} columns={columns} pagination={false} />;

export default HistoryTable;
