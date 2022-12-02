import { Table, Tag } from 'antd';
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from 'app/pages/IndividualPage/components/Detail';
import { randomOutput } from 'utils/helper';
import { DONATION_TYPE_COLORS, DONATION_TYPES } from 'app/pages/DonationPage/consts';

export const dataSource = Array.from(Array(5).keys()).map(i => ({
  dateTime: randomOutput(['2022-10-15', '2022-10-10', '2022-10-26', '2022-10-03']),
  donationNo: randomOutput(['123012']),
  totalSettlementAmount: randomOutput(['2,000,000円']),
  donation_type: randomOutput([1, 2, 3]),
  supporter: randomOutput(['田中 太郎']),
  settlementAmount: randomOutput(['1,000円']),
}));

const columnMap = {
  dateTime: {
    width: 200,
    title: '受領日',
    dataIndex: 'dateTime',
  },
  donationNo: {
    width: 200,
    title: '寄付No.',
    dataIndex: 'donationNo',
  },
  donation_type: {
    width: 80,
    title: '寄付タイプ',
    dataIndex: 'donation_type',
    render: donation_type => (
      <Tag
        style={{
          color: DONATION_TYPE_COLORS[donation_type][2],
          backgroundColor: DONATION_TYPE_COLORS[donation_type][0],
          border: `1px solid ${DONATION_TYPE_COLORS[donation_type][1]}`,
        }}
      >
        {DONATION_TYPES[donation_type] || ''}
      </Tag>
    ),
  },
  supporter: {
    width: 150,
    title: 'サポーター',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
    csvOutput: ({ supporter }) => supporter,
  },
  settlementAmount: {
    width: 200,
    title: '決済金額',
    dataIndex: 'settlementAmount',
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const DataTable = () => <Table dataSource={dataSource} columns={columns} pagination={false} />;

export default DataTable;
