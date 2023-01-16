// ANTD
import { Badge, Space, Tag, Button } from 'antd';
// STYLE
import { StyledBadgeDot } from './ProjectPage.style';
import { StyledProjectPaymentTypeTag } from 'styles/Tag.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
import {
  ADMIN_PROJECT_STATUSES,
  CONTRACT_PLANS,
  PROJECT_TYPES,
  DONATION_TYPE_COLORS,
  DONATION_TYPES,
  PROJECT_PAYMENT_TYPES,
} from 'utils/consts';

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
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              autorenew
            </span>
            <span>{'金額変更'}</span>
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
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              autorenew
            </span>
            <span>{'金額変更'}</span>
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

const dataSource = Array.from(Array(5).keys()).map(i => ({
  key: `${i}`,
  project_id: `${i + 1}`,
  project_name: randomOutput(['NPO法人コングラントをサポーターとして支えてください。']),
  status: randomOutput([1, 2, 3]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  plan: randomOutput([1, 2, 3, 4]),
  project_type: PROJECT_TYPES[randomOutput([1, 2, 3])],
  reception_period: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  donation_type: randomOutput([1, 2, 3]),
  payment_system: randomOutput([1, 2]),
  payment_system: randomOutput([1, 2]),
  option: randomOutput(['ぷらす８', '-', 'giving100']),
  end_date: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  discount: randomOutput(['TSJ', '']),
  usage_fee: randomOutput(['76,800円', '48,000円', '96,000円', '0円']),
  payment_method: randomOutput(['カード決済', '銀行振込']),
  settlement_date: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  public_app_date: randomOutput([
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
  // プロジェクトID
  project_id: {
    fixed: 'left',
    width: 120,
    title: 'プロジェクトID',
    dataIndex: 'project_id',
  },
  // プロジェクト名
  project_name: {
    width: 200,
    title: 'プロジェクト名',
    dataIndex: 'project_name',
  },
  // リンク
  link: {
    width: 200,
    title: 'リンク',
    dataIndex: 'link',
    render: () => <Button type="link">{randomOutput(['公開リンク', 'プレビュー'])}</Button>,
  },
  // 団体名
  organization_name: {
    width: 200,
    title: '団体名',
    dataIndex: 'organization_name',
  },
  // プラン
  plan: {
    width: 160,
    title: 'プラン',
    render: ({ plan }) => {
      console.log(CONTRACT_PLANS[plan], 'debug contract plan');
      return <>{CONTRACT_PLANS[plan][0] || ''}</>;
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
    width: 200,
    title: 'リンク',
    dataIndex: 'link',
    render: () =>
      randomOutput([<Button>{'編集'}</Button>, <Button type="primary">{'審査'}</Button>]),
  },
  // プロジェクトタイプ
  project_type: {
    width: 200,
    title: 'プロジェクトタイプ',
    dataIndex: 'project_type',
  },
  //受付期間
  reception_period: {
    width: 200,
    title: '受付期間',
    dataIndex: 'reception_period',
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
  },
  // 決済システム
  payment_system: {
    width: 100,
    title: '決済システム',
    dataIndex: 'payment_system',
    render: payment_system => (
      <StyledProjectPaymentTypeTag projectPaymentType={payment_system}>
        {PROJECT_PAYMENT_TYPES[payment_system]}
      </StyledProjectPaymentTypeTag>
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
    width: 120,
    title: '公開申請日 ',
    dataIndex: 'public_app_date',
  },
  // 更新日
  updated_at: {
    width: 120,
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
  limit: 5,
  total_items: 5,
  total_page: 1,
};

export { getRenderColumns, dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap };
