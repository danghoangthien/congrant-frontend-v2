import { Typography, Tag } from 'antd';

import { getWithExpiry } from 'utils/localStorageHandler';

import {
  RECEIPT_METHODS,
  DONATION_TYPES,
  PLANS,
  RECEIPT_STATUSES,
  DONATION_TYPE_COLORS,
} from './consts';

const dataSource = [
  {
    key: '1',
    date_of_receipt: '2022-07-30',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '2',
    date_of_receipt: '2022-07-31',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '3',
    date_of_receipt: '2022-07-29',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt: '1',
  },
  {
    key: '4',
    date_of_receipt: '2022-07-28',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '5',
    date_of_receipt: '2022-07-27',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '6',
    date_of_receipt: '2022-07-26',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '7',
    date_of_receipt: '2022-07-25',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '8',
    date_of_receipt: '2022-07-24',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '9',
    date_of_receipt: '2022-07-23',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '10',
    date_of_receipt: '2022-07-22',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '11',
    date_of_receipt: '2022-07-25',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '12',
    date_of_receipt: '2022-07-24',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '13',
    date_of_receipt: '2022-07-23',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '14',
    date_of_receipt: '2022-07-22',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '15',
    date_of_receipt: '2022-07-21',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '16',
    date_of_receipt: '2022-07-20',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '17',
    date_of_receipt: '2022-07-19',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '18',
    date_of_receipt: '2022-07-18',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '19',
    date_of_receipt: '2022-07-17',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '20',
    date_of_receipt: '2022-07-16',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '21',
    date_of_receipt: '2022-07-15',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '22',
    date_of_receipt: '2022-07-14',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '23',
    date_of_receipt: '2022-07-13',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt: '1',
  },
  {
    key: '24',
    date_of_receipt: '2022-07-12',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '25',
    date_of_receipt: '2022-07-11',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
];

const columnMap = {
  date_of_receipt: {
    title: '受領日',
    dataIndex: 'date_of_receipt',
    csvOutput: ({ date_of_receipt }) => date_of_receipt,
  },
  supporter: {
    title: 'サポーター',
    render: row => row.supporter,
    csvOutput: ({ supporter }) => supporter,
  },
  project: {
    title: 'プロジェクト',
    dataIndex: 'project',
    csvOutput: ({ project }) => project,
  },
  receipt_method: {
    title: '受領方法',
    dataIndex: 'receipt_method',
    render: receipt_method => RECEIPT_METHODS[receipt_method] || '',
    csvOutput: ({ receipt_method }) => RECEIPT_METHODS[receipt_method] || '',
  },
  donation_type: {
    title: '寄付タイプ',
    dataIndex: 'donation_type',
    render: donation_type => (
      <Tag color={DONATION_TYPE_COLORS[donation_type]}>{DONATION_TYPES[donation_type] || ''}</Tag>
    ),
    csvOutput: ({ donation_type }) => DONATION_TYPES[donation_type],
  },
  plan_and_amount: {
    title: 'プラン・金額',
    render: ({ plan, amount }) => (
      <>
        {PLANS[plan] || ''}
        <br />
        {amount}
      </>
    ),
    csvOutput: ({ plan, amount }) => `${PLANS[plan] || ''} ${amount}`,
  },
  receipt_status: {
    title: '領収書',
    dataIndex: 'receipt_status',
    render: receipt_status => RECEIPT_STATUSES[receipt_status] || '',
    csvOutput: ({ receipt_status }) => RECEIPT_STATUSES[receipt_status] || '',
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'received_funding_column_setting';

const getRenderColumns = () => {
  let visibleColumns = Object.keys(columnMap);
  const columnsInSetting = getWithExpiry(COLUMN_SETTING_LOCALSTORAGE);
  if (columnsInSetting) {
    visibleColumns = visibleColumns.filter(columnName => {
      return columnsInSetting.includes(columnName);
    });
  }
  const renderColumns = visibleColumns.map(columnName => {
    return columnMap[columnName];
  });
  return renderColumns;
};

const pagination = {
  current_page: 1,
  limit: 5,
  total_items: 25,
  total_page: 5,
};

export { getRenderColumns, dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap };
