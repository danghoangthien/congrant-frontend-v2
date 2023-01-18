import { Link } from 'react-router-dom';
// ANTD
import { Tooltip, Badge, Button } from 'antd';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { RECEIPT_STATUSES, RECEIPT_STATUS_COLOR } from 'utils/consts';
// IMAGE
import noteIclon from 'styles/assets/note.svg';
// STYLE
import { StyledBadgeDot } from 'styles/global-styles';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  receipt_no: `${'20220730' + i}`,
  supporter_number: randomOutput([12345678]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  receipt_status: randomOutput(['0', '1', '2']),
  issuing_date: randomOutput(['2023-04-01', '2023-11-05', '2023-03-05']),
  template: randomOutput(['標準領収書']),
  amount: randomOutput(['3,000円', '24,000円']),
  memo: 'テキスト',
}));

const columnMap = {
  // 領収書No.
  receipt_no: {
    width: 120,
    title: '領収書No.',
    dataIndex: 'receipt_no',
  },
  // サポーターNo.
  supporter_number: {
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
    render: row => <Button>プレビュー</Button>,
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
