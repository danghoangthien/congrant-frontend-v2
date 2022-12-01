import { Table, Space, Button } from 'antd';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  dateTime: randomOutput(['2022年10月入金分']),
}));

const columnMap = {
  dateTime: {
    width: 200,
    title: '入金日',
    dataIndex: 'dateTime',
  },
  明細書PDF: {
    width: 200,
    title: '件数',
    render: row => (
      <Space>
        <Button
          className="icon-btn"
          type="primary"
          icon={<span className="material-symbols-outlined">open_in_new</span>}
        >
          {'PDFを開く'}
        </Button>
        <Button
          className="icon-btn"
          icon={<span className="material-symbols-outlined">file_download</span>}
        >
          {'ダウンロード'}
        </Button>
      </Space>
    ),
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const LoginHistoryTable = () => (
  <Table dataSource={dataSource} columns={columns} pagination={false} />
);

export default LoginHistoryTable;
