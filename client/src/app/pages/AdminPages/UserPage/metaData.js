// ANTD
import { Space, Badge } from 'antd';
// STYLE
import { StyledBadgeDot } from './ManagementUser.style';
// UTILS
import { randomOutput } from 'utils/helper';
// CONST
import { USER_STATUSES } from 'utils/consts';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  // ユーザーID
  user_id: randomOutput([1000001, 1000003, 1000005, 1000002, 1000004]),
  // ユーザー名
  user_name: randomOutput(['荒木雄大', '荒木 雄大', '押田 悠希', '内藤 千賀']),
  // 団体ID
  organization_id: randomOutput([12345678]),
  // 団体名
  organization_name: randomOutput(['認定NPO法人コングラント']),
  // ステータス
  status: randomOutput([1, 2]),
  // メールアドレス
  email: randomOutput([
    'araki@congrant.com',
    `yoshikawa@congrant.com`,
    'takahashi@congrant.com',
    'oshida@congrant.com',
  ]),
  // 権限
  authority: randomOutput(['管理者', '一般']),
  // 最終ログイン日時
  last_login_at: randomOutput([
    <Space size={4}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
}));

const columnMap = {
  // ユーザーID
  user_id: {
    width: 160,
    title: 'ユーザーID',
    dataIndex: 'user_id',
  },
  // ユーザー名
  user_name: {
    width: 160,
    title: 'ユーザー名',
    dataIndex: 'user_name',
  },
  // 団体ID
  organization_id: {
    width: 160,
    title: '団体ID',
    dataIndex: 'organization_id',
  },
  // 団体名
  organization_name: {
    width: 240,
    title: '団体名',
    dataIndex: 'organization_name',
  },
  //ステータス
  status: {
    width: 120,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={USER_STATUSES[status][1]} text={USER_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  email: {
    width: 240,
    title: 'メールアドレス',
    dataIndex: 'email',
    csvOutput: email => email,
  },
  authority: {
    width: 120,
    title: '権限',
    dataIndex: 'authority',
  },
  // 最終ログイン日時
  last_login_at: {
    width: 200,
    title: '最終ログイン日時',
    dataIndex: 'last_login_at',
  },
};

const getRenderColumns = () => {
  let visibleColumns = Object.keys(columnMap);
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

export { getRenderColumns, dataSource, pagination, columnMap };
