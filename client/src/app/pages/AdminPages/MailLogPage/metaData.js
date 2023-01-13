// ANTD
import { Badge, Space } from 'antd';
// STYLE
import { StyledBadgeDot } from './MailLogPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
import { MAIL_STATUSES } from 'utils/consts';

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
  status: randomOutput([1, 2]),
  send_at: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  user_type: randomOutput(['個人サポーター', 'ユーザー管理者']),
  mail_type: randomOutput([
    '活動報告更新通知',
    'サポーター宛メッセージ',
    '継続決済失敗',
    '決済完了',
    'パスワード再発行',
    '新規登録＞お試し登録',
  ]),
  destination_user: randomOutput(['12345678']),
  sender: randomOutput(['荒木雄大', '-']),
}));

const columnMap = {
  // 操作日時
  send_at: {
    width: 100,
    title: '送信日時',
    dataIndex: 'send_at',
  },
  status: {
    fixed: 'left',
    width: 120,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={MAIL_STATUSES[status][1]} text={MAIL_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  // メール種別
  mail_type: {
    width: 80,
    title: 'メール種別',
    dataIndex: 'mail_type',
  },
  // 団体名
  destination_user: {
    width: 200,
    title: '送信先ユーザー',
    dataIndex: 'destination_user',
  },
  // ユーザー種別
  user_type: {
    width: 80,
    title: 'ユーザー種別',
    dataIndex: 'user_type',
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
  // 送信者
  sender: {
    width: 80,
    title: '送信者',
    dataIndex: 'sender',
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
