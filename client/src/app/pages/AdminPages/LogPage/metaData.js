// ANTD
import { Badge, Space, Tag } from 'antd';
// STYLE
import { StyledBadgeDot, StyledPaymentTypeTag } from './LogPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
import { NEWS_STATUSES } from 'utils/consts';

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

// const dataSource = [
//   {
//     key: '1',
//     organization_id: '12345678',
//     organization_name: '認定NPO法人コングラント',
//     test: 'テスト',
//     discount: 'TSJ',
//     plan: 'スタンダード（TSJ）',
//     plan_end_date: '2022-12-31',
//     next_plan: 'スタンダード',
//     cg_verification: 1,
//     st_verification: 1,
//     verification_status: 1,
//     using_payment: {
//       stripe: 1,
//       telecom: 2,
//     },
//     cg_payment_money: '1,123,000,000',
//     cg_payment_number: '10,000',
//     public_porjects: 3,
//     no_public_porjects: 10,
//     register_date: '2022-12-17 12:12:12',
//     verify_end_date: '2022-12-17 12:12:12',
//   },
// ];

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  status: randomOutput([1, 2]),
  operation_at: randomOutput([
    <Space direction={'vertical'}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  user_id: randomOutput([1000001]),
  user_name: randomOutput(['荒木雄大']),
  operation_type: randomOutput(['基本設定', '個人設定', 'ログイン']),
  operation_detail: randomOutput([
    '基本設定＞公開情報：保存',
    'パスワードの変更',
    '2段階認証用QRコードの発行',
    'ログイン済み',
  ]),
}));

const columnMap = {
  // 操作日時
  operation_at: {
    width: 100,
    title: '操作日時',
    dataIndex: 'operation_at',
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
  // ユーザーID
  user_id: {
    width: 80,
    title: 'ユーザーID',
    dataIndex: 'user_id',
  },
  // ユーザー名
  user_name: {
    width: 120,
    title: 'ユーザー名',
    dataIndex: 'user_name',
  },
  // 操作種別
  operation_type: {
    width: 80,
    title: '操作種別',
    dataIndex: 'operation_type',
  },
  // 操作内容
  operation_detail: {
    width: 200,
    title: '操作内容',
    dataIndex: 'operation_detail',
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'admin_log_list_column_setting';

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