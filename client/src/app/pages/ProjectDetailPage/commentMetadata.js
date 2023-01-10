// ANTD
import { Select, Space, Tooltip, Typography } from 'antd';
// UTILS
import { getWithExpiry } from 'utils/localStorageHandler';
import { randomOutput } from 'utils/helper';
// STYLE
// COMPONENT
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';
import NewBulkReceipt from 'app/pages/ReceiptPage/components/NewBulkReceipt';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
import Reply from './components/Reply';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  donation_id: `${i + 1}`,
  donation_number: `${i + 1234567}`,
  supporter: '荒木 雄大',
  date_of_receipt: '2022-07-30',
  project:
    'テキストが長い場合3行以上にせず文章を区切ってTooltipで表示テキストが長い場合3行以上にせず文章を区切ってTooltipで表示テキストが長い場合3行以上にせず文章を区切ってTooltipで表示',
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
  pub_date: {
    width: 150,
    title: '公開日時',
    dataIndex: 'pub_date',
    render: pub_date => pub_date,
  },
  name: {
    width: 150,
    title: 'お名前',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.name}</span>
      </DrawerHandle>
    ),
  },
  status: {
    width: 150,
    title: '公開/非公開',
    dataIndex: 'status',
    render: status => {
      if ([1, 2].includes(status)) {
        return (
          <Select defaultValue={status}>
            <Select.Option value={1}>{'公開'}</Select.Option>
            <Select.Option value={2}>{'非公開'}</Select.Option>
          </Select>
        );
      } else return <span>{'非公開希望'}</span>;
    },
  },
  comment: {
    title: 'コメント',
    dataIndex: 'comment',
    render: comment => '応援しています！',
  },
  reply: {
    title: '返信',
    dataIndex: 'reply',
    render: reply => 'ありがとうございます！',
  },
  action: {
    width: 150,
    title: 'アクション',
    align: 'center',
    dataIndex: 'action',
    render: action => (
      <Space>
        <Reply />
      </Space>
    ),
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
        <NewBulkReceipt />
      </Space>
    ),
  },
  {
    key: '2',
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
