// ANTD
import { Tag, Badge, Space, Tooltip } from 'antd';
// UTILS
import { getWithExpiry } from 'utils/localStorageHandler';
import { randomOutput } from 'utils/helper';
// STYLE
import { StyledBadgeDot } from 'styles/global-styles';
// COMPONENT
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
import {
  RECEIPT_METHODS,
  DONATION_TYPES,
  PLANS,
  RECEIPT_STATUSES,
  RECEIPT_STATUS_COLOR,
  DONATION_TYPE_COLORS,
  REGISTER_ROUTES,
} from 'utils/consts';
// IMAGE
import noteIclon from 'styles/assets/note.svg';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  donation_number: `${i + 1234567}`,
  supporter: '荒木 雄大',
  date_of_receipt: '2022-07-30',
  project: 'NPO法人コングラントへのご支援をお願いします！',
  donation_type: randomOutput([1, 2, 3]),
  plan: randomOutput([1, 2, 3, 4, '']),
  money: 30000000,
  quantity: 1,
  custom_column: 'テキスト',
  custom_column2: '複数行のカスタム項目の場合はアイコンのみを表示し内容はツールチップで表示',
  receipt_method: randomOutput([1, 2, 3]),
  register_route: randomOutput([1, 2, 3]),
  receipt_status: 2,
}));

const columnMap = {
  // 寄付No.
  donation_number: {
    fixed: 'left',
    width: 120,
    title: '寄付No.',
    dataIndex: 'donation_number',
    csvOutput: ({ donation_number }) => donation_number,
    defaultVisible: false,
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
    csvOutput: ({ supporter }) => supporter,
    defaultVisible: true,
  },
  // 受領日
  date_of_receipt: {
    width: 120,
    title: '受領日',
    dataIndex: 'date_of_receipt',
    csvOutput: ({ date_of_receipt }) => date_of_receipt,
    defaultVisible: true,
  },
  // プロジェクト
  project: {
    width: 240,
    title: 'プロジェクト',
    dataIndex: 'project',
    csvOutput: ({ project }) => project,
    defaultVisible: true,
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
    width: 120,
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
    width: 120,
    title: '金額',
    render: ({ money, quantity }) => `${(money * quantity).toLocaleString()}円`,
    csvOutput: ({ money, quantity }) => `${(money * quantity).toLocaleString()}円`,
    defaultVisible: true,
  },
  // 受領方法
  receipt_method: {
    width: 120,
    title: '受領方法',
    render: ({ receipt_method }) => <>{RECEIPT_METHODS[receipt_method] || ''}</>,
    csvOutput: ({ receipt_method }) => receipt_method,
    defaultVisible: false,
  },
  // 登録経路
  register_route: {
    width: 160,
    title: '登録経路',
    dataIndex: 'register_route',
    render: ({ register_route }) => <>{REGISTER_ROUTES[register_route] || ''}</>,
    csvOutput: ({ register_route }) => register_route,
    defaultVisible: false,
  },
  // カスタム項目
  custom_column: {
    width: 160,
    title: 'カスタム項目',
    render: ({ custom_column }) => (
      <>
        <span>{custom_column}</span>
      </>
    ),
    csvOutput: ({ custom_column }) => custom_column,
    defaultVisible: false,
  },
  // カスタム項目
  custom_column2: {
    width: 160,
    title: 'カスタム項目',
    render: ({ custom_column2 }) => (
      <div style={{ textAlign: 'center' }}>
        <Tooltip title={custom_column2}>
          <img src={noteIclon} alt="" />
        </Tooltip>
      </div>
    ),
    csvOutput: ({ custom_column2 }) => custom_column2,
    defaultVisible: false,
  },
  // 領収書
  receipt_status: {
    width: 120,
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
};

const COLUMN_SETTING_LOCALSTORAGE = 'received_funding_column_setting';

// const _getRenderColumns = () => {
//   //let visibleColumns = Object.keys(columnMap);
//   let _visibleColumns = Object.entries(columnMap).filter(([key, value]) => {
//     //console.log('entry value', value);
//     return value?.defaultVisible !== false;
//   });
//   console.log('_visibleColumns', _visibleColumns);
//   let visibleColumns = Object.fromEntries(_visibleColumns);
//   let visibleColumnKeys = Object.keys(visibleColumns);
//   const columnsInSetting = getWithExpiry(COLUMN_SETTING_LOCALSTORAGE);
//   if (columnsInSetting) {
//     visibleColumnKeys = Object.keys(columnMap).filter(columnName => {
//       return columnsInSetting.includes(columnName);
//     });
//   }
//   const renderColumns = visibleColumnKeys.map(columnName => {
//     return columnMap[columnName];
//   });
//   console.log('getRenderColumns', renderColumns);
//   return renderColumns;
// };

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
