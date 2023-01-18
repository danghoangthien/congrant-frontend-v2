import { Link } from 'react-router-dom';
// ANTD
import { Space, Tag, Tooltip, Badge } from 'antd';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { DONATION_TYPES, PLANS, DONATION_STATUSES } from 'utils/consts';
// IMAGE
import noteIclon from 'styles/assets/note.svg';
// STYLE
import { StyledBadgeDot } from 'styles/global-styles';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  donation_number: `${i + 1234567}`,
  supporter_number: randomOutput([12345678]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  donation_type: randomOutput([1, 2, 3]),
  plan: randomOutput([1, 2, 3, 4, '']),
  status: randomOutput([1, 2, 3]),
  money: 30000000,
  quantity: 1,
  first_payment_date: '2022-09-30',
  last_payment_date: '2023-04-15',
  times: '8回',
  reason: randomOutput(['解約日・理由']),
}));

const columnMap = {
  // 継続契約No.
  donation_number: {
    fixed: 'left',
    width: 120,
    title: '継続契約No.',
    dataIndex: 'donation_number',
  },
  // サポーターNo.
  supporter_number: {
    fixed: 'left',
    width: 120,
    title: 'サポーターNo.',
    dataIndex: 'supporter_number',
    csvOutput: ({ supporter_number }) => supporter_number,
    defaultVisible: false,
  },
  // 団体ID
  organization_id: {
    width: 120,
    title: '団体ID',
    dataIndex: 'organization_id',
  },
  // 団体名
  organization_name: {
    width: 280,
    title: '団体名',
    render: ({ organization_name, organization_id }) => (
      <Link to={`/admin/organisations/${organization_id}`} className="admin-link">
        {organization_name}
      </Link>
    ),
  },
  //ステータス
  status: {
    width: 120,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={DONATION_STATUSES[status][1]} text={DONATION_STATUSES[status][0]} />
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
          color: DONATION_TYPES[donation_type][3],
          backgroundColor: DONATION_TYPES[donation_type][1],
          border: `1px solid ${DONATION_TYPES[donation_type][2]}`,
        }}
      >
        {DONATION_TYPES[donation_type][0] || ''}
      </Tag>
    ),
    csvOutput: ({ donation_type }) => DONATION_TYPES[donation_type],
    defaultVisible: true,
  },
  // プラン
  plan: {
    width: 160,
    title: 'プラン',
    render: ({ plan }) => <>{PLANS[plan] || ''}</>,
    csvOutput: row => <>{'プラン'}</>,
    defaultVisible: false,
  },
  // 単価・口数
  money_and_quantity: {
    width: 130,
    title: '単価・口数',
    render: ({ money, quantity }) => {
      return (
        <>
          {money && (
            <>
              {money.toLocaleString()}円
              <br />
            </>
          )}
          {quantity}口
        </>
      );
    },
    csvOutput: ({ money, quantity }) => `${money.toLocaleString()} ${quantity}口`,
    defaultVisible: true,
  },
  // 金額
  amount: {
    width: 130,
    title: '金額',
    render: ({ money, quantity }) => `${(money * quantity).toLocaleString()}円`,
    csvOutput: ({ money, quantity }) => `${(money * quantity).toLocaleString()}円`,
    defaultVisible: true,
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
    render: ({ reason }) => {
      return (
        <Space>
          <span>{'2022-04-01'}</span>
          <div style={{ textAlign: 'center' }}>
            <Tooltip title={reason}>
              <img src={noteIclon} alt="" />
            </Tooltip>
          </div>
        </Space>
      );
    },
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'news_list_column_setting';

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
