import { Link } from 'react-router-dom';
// ANTD
import { Badge, Space } from 'antd';
// STYLE
import { StyledBadgeDot } from './MailLogPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
import { MAIL_STATUSES } from 'utils/consts';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  // 送信日時
  send_at: randomOutput([
    <Space size={4}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  // ステータス
  status: randomOutput([1, 2]),
  // メール種別
  mail_type: randomOutput([
    '活動報告更新通知',
    'サポーター宛メッセージ',
    '継続決済失敗',
    '決済完了',
    'パスワード再発行',
    '新規登録＞お試し登録',
  ]),
  // 送信先ユーザー
  destination_user: randomOutput(['12345678']),
  // ユーザー種別
  user_type: randomOutput(['個人サポーター', 'ユーザー管理者']),
  // 団体ID
  organization_id: randomOutput([12345678]),
  // 団体名
  organization_name: randomOutput(['認定NPO法人コングラント']),
  // 送信者
  sender: randomOutput(['荒木雄大', '-']),
}));

const columnMap = {
  // 操作日時
  send_at: {
    width: 200,
    title: '送信日時',
    dataIndex: 'send_at',
  },
  // ステータス
  status: {
    width: 200,
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
    width: 200,
    title: 'メール種別',
    dataIndex: 'mail_type',
  },
  // 団体名
  destination_user: {
    width: 160,
    title: '送信先ユーザー',
    dataIndex: 'destination_user',
  },
  // ユーザー種別
  user_type: {
    width: 160,
    title: 'ユーザー種別',
    dataIndex: 'user_type',
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
    dataIndex: 'organization_name',
    render: organization_name => (
      <Link to={'/admin/home'} className="admin-link">
        {organization_name}
      </Link>
    ),
  },
  // 送信者
  sender: {
    width: 120,
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
