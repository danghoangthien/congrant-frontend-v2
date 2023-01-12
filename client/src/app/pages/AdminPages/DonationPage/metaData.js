// ANTD
import { Badge, Space, Tag } from 'antd';
// STYLE
import { StyledBadgeDot, StyledPaymentTypeTag } from './DonationPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
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

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  donation_id: `${i + 1}`,
  donation_number: `${i + 1234567}`,
  supporter_number: randomOutput([12345678]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
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
  created_at: randomOutput(['2023-04-01 12:34:56']),
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
  // サポーターNo.
  supporter_number: {
    fixed: 'left',
    width: 120,
    title: 'サポーターNo.',
    dataIndex: 'supporter_number',
    csvOutput: ({ supporter_number }) => supporter_number,
    defaultVisible: false,
  },
  // 団体ID
  organization_id: {
    width: 80,
    title: '団体ID',
    dataIndex: 'organization_id',
  },
  // 団体名
  organization_name: {
    width: 200,
    title: '団体名',
    dataIndex: 'organization_name',
  },
  // 作成日時
  created_at: {
    width: 200,
    title: '作成日時',
    dataIndex: 'created_at',
  },
  // 受領日
  date_of_receipt: {
    width: 200,
    title: '受領日',
    dataIndex: 'date_of_receipt',
  },
  // 入金日
  date_of_receipt: {
    width: 150,
    title: '入金日',
    dataIndex: 'date_of_receipt',
  },
  // プロジェクト
  project: {
    width: 240,
    title: 'プロジェクト',
    dataIndex: 'project',
    csvOutput: ({ project }) => project,
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
    width: 120,
    title: 'プラン',
    dataIndex: 'plan',
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
  amount: {
    width: 150,
    title: '金額',
    dataIndex: 'amount',
  },
  receipt_method: {
    width: 120,
    title: '受領方法',
    dataIndex: 'receipt_method',
  },
  // 登録経路
  register_route: {
    width: 160,
    title: '登録経路',
    dataIndex: 'register_route',
    render: register_route => <>{REGISTER_ROUTES[register_route] || ''}</>,
    csvOutput: ({ register_route }) => register_route,
    defaultVisible: false,
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'admin_donation_list_column_setting';

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
