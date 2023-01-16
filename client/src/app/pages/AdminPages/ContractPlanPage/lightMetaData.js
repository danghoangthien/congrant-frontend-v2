// ANTD
import { Badge, Space } from 'antd';
// STYLE
import { StyledBadgeDot } from './ContractPlanPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
import { CONTRACT_PLAN_STATUSES, CONTRACT_PLANS } from 'utils/consts';

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
  contract_id: `${i + 1}`,
  status: randomOutput([1, 2, 3]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  plan: randomOutput([1, 2, 3, 4]),
  start_date: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
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
  last_updated: randomOutput(['荒木雄大']),
}));

const columnMap = {
  // 契約ID
  contract_id: {
    fixed: 'left',
    width: 50,
    title: '契約ID',
    dataIndex: 'contract_id',
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
        <Badge color={CONTRACT_PLAN_STATUSES[status][1]} text={CONTRACT_PLAN_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  // 契約開始日
  start_date: {
    width: 200,
    title: '契約開始日',
    dataIndex: 'start_date',
  },
  // 契約終了日
  end_date: {
    width: 80,
    title: '契約終了日',
    dataIndex: 'end_date',
  },
  // 割引
  discount: {
    width: 100,
    title: '割引',
    dataIndex: 'discount',
  },
  // 決済日
  settlement_date: {
    width: 120,
    title: '決済日',
    dataIndex: 'settlement_date',
  },
  // 作成日時
  created_at: {
    width: 120,
    title: '作成日時',
    dataIndex: 'created_at',
  },
  // 更新日時
  updated_at: {
    width: 120,
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
  limit: 5,
  total_items: 5,
  total_page: 1,
};

export { getRenderColumns, dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap };
