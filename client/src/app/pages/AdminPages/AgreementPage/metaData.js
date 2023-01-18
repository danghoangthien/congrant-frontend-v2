import { Link } from 'react-router-dom';
// ANTD
import { Badge, Space } from 'antd';
// STYLE
import { StyledBadgeDot } from './AgreementPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { CONTRACT_PLAN_STATUSES, CONTRACT_PLANS } from 'utils/consts';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  contract_id: `${i + 12345678}`,
  organization_id: `${i + 12345678}`,
  organization_name: randomOutput(['認定NPO法人コングラント']),
  plan: randomOutput([1, 2, 3, 4]),
  status: randomOutput([1, 2, 3]),
  start_date: randomOutput([<span>2023-01-09</span>]),
  end_date: randomOutput([<span>2023-01-09</span>]),
  discount: randomOutput(['TSJ', '']),
  usage_fee: randomOutput(['76,800円', '48,000円', '96,000円', '0円']),
  payment_method: randomOutput(['カード決済', '銀行振込']),
  settlement_date: randomOutput([<span>2023-01-09</span>]),
  payment_id_stripe: randomOutput(['pi_3MPHLhIpWNr6g9AQ2TKPl2lE']),
  created_at: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  updated_at: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
}));

const columnMap = {
  // 契約ID
  contract_id: {
    fixed: 'left',
    width: 120,
    title: '契約ID',
    dataIndex: 'contract_id',
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
    render: ({ organization_name }) => {
      return (
        <Link className="admin-link" to={'/admin/home'}>
          {organization_name}
        </Link>
      );
    },
  },
  // プラン
  plan: {
    width: 200,
    title: 'プラン',
    render: ({ plan }) => {
      console.log(CONTRACT_PLANS[plan], 'debug contract plan');
      return (
        <Link className="admin-link" to={'/admin/home'}>
          {CONTRACT_PLANS[plan][0] || ''}
        </Link>
      );
    },
    csvOutput: row => <>{'プラン'}</>,
    defaultVisible: false,
  },
  //ステータス
  status: {
    width: 120,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={CONTRACT_PLAN_STATUSES[status][1]} text={CONTRACT_PLAN_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  // 契約開始日
  start_date: {
    width: 120,
    title: '契約開始日',
    dataIndex: 'start_date',
  },
  // 契約終了日
  end_date: {
    width: 120,
    title: '契約終了日',
    dataIndex: 'end_date',
  },
  // 割引
  discount: {
    width: 80,
    title: '割引',
    dataIndex: 'discount',
  },
  // 利用料金
  usage_fee: {
    width: 120,
    title: '利用料金',
    dataIndex: 'usage_fee',
  },
  // 決済方法
  payment_method: {
    width: 120,
    title: '決済方法',
    dataIndex: 'payment_method',
  },
  // 決済日
  settlement_date: {
    width: 120,
    title: '決済日',
    dataIndex: 'settlement_date',
  },
  // 支払いID（Stripe）
  payment_id_stripe: {
    width: 280,
    title: '支払いID（Stripe）',
    dataIndex: 'payment_id_stripe',
  },
  // 作成日時
  created_at: {
    width: 200,
    title: '作成日時',
    dataIndex: 'created_at',
  },
  // 更新日時
  updated_at: {
    width: 200,
    title: '更新日時',
    dataIndex: 'updated_at',
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
