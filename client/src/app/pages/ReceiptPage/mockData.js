import { getWithExpiry } from 'utils/localStorageHandler';
// ANTD
import { Dropdown, Button, Menu, Badge, Space, Tooltip } from 'antd';
// STYLE
import { StyledBadgeDot } from 'styles/global-styles';
import { DANGER_COLOR } from 'styles/StyleConstants';
// CONST
import { RECEIPT_STATUSES, RECEIPT_STATUS_COLOR } from 'utils/consts';
import DrawerHandle from '../../components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';
import SubjectIcon from '@mui/icons-material/Subject';
// IMAGE
import noteIclon from 'styles/assets/note.svg';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

export const menuItems = selectedRowKeys => [
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
          style={{ fontSize: '16px', verticalAlign: 'middle' }}
        >
          send
        </span>
        <span>{'領収書URLを送る'}</span>
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
          style={{ fontSize: '16px', verticalAlign: 'middle' }}
        >
          check_box
        </span>
        <span>{'発行済みにする'}</span>
      </Space>
    ),
  },
  {
    key: '3',
    label: (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '16px', verticalAlign: 'middle' }}
        >
          keyboard_return
        </span>
        <span>{'未発行に戻す'}</span>
      </Space>
    ),
  },
  {
    key: '4',
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

const dataSource = Array.from(Array(10).keys()).map(i => ({
  key: `${i}`,
  receipt_no: `${'20220730' + i}`,
  supporter: randomOutput(['田中 太郎', '山田 花子']),
  receipt_status: randomOutput(['0', '1', '2']),
  issuing_date: randomOutput(['2023-04-01', '2023-11-05', '2023-03-05']),
  template: randomOutput(['標準領収書']),
  amount: randomOutput(['3,000円', '24,000円']),
  memo: 'テキスト',
}));

const columnMap = {
  // 領収書No.
  receipt_no: {
    fixed: 'left',
    width: 120,
    title: '領収書No.',
    dataIndex: 'receipt_no',
    csvOutput: ({ receipt_no }) => receipt_no,
  },
  // サポーター
  supporter: {
    width: 160,
    title: 'サポーター',
    render: row => (
      <DrawerHandle drawerTitle={row.supporter} drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
    csvOutput: ({ supporter }) => supporter,
  },
  // 発行ステータス
  receipt_status: {
    width: 160,
    title: '発行ステータス',
    dataIndex: 'receipt_status',
    render: receipt_status => (
      <StyledBadgeDot>
        <Badge
          color={RECEIPT_STATUS_COLOR[receipt_status][0]}
          text={RECEIPT_STATUSES[receipt_status]}
        />
      </StyledBadgeDot>
    ),
    csvOutput: ({ receipt_status }) => RECEIPT_STATUSES[receipt_status] || '',
  },
  // 発行日時
  issuing_date: {
    width: 120,
    title: '発行日時',
    render: ({ issuing_date }) => issuing_date,
    csvOutput: ({ issuing_date }) => issuing_date,
  },
  // テンプレート
  template: {
    width: 200,
    title: 'テンプレート',
    dataIndex: 'template',
    csvOutput: ({ template }) => template,
  },
  // 金額
  amount: {
    width: 120,
    title: '金額',
    dataIndex: 'amount',
  },
  // メモ
  memo: {
    width: 80,
    title: 'メモ',
    render: ({ memo }) => (
      <div style={{ textAlign: 'center' }}>
        <Tooltip title={memo}>
          <img src={noteIclon} alt="" />
        </Tooltip>
      </div>
    ),
  },
  // アクション
  action: {
    width: 120,
    title: 'アクション',
    render: row => (
      <Dropdown overlay={<Menu items={menuItems([row.key])} />} placement="bottomRight">
        <Button
          className="more-menu-btn"
          icon={<span className="material-symbols-outlined">more_horiz</span>}
        />
      </Dropdown>
    ),
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'receipt_list_column_setting';

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
