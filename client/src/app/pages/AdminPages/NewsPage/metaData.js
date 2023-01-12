// ANTD
import { Badge, Space, Tag } from 'antd';
// STYLE
import { StyledBadgeDot, StyledPaymentTypeTag } from './NewsPage.style';
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
  published_at: randomOutput([
    <Space direction={'vertical'}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  publish_range: randomOutput(['全体', '登録団体']),
  title: randomOutput([
    'お知らせのタイトルが入ります。お知らせのタイトルが入ります。お知らせのタイトルが入ります。',
  ]),
  tag: randomOutput([<Tag>{'アップデート'}</Tag>, <Tag>{'お知らせ'}</Tag>, <Tag>{'重要'}</Tag>]),
  creation_date: randomOutput([
    <Space direction={'vertical'}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  last_modified_at: randomOutput([
    <Space direction={'vertical'}>
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
    width: 200,
    title: '公開日時',
    dataIndex: 'published_at',
  },
  // 公開範囲
  publish_range: {
    width: 80,
    title: '公開範囲',
    dataIndex: 'publish_range',
  },
  // タイトル
  title: {
    width: 300,
    title: 'タイトル',
    dataIndex: 'title',
  },
  // タグ
  tag: {
    width: 120,
    title: 'タグ',
    dataIndex: 'tag',
  },
  // 作成日時
  creation_date: {
    width: 200,
    title: '作成日時',
    dataIndex: 'creation_date',
  },
  // 最終更新日時
  last_modified_at: {
    width: 200,
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
