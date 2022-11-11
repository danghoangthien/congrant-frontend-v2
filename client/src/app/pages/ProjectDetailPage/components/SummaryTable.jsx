import { Table } from 'antd';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(3).keys()).map(i => ({
  summary: randomOutput(['単発', '毎月', '毎年']),
  support_amount: '123,456円',
  number_of_support: '123件',
  support_amount_average: '1,234円',
  support_amount_last_month: '123,456円',
  number_of_support_last_month: '123件',
}));

const columnMap = {
  summary: {
    width: 100,
    title: '',
    dataIndex: 'summary',
    align: 'center',
    render: summary => <span style={{ fontWeight: 600 }}>{summary}</span>,
  },
  support_amount: {
    width: 150,
    title: '支援金額',
    dataIndex: 'support_amount',
  },
  number_of_support: {
    width: 150,
    title: '支援件数',
    dataIndex: 'number_of_support',
  },
  support_amount_average: {
    width: 150,
    title: '平均単価',
    dataIndex: 'support_amount_average',
  },
  support_amount_last_month: {
    width: 150,
    title: '直近1ヶ月あたり金額',
    dataIndex: 'support_amount_last_month',
  },
  number_of_support_last_month: {
    width: 150,
    title: '直近1ヶ月あたり件数',
    dataIndex: 'number_of_support_last_month',
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const SummaryTable = () => (
  <Table
    className="no-btm-bdr"
    dataSource={dataSource}
    columns={columns}
    pagination={false}
    style={{ width: '100%' }}
  />
);

export default SummaryTable;
