import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

export const dataSource = Array.from(Array(5).keys()).map(i => ({
  yyyymm: randomOutput(['202210']),
  dateTime: <span style={{ fontWeight: 600 }}>{randomOutput(['2022年10月入金分'])}</span>,
  number: randomOutput(['1,234件']),
  totalSettlementAmount: randomOutput(['2,000,000円']),
  settlementFee: randomOutput(['68,000円']),
  depositHandlingFee: randomOutput(['440円']),
  depositAmount: randomOutput(['1,931,560円']),
}));

const columnMap = {
  dateTime: {
    title: '入金日',
    dataIndex: 'dateTime',
  },
  number: {
    title: '件数',
    dataIndex: 'number',
  },
  totalSettlementAmount: {
    title: '決済金額合計',
    dataIndex: 'totalSettlementAmount',
  },
  settlementFee: {
    title: '決済手数料',
    dataIndex: 'settlementFee',
  },
  depositHandlingFee: {
    title: '入金事務手数料',
    dataIndex: 'depositHandlingFee',
  },
  depositAmount: {
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
      className="common-table clickable-table"
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      style={{ width: '100%' }}
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
