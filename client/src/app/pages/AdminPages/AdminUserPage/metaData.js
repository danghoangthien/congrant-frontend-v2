// ANTD
import { Space, Badge } from 'antd';
// STYLE
import { StyledBadgeDot } from './ManagementUser.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { USER_STATUSES } from 'utils/consts';

import Edit from './components/Edit';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  status: randomOutput([1, 2]),
  last_login_at: randomOutput([
    <Space size={4}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  email: randomOutput([
    'araki@congrant.com',
    `yoshikawa@congrant.com`,
    'takahashi@congrant.com',
    'oshida@congrant.com',
  ]),
  authority: randomOutput(['システム管理者', 'サポート担当者']),
  user_name: randomOutput(['荒木雄大', '荒木 雄大', '押田 悠希', '内藤 千賀']),
}));

const columnMap = {
  // ユーザー名
  user_name: {
    width: 200,
    title: 'ユーザー名',
    dataIndex: 'user_name',
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
  // メールアドレス
  email: {
    width: 350,
    title: 'メールアドレス',
    dataIndex: 'email',
    csvOutput: email => email,
  },
  // 権限
  authority: {
    width: 200,
    title: '権限',
    dataIndex: 'authority',
  },
  // 最終ログイン日時
  last_login_at: {
    width: 200,
    title: '最終ログイン日時',
    dataIndex: 'last_login_at',
  },
  // 編集
  action: {
    width: 120,
    title: 'アクション',
    render: row => (
      <Space>
        <Edit btn_text="編集" />
      </Space>
    ),
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'admin_management_user_list_column_setting';

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
