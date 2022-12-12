import { Tag, Badge, Space } from 'antd';
import { getWithExpiry } from 'utils/localStorageHandler';
import { randomOutput } from 'utils/helper';
import { StyledBadgeDot } from 'styles/global-styles';
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';
import { DANGER_COLOR } from 'styles/StyleConstants';

import {
  RECEIPT_METHODS,
  DONATION_TYPES,
  PLANS,
  RECEIPT_STATUSES,
  RECEIPT_STATUS_COLOR,
  DONATION_TYPE_COLORS,
} from './consts';

const dataSource = [
  {
    key: '0',
    donation_id: '1',
    date_of_receipt: '2022-07-30',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: 2,
  },
  {
    key: '1',
    donation_id: '2',
    date_of_receipt: '2022-07-30',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: 2,
  },
  {
    key: '2',
    donation_id: '3',
    date_of_receipt: '2022-07-31',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '2',
    plan: '0',
    amount: '3,000円',
    receipt_status: 1,
  },
  {
    key: '3',
    donation_id: '4',
    date_of_receipt: '2022-07-29',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '1',
    plan: '0',
    amount: '3,000円',
    receipt_status: 0,
  },
  {
    key: '4',
    donation_id: '5',
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
    donation_id: '6',
    date_of_receipt: '2022-07-27',
    supporter: '荒木 雄大',
    project: 'NPO法人コングラントへのご支援をお願いします！',
    receipt_method: '1',
    donation_type: '3',
    plan: '0',
    amount: '3,000円',
    receipt_status: '1',
  },
  {
    key: '6',
    donation_id: '7',
    date_of_receipt: '2018-07-22',
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
    donation_id: '8',
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
    donation_id: '9',
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
    donation_id: '10',
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
    donation_id: '11',
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
    donation_id: '12',
    date_of_receipt: '2021-07-25',
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
    donation_id: '13',
    date_of_receipt: '2021-07-24',
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
    donation_id: '14',
    date_of_receipt: '2021-07-23',
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
    donation_id: '15',
    date_of_receipt: '2021-07-22',
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
    donation_id: '16',
    date_of_receipt: '2021-07-21',
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
    donation_id: '17',
    date_of_receipt: '2021-07-20',
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
    donation_id: '18',
    date_of_receipt: '2021-07-19',
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
    donation_id: '19',
    date_of_receipt: '2021-07-18',
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
    donation_id: '20',
    date_of_receipt: '2021-07-17',
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
    donation_id: '21',
    date_of_receipt: '2021-07-16',
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
    donation_id: '22',
    date_of_receipt: '2021-07-15',
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
    donation_id: '23',
    date_of_receipt: '2021-07-14',
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
    donation_id: '24',
    date_of_receipt: '2021-07-13',
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
    donation_id: '25',
    date_of_receipt: '2021-07-12',
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
  donation_number: {
    title: '寄付No',
    render: row => <>{'寄付No'}</>,
    csvOutput: row => <>{'寄付No'}</>,
    defaultVisible: false,
  },
  date_of_receipt: {
    width: 140,
    title: '受領日',
    dataIndex: 'date_of_receipt',
    csvOutput: ({ date_of_receipt }) => date_of_receipt,
    defaultVisible: true,
  },
  date_of_pament: {
    title: '入金日',
    render: row => <>{'入金日'}</>,
    csvOutput: row => <>{'入金日'}</>,
    defaultVisible: false,
  },
  supporter: {
    title: 'サポーター',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
    csvOutput: ({ supporter }) => supporter,
    defaultVisible: true,
  },
  project: {
    title: 'プロジェクト',
    dataIndex: 'project',
    csvOutput: ({ project }) => project,
    defaultVisible: true,
  },
  receipt_method: {
    title: '受領方法',
    dataIndex: 'receipt_method',
    render: receipt_method => RECEIPT_METHODS[receipt_method] || '',
    csvOutput: ({ receipt_method }) => RECEIPT_METHODS[receipt_method] || '',
    defaultVisible: true,
  },
  donation_type: {
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
    csvOutput: ({ donation_type }) => DONATION_TYPES[donation_type],
    defaultVisible: true,
  },
  plan_and_amount: {
    title: 'プラン・金額',
    render: ({ amount }) => {
      const plan = randomOutput([
        'シルバーサポーター',
        '賛助会員（都度更新）',
        '正会員（自動更新）',
        '',
      ]);
      return (
        <>
          {plan && (
            <>
              {plan}
              <br />
            </>
          )}
          {amount}
        </>
      );
    },
    csvOutput: ({ plan, amount }) => `${PLANS[plan] || ''} ${amount}`,
    defaultVisible: true,
  },
  remarks: {
    title: '備考欄',
    render: row => <>{'備考欄'}</>,
    csvOutput: row => <>{'備考欄'}</>,
    defaultVisible: false,
  },
  receipt_status: {
    title: '領収書',
    dataIndex: 'receipt_status',
    render: receipt_status => (
      <StyledBadgeDot>
        <Badge
          status={RECEIPT_STATUS_COLOR[receipt_status]}
          text={RECEIPT_STATUSES[receipt_status]}
        />
      </StyledBadgeDot>
    ),
    csvOutput: ({ receipt_status }) => RECEIPT_STATUSES[receipt_status] || '',
  },
  cognitive_pathway: {
    title: '認知経路',
    render: row => <>{'認知経路'}</>,
    csvOutput: row => <>{'認知経路'}</>,
    defaultVisible: false,
  },
  donation_usage: {
    title: '寄付の使用用途',
    render: row => <>{'寄付の使用用途'}</>,
    csvOutput: row => <>{'寄付の使用用途'}</>,
    defaultVisible: false,
  },
  support_exp: {
    title: '支援経験',
    render: row => <>{'支援経験'}</>,
    csvOutput: row => <>{'支援経験'}</>,
    defaultVisible: false,
  },
  reason: {
    title: '寄付理由',
    render: row => <>{'寄付理由'}</>,
    csvOutput: row => <>{'寄付理由'}</>,
    defaultVisible: false,
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'received_funding_column_setting';

const _getRenderColumns = () => {
  //let visibleColumns = Object.keys(columnMap);
  let _visibleColumns = Object.entries(columnMap).filter(([key, value]) => {
    //console.log('entry value', value);
    return value?.defaultVisible !== false;
  });
  console.log('_visibleColumns', _visibleColumns);
  let visibleColumns = Object.fromEntries(_visibleColumns);
  let visibleColumnKeys = Object.keys(visibleColumns);
  const columnsInSetting = getWithExpiry(COLUMN_SETTING_LOCALSTORAGE);
  if (columnsInSetting) {
    visibleColumnKeys = Object.keys(columnMap).filter(columnName => {
      return columnsInSetting.includes(columnName);
    });
  }
  const renderColumns = visibleColumnKeys.map(columnName => {
    return columnMap[columnName];
  });
  console.log('getRenderColumns', renderColumns);
  return renderColumns;
};

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

const menuItems = selectedRowKeys => [
  {
    key: '1',
    label: (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <span
          className="material-symbols-outlined fill-icon"
          style={{ fontSize: '16px', verticalAlign: 'middle', color: DANGER_COLOR }}
        >
          delete
        </span>
        <span style={{ color: DANGER_COLOR }}>{'削除'}</span>
      </Space>
    ),
  },
];

export {
  getRenderColumns,
  dataSource,
  pagination,
  COLUMN_SETTING_LOCALSTORAGE,
  columnMap,
  menuItems,
};
