import { Dropdown, Tag, Button, Menu, Tooltip, Space } from 'antd';
import { CopyOutlined, EllipsisOutlined } from '@ant-design/icons';
import DrawerHandle from '../../components/DrawerHandle';
import { getWithExpiry } from 'utils/localStorageHandler';
import Detail from './components/Detail';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';

// RECORD ACTION MENU
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Space>
            <span
              class="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', display: 'flex' }}
            >
              send
            </span>
            <span>{'メッセージを送る'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space>
            <span
              class="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', display: 'flex' }}
            >
              sell
            </span>
            <span>{'属性を設定する'}</span>
          </Space>
        ),
      },
      {
        key: '3',
        label: (
          <Space>
            <span
              class="material-symbols-outlined fill-icon"
              style={{ color: DANGER_COLOR, fontSize: '16px', display: 'flex' }}
            >
              delete
            </span>
            <span style={{ color: DANGER_COLOR }}>{'削除'}</span>
          </Space>
        ),
      },
    ]}
  />
);

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  personal_id: `${'20220730' + i}`,
  full_name: '荒木 雄大',
  attributes: ['理事', 'ボランティア'],
  email: `danghoangthien+${i}@gmail.com`,
  recent_donation: '3,000円',
  cumulative_donation: '12,000円',
}));

const columnMap = {
  // 個人No.
  personal_id: {
    width: 120,
    title: '個人No.',
    render: row => (
      <DrawerHandle drawerTitle={row.full_name} drawerComponent={<Detail data={row} />}>
        {row.personal_id}
      </DrawerHandle>
    ),
    csvOutput: ({ personal_id }) => personal_id,
  },
  // 氏名
  full_name: {
    title: '氏名',
    dataIndex: 'full_name',
    csvOutput: full_name => full_name,
  },
  // 属性
  attributes: {
    title: '属性',
    render: ({ attributes }) => attributes.map(attribute => <Tag>{attribute}</Tag>),
    csvOutput: ({ attributes }) => attributes.map(attribute => attribute),
  },
  // メールアドレス
  email: {
    title: 'メールアドレス',
    dataIndex: 'email',
    render: email => (
      <Tooltip
        title={
          <>
            <Space>
              <CopyOutlined className="display-inline-flex" onClick={() => {}} />
              {'コピー'}
            </Space>
          </>
        }
      >
        <span>{email}</span>
      </Tooltip>
    ),
    csvOutput: ({ email }) => email,
  },
  // 直近の寄付
  recent_donation: {
    title: '直近の寄付',
    dataIndex: 'recent_donation',
    render: recent_donation => (
      <Space direction="vertical">
        <span>{'2022-07-05'}</span>
        <span>{recent_donation}</span>
      </Space>
    ),
    csvOutput: recent_donation => recent_donation,
  },
  // 累計寄付
  cumulative_donation: {
    title: '累計寄付',
    dataIndex: 'cumulative_donation',
    render: cumulative_donation => (
      <Space direction="vertical">
        <span>{cumulative_donation}</span>
        <span>{'8回'}</span>
      </Space>
    ),
    csvOutput: cumulative_donation => cumulative_donation,
  },
  action: {
    width: 120,
    title: 'アクション',
    render: row => (
      <Dropdown overlay={menu} placement="bottomRight">
        <Button
          className="more-menu-btn"
          icon={<span className="material-symbols-outlined">more_horiz</span>}
        />
      </Dropdown>
    ),
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'supporter_list_column_setting';

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
