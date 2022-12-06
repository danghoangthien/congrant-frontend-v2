import { Table, Space, Button } from 'antd';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  dateTime: <span style={{ fontWeight: 600 }}>{randomOutput(['2022年10月入金分'])}</span>,
}));

const columnMap = {
  dateTime: {
    width: 180,
    title: '入金日',
    dataIndex: 'dateTime',
  },
  明細書PDF: {
    title: '明細書PDF',
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
  <Table
    style={{ width: '100%' }}
    className="common-table"
    dataSource={dataSource}
    columns={columns}
    pagination={false}
  />
);

export default LoginHistoryTable;
