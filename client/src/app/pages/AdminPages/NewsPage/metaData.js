import { Link } from 'react-router-dom';
// ANTD
import { Badge, Space, Tag } from 'antd';
// STYLE
import { StyledBadgeDot } from './NewsPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { NEWS_STATUSES } from 'utils/consts';

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  status: randomOutput([1, 2]),
  published_at: randomOutput([
    <Space direction={'vertical'} size={0}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  publish_range: randomOutput(['全体', '登録団体']),
  title: randomOutput([
    <Link to={'/admin/news/1'} className="admin-link">
      お知らせのタイトルが入ります。お知らせのタイトルが入ります。お知らせのタイトルが入ります。
    </Link>,
  ]),
  tag: randomOutput([
    <>
      <Tag>{'アップデート'}</Tag>
      <Tag>{'お知らせ'}</Tag>
    </>,
    <Tag>{'お知らせ'}</Tag>,
    <Tag>{'重要'}</Tag>,
  ]),
  creation_date: randomOutput([
    <Space size={0} direction={'vertical'}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  last_modified_at: randomOutput([
    <Space size={0} direction={'vertical'}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  last_updated: randomOutput(['荒木雄大']),
}));

const columnMap = {
  // お知らせステータス
  status: {
    fixed: 'left',
    width: 120,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={NEWS_STATUSES[status][1]} text={NEWS_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  // 公開日時
  published_at: {
    width: 120,
    title: '公開日時',
    dataIndex: 'published_at',
  },
  // 公開範囲
  publish_range: {
    width: 120,
    title: '公開範囲',
    dataIndex: 'publish_range',
  },
  // タイトル
  title: {
    width: 400,
    title: 'タイトル',
    dataIndex: 'title',
  },
  // タグ
  tag: {
    width: 200,
    title: 'タグ',
    dataIndex: 'tag',
  },
  // 作成日時
  creation_date: {
    width: 120,
    title: '作成日時',
    dataIndex: 'creation_date',
  },
  // 最終更新日時
  last_modified_at: {
    width: 120,
    title: '最終更新日時',
    dataIndex: 'last_modified_at',
  },
  // 最終更新
  last_updated: {
    width: 120,
    title: '最終更新',
    dataIndex: 'last_updated',
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
