// ANTD
import { Tag, Badge, Space, Button, Dropdown, Menu, Tooltip, Row } from 'antd';
import { getWithExpiry } from 'utils/localStorageHandler';
// STYLE
import { StyledBadgeDot } from 'styles/global-styles';
// COMPONENT
import DrawerHandle from '../../components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';
// UTILS
import { randomOutput } from 'utils/helper';
// CONST
import {
  DONATION_TYPES,
  DONATION_TYPE_COLORS,
  DONATION_STATUS_COLOR,
  DONATION_STATUSES,
} from './consts';
// IMAGE
import noteIclon from 'styles/assets/note.svg';

// その他の操作メニュー・Bulk Select Record Action Menu
export const menuItems = status => {
  return [
    {
      key: '1',
      label: (
        <Space onClick={() => {}}>
          <span
            className="material-symbols-outlined fill-icon"
            style={{ fontSize: '16px', verticalAlign: 'middle' }}
          >
            send
          </span>
          <span className="ml-2">
            {status}
            {'フォームを送る'}
          </span>
        </Space>
      ),
    },
    {
      key: '2',
      label: (
        <Space onClick={() => {}}>
          <span
            className="material-symbols-outlined fill-icon"
            style={{ fontSize: '16px', verticalAlign: 'middle' }}
          >
            send
          </span>
          <span className="ml-2">
            {status}
            {'フォームのURLをコピー'}
          </span>
        </Space>
      ),
    },
  ];
};

// レコードアクションメニュー・Record Action Menu
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'アクション1',
      },
      {
        key: '2',
        label: 'アクション2',
      },
    ]}
  />
);

const dataSource = [
  {
    donation_no: '12345678',
    key: '1',
    recurring_id: '1',
    status: '1',
    supporter: '山田 花子',
    donation_type: '1',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
    date_and_reason: '解約日・理由',
  },
  {
    donation_no: '12345678',
    key: '2',
    recurring_id: '2',
    status: '2',
    supporter: '山田 花子',
    donation_type: '2',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
    date_and_reason: '解約日・理由',
  },
  {
    donation_no: '12345678',
    key: '3',
    recurring_id: '3',
    status: '3',
    supporter: '山田 花子',
    donation_type: '1',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
    date_and_reason: '解約日・理由',
  },
];

const columnMap = {
  // 継続契約No.
  donation_no: {
    fixed: 'left',
    width: 120,
    title: '継続契約No.',
    dataIndex: 'donation_no',
  },
  // サポーター
  supporter: {
    width: 160,
    title: 'サポーター',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
  },
  // ステータス
  status: {
    width: 120,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={DONATION_STATUS_COLOR[status][0]} text={DONATION_STATUSES[status]} />
      </StyledBadgeDot>
    ),
  },
  // 寄付タイプ
  donation_type: {
    width: 120,
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
  // プラン
  plan: {
    width: 160,
    title: 'プラン',
    render: () => {
      const plan = randomOutput([
        'シルバーサポーター',
        '賛助会員（都度更新）',
        '正会員（自動更新）',
      ]);
      return <>{plan}</>;
    },
  },
  // 初回決済日
  unit_price_number_of_unit: {
    width: 120,
    title: '単価・口数',
    render: () => {
      const unit_price = randomOutput(['30,000,000円', '3,000円', '6,000円', '9,000円']);
      const number_of_unit = randomOutput(['3', '6', '9']);
      return (
        <>
          <span>{unit_price}</span>
          <br />
          <span>
            {number_of_unit}
            {'口'}
          </span>
        </>
      );
    },
  },
  // 金額
  amount: {
    width: 120,
    title: '金額',
    render: () => {
      const amount = randomOutput(['30,000,000円', '3,000円', '6,000円', '9,000円']);
      return amount;
    },
  },
  // 初回決済日
  first_payment_date: {
    width: 120,
    title: '初回決済日',
    dataIndex: 'first_payment_date',
  },
  // 最終決済日
  last_payment_date: {
    width: 120,
    title: '最終決済日',
    dataIndex: 'last_payment_date',
  },
  // 累計寄付回数
  cumulative_amount: {
    width: 120,
    title: '累計寄付金額',
    render: () => {
      const amount = randomOutput(['30,000,000円', '3,000円', '6,000円', '9,000円']);
      return amount;
    },
  },
  // 累計寄付回数
  cumulative_times: {
    width: 120,
    title: '累計寄付回数',
    render: ({ times }) => {
      return <>{times}</>;
    },
  },
  // 解約日・理由
  date_and_reason: {
    width: 160,
    title: '解約日・理由',
    render: ({ date_and_reason }) => {
      return (
        <Space>
          <span>{'2022-04-01'}</span>
          <div style={{ textAlign: 'center' }}>
            <Tooltip title={date_and_reason}>
              <img src={noteIclon} alt="" />
            </Tooltip>
          </div>
        </Space>
      );
    },
  },
  // アクション
  operate: {
    width: 120,
    title: 'アクション',
    render: row => (
      <Row justify="center">
        <Dropdown
          overlay={<Menu items={menuItems(DONATION_STATUSES[row.status])} />}
          placement="bottomRight"
        >
          <Button
            className="more-menu-btn"
            icon={<span className="material-symbols-outlined">more_horiz</span>}
          />
        </Dropdown>
      </Row>
    ),
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'continuous_contract_list_column_setting';

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
  limit: 50,
  total_items: 500,
  total_page: 10,
};

export { getRenderColumns, dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap };
