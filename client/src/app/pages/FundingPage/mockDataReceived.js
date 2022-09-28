import { Typography, Tag } from 'antd';

import { getWithExpiry } from 'utils/localStorageHandler';

import {
  RECEIPT_METHODS,
  DONATION_TYPES,
  PLANS,
  RECEIPT_STATUSES,
  DONATION_TYPE_COLORS,
} from './consts';

const { Text } = Typography;

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
];

const columnMap = {
  date_of_receipt: {
    title: '受領日',
    dataIndex: 'date_of_receipt',
    csvOutput: ({ date_of_receipt }) => date_of_receipt,
  },
  supporter: {
    title: 'サポーター',
    dataIndex: 'supporter',
    render: supporter => <Text type="success">{supporter}</Text>,
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
  limit: 1,
  total_items: 10,
  total_page: 10,
};

export { getRenderColumns, dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap };
