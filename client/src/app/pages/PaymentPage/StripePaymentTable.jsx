import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

export const dataSource = Array.from(Array(5).keys()).map(i => ({
  yyyymm: randomOutput(['202210']),
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

const DataTable = () => {
  const history = useHistory();
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            history.push(`stripe/${record.yyyymm}`);
          }, // click row
        };
      }}
    />
  );
};

export default DataTable;
