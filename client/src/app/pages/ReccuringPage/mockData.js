// ANTD
import { Tag, Badge, Space, Button, Dropdown, Menu, Tooltip } from 'antd';
// STYLE
import { StyledBadgeDot } from 'styles/global-styles';
// COMPONENT
import DrawerHandle from '../../components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';
import ChangeAmount from './components/ChangeAmountClone';
import Cancel from './components/CancelClone';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
import { DONATION_TYPES, DONATION_STATUSES } from 'utils/consts';
// IMAGE
import noteIclon from 'styles/assets/note.svg';

// その他の操作メニュー・Bulk Select Record Action Menu
export const menuItems = status => {
  // 継続中（ongoing contract）
  if (status === 2) {
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
            <span>{'再決済フォームを送る'}</span>
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
              content_copy
            </span>
            <span>{'再決済フォームのURLをコピー'}</span>
          </Space>
        ),
      },
    ];
  }
  // 際決済待ち（waiting for re-payment）
  else if (status === 1) {
    return [
      {
        key: '1',
        label: <ChangeAmount />,
      },
      {
        key: '2',
        label: <Cancel />,
      },
    ];
  } else {
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
            <span>{'再決済フォームを送る'}</span>
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
            <span>{'解約フォームを送る'}</span>
          </Space>
        ),
      },
    ];
  }
};

export const bulkMenuItems = status => {
  // 継続中（ongoing contract）
  if (status === 2) {
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
            <span>{'再決済フォームを送る'}</span>
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
              content_copy
            </span>
            <span>{'再決済フォームのURLをコピー'}</span>
          </Space>
        ),
      },
    ];
  }
  // 際決済待ち（waiting for re-payment）
  else if (status === 1) {
    return [
      {
        key: '1',
        label: (
          <Space onClick={() => {}}>
            <ChangeAmount />
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ color: DANGER_COLOR, fontSize: '16px', verticalAlign: 'middle' }}
            >
              do_disturb
            </span>
            <span style={{ color: DANGER_COLOR }}>{'解約'}</span>
          </Space>
        ),
      },
    ];
  } else {
    return null;
  }
};

const dataSource = [
  {
    donation_no: '12345678',
    key: '1',
    recurring_id: '1',
    status: 1,
    supporter: '山田 花子',
    donation_type: '1',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
    reason: '解約日・理由',
  },
  {
    donation_no: '12345678',
    key: '2',
    recurring_id: '2',
    status: 2,
    supporter: '山田 花子',
    donation_type: '2',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
    reason: '解約日・理由',
  },
  {
    donation_no: '12345678',
    key: '3',
    recurring_id: '3',
    status: 3,
    supporter: '山田 花子',
    donation_type: '1',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
    reason: '解約日・理由',
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
  // アクション
  operate: {
    width: 120,
    title: 'アクション',
    render: row => (
      <Space onClick={e => e.stopPropagation()}>
        <Dropdown
          overlay={[1, 2].includes(row.status) ? <Menu items={menuItems(row.status)} /> : <></>}
          placement="bottomRight"
        >
          <Button
            className="more-menu-btn"
            style={{ display: [1, 2].includes(row.status) ? 'flex' : 'none' }}
            icon={<span className="material-symbols-outlined">more_horiz</span>}
          />
        </Dropdown>
      </Space>
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
