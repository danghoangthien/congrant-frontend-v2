import { Table } from 'antd';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  dateTime: randomOutput(['2022年10月入金分']),
  number: randomOutput(['1,234件']),
  totalSettlementAmount: randomOutput(['2,000,000円']),
  settlementFee: randomOutput(['68,000円']),
  depositHandlingFee: randomOutput(['440円']),
  depositAmount: randomOutput(['1,931,560円']),
}));

const columnMap = {
  dateTime: {
    width: 200,
    title: '入金日',
    dataIndex: 'dateTime',
  },
  number: {
    width: 200,
    title: '件数',
    dataIndex: 'number',
  },
  totalSettlementAmount: {
    width: 150,
    title: '決済金額合計',
    dataIndex: 'totalSettlementAmount',
  },
  settlementFee: {
    width: 300,
    title: '決済手数料',
    dataIndex: 'settlementFee',
  },
  depositHandlingFee: {
    width: 200,
    title: '入金事務手数料',
    dataIndex: 'depositHandlingFee',
  },
  depositAmount: {
    width: 200,
    title: '入金額',
    dataIndex: 'depositAmount',
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const LoginHistoryTable = () => (
  <Table dataSource={dataSource} columns={columns} pagination={false} />
);

export default LoginHistoryTable;
