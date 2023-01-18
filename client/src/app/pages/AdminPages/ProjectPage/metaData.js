import { Link } from 'react-router-dom';
// ANTD
import { Badge, Space, Tag, Button, Row } from 'antd';
// STYLE
import { StyledBadgeDot } from './ProjectPage.style';
import { StyledProjectPaymentTypeTag } from 'styles/Tag.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import {
  PRIMARY_ADMIN_COLOR,
  PLACEHOLDER_COLOR,
  EXTRA_LIGHT_GRAY_COLOR,
  GRAY_COLOR,
} from 'styles/StyleConstants';
import {
  ADMIN_PROJECT_STATUSES,
  CONTRACT_PLANS,
  PROJECT_TYPES,
  DONATION_TYPES,
  PROJECT_PAYMENT_TYPES,
} from 'utils/consts';
import Edit from './components/Edit';
import PublicReview from './components/PublicReview';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  project_id: `${i + 123456}`,
  project_name: randomOutput(['NPO法人コングラントをサポーターとして支えてください。']),
  status: randomOutput([1, 2, 3]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  plan: randomOutput([1, 2, 3, 4]),
  discount: randomOutput(['TSJ', '']),
  usage_fee: randomOutput(['76,800円', '48,000円', '96,000円', '0円']),
  payment_method: randomOutput(['カード決済', '銀行振込']),
  // プロジェクトタイプ
  project_type: PROJECT_TYPES[randomOutput([1, 2, 3])],
  // 受付期間
  reception_period: randomOutput([
    <Space size={0} direction="vertical">
      <span>2023-01-09〜</span>
      <span>2023-02-28</span>
    </Space>,
    '-',
  ]),
  // 寄付タイプ
  donation_type: randomOutput([[1, 2, 3], [1, 2], [2, 3], [3]]),
  // 決済システム
  payment_system: randomOutput([1, 2]),
  // オプション
  option: randomOutput(['ぷらす８', '-', 'giving100']),
  // 公開申請日
  public_app_date: randomOutput([
    <Space size={4}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  // 更新日
  updated_at: randomOutput([
    <Space size={4}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
}));

const columnMap = {
  // プロジェクトID
  project_id: {
    fixed: 'left',
    width: 160,
    title: 'プロジェクトID',
    dataIndex: 'project_id',
  },
  // プロジェクト名
  project_name: {
    width: 320,
    title: 'プロジェクト名',
    dataIndex: 'project_name',
  },
  // リンク
  link: {
    width: 120,
    title: 'リンク',
    dataIndex: 'link',
    render: () => <Button>{randomOutput(['公開リンク', 'プレビュー'])}</Button>,
  },
  // 団体名
  organization_name: {
    width: 240,
    title: '団体名',
    render: ({ organization_name, organization_id }) => (
      <Link to={`/admin/organisations/${organization_id}`} className="admin-link">
        {organization_name}
      </Link>
    ),
  },
  // プラン
  plan: {
    width: 120,
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
        <Badge color={ADMIN_PROJECT_STATUSES[status][1]} text={ADMIN_PROJECT_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  // 編集
  edit: {
    width: 80,
    title: '編集',
    dataIndex: 'edit',
    render: () => (
      <Space onClick={e => e.stopPropagation()}>{randomOutput([<Edit />, <PublicReview />])}</Space>
    ),
  },
  // プロジェクトタイプ
  project_type: {
    width: 200,
    title: 'プロジェクトタイプ',
    dataIndex: 'project_type',
  },
  //受付期間
  reception_period: {
    width: 160,
    title: '受付期間',
    dataIndex: 'reception_period',
  },
  // 寄付タイプ
  donation_type: {
    width: 160,
    title: '寄付タイプ',
    dataIndex: 'donation_type',
    render: donation_type => (
      <Space size={0}>
        {donation_type.includes(1) ? (
          <Tag
            style={{
              color: DONATION_TYPES[1][3],
              backgroundColor: DONATION_TYPES[1][1],
              border: `1px solid ${DONATION_TYPES[1][2]}`,
            }}
          >
            {DONATION_TYPES[1][0] || ''}
          </Tag>
        ) : (
          <Tag
            color={EXTRA_LIGHT_GRAY_COLOR}
            style={{ color: PLACEHOLDER_COLOR, borderColor: GRAY_COLOR }}
          >
            {DONATION_TYPES[1][0] || ''}
          </Tag>
        )}

        {donation_type.includes(2) ? (
          <Tag
            style={{
              color: DONATION_TYPES[2][3],
              backgroundColor: DONATION_TYPES[2][1],
              border: `1px solid ${DONATION_TYPES[2][2]}`,
            }}
          >
            {DONATION_TYPES[2][0] || ''}
          </Tag>
        ) : (
          <Tag
            color={EXTRA_LIGHT_GRAY_COLOR}
            style={{ color: PLACEHOLDER_COLOR, borderColor: GRAY_COLOR }}
          >
            {DONATION_TYPES[2][0] || ''}
          </Tag>
        )}

        {donation_type.includes(3) ? (
          <Tag
            style={{
              color: DONATION_TYPES[3][3],
              backgroundColor: DONATION_TYPES[3][1],
              border: `1px solid ${DONATION_TYPES[3][2]}`,
            }}
          >
            {DONATION_TYPES[3][0] || ''}
          </Tag>
        ) : (
          <Tag
            color={EXTRA_LIGHT_GRAY_COLOR}
            style={{ color: PLACEHOLDER_COLOR, borderColor: GRAY_COLOR }}
          >
            {DONATION_TYPES[3][0] || ''}
          </Tag>
        )}
      </Space>
    ),
  },
  // 決済システム
  payment_system: {
    width: 120,
    title: '決済システム',
    dataIndex: 'payment_system',
    render: payment_system => (
      <Row justify="center">
        <StyledProjectPaymentTypeTag projectPaymentType={payment_system}>
          {PROJECT_PAYMENT_TYPES[payment_system]}
        </StyledProjectPaymentTypeTag>
      </Row>
    ),
  },
  // オプション
  option: {
    width: 120,
    title: 'オプション',
    dataIndex: 'option',
  },
  // 公開申請日
  public_app_date: {
    width: 200,
    title: '公開申請日 ',
    dataIndex: 'public_app_date',
  },
  // 更新日
  updated_at: {
    width: 200,
    title: '更新日',
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
