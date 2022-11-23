import { Table } from 'antd';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  date_time: randomOutput(['2023-04-01 12:34:56']),
  location: randomOutput(['Tokyo', 'Kyoto', 'Hawaii', 'Osaka']),
  ip: randomOutput(['126.110.111.11', '112.213.55.66', '208.112.25.36']),
  browser: randomOutput(['Chrome - Mac OS', 'Safari - Mac OS', 'Firefox - Mac OS']),
}));

const columnMap = {
  date_time: {
    width: 200,
    title: '日時',
    dataIndex: 'date_time',
  },
  location: {
    width: 150,
    title: 'ログインの場所',
    dataIndex: 'location',
  },
  ip: {
    width: 300,
    title: 'IPアドレス',
    dataIndex: 'ip',
  },
  browser: {
    width: 200,
    title: 'デバイス',
    dataIndex: 'browser',
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const LoginHistoryTable = () => (
  <Table dataSource={dataSource} columns={columns} pagination={false} />
);

export default LoginHistoryTable;
