import { Link } from 'react-router-dom';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  total: randomOutput(['1,234件', '3,00件', '2750件']),
  amount: randomOutput(['2,000,000円', '3,500,000円', '8,950,000円']),
}));

const columnMap = {
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
    dataIndex: 'organization_name',
    render: organization_name => (
      <Link to={'/admin/home'} className="admin-link">
        {organization_name}
      </Link>
    ),
  },
  // Stripe（件数）
  stripe_total: {
    width: 120,
    title: 'Stripe（件数）',
    dataIndex: 'total',
  },
  // Stripe（金額）
  stripe_amount: {
    width: 120,
    title: 'Stripe（金額）',
    dataIndex: 'amount',
  },
  // テレコム（件数）
  telecom_total: {
    width: 120,
    title: 'テレコム（件数）',
    dataIndex: 'total',
  },
  // テレコム（金額）
  telecom_amount: {
    width: 120,
    title: 'テレコム（金額）',
    dataIndex: 'amount',
  },
  // 合計（件数）
  all_total: {
    width: 120,
    title: '合計（件数）',
    dataIndex: 'total',
  },
  // 合計（金額）
  all_amount: {
    width: 120,
    title: '合計（金額）',
    dataIndex: 'amount',
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'payment_list_column_setting';

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
