import { Tag, Badge, Space, Button, Dropdown, Menu } from 'antd';
import { CopyFilled } from '@ant-design/icons';
import { getWithExpiry } from 'utils/localStorageHandler';
import SendIcon from '@mui/icons-material/Send';
import { StyledBadgeDot } from 'styles/global-styles';
import DrawerHandle from '../../components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';
import { randomOutput } from 'utils/helper';

import {
  DONATION_TYPES,
  DONATION_TYPE_COLORS,
  DONATION_STATUS_COLOR,
  DONATION_STATUSES,
} from './consts';

export const menuItems = selectedRowKeys => [
  {
    key: '1',
    label: (
      <Space onClick={() => {}}>
        <SendIcon style={{ color: 'black' }} />{' '}
        <span className="ml-2">{'再決済フォームを送る'}</span>
      </Space>
    ),
  },
  {
    key: '2',
    label: (
      <Space onClick={() => {}}>
        <CopyFilled style={{ color: 'black' }} />{' '}
        <span className="ml-2">{'再決済フォームのURLをコピー'}</span>
      </Space>
    ),
  },
];

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
    key: '1',
    status: '1',
    supporter: '山田 花子',
    donation_type: '1',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
  },
  {
    key: '2',
    status: '2',
    supporter: '山田 花子',
    donation_type: '2',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
  },
  {
    key: '3',
    status: '3',
    supporter: '山田 花子',
    donation_type: '1',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
    first_payment_date: '2022-09-30',
    last_payment_date: '2023-04-15',
    money: '24,000円',
    times: '8回',
  },
];

const columnMap = {
  // ステータス
  status: {
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={DONATION_STATUS_COLOR[status][0]} text={DONATION_STATUSES[status]} />
      </StyledBadgeDot>
    ),
  },

  // サポーター
  supporter: {
    title: 'サポーター',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
  },

  // 頻度
  donation_type: {
    title: '頻度',
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

  // プラン・金額
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
  },

  // 初回決済日
  first_payment_date: {
    title: '初回決済日',
    dataIndex: 'first_payment_date',
  },

  // 最終決済日
  last_payment_date: {
    title: '最終決済日',
    dataIndex: 'last_payment_date',
  },

  // 累計金額・回数
  money_and_times: {
    title: '累計金額・回数',
    render: ({ money, times }) => {
      return (
        <>
          {money && (
            <>
              {money}
              <br />
            </>
          )}
          {times}
        </>
      );
    },
  },

  // アクション
  operate: {
    width: 100,
    title: 'アクション',
    render: row => (
      <Space>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button
            className="more-menu-btn"
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
