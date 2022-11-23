import { getWithExpiry } from 'utils/localStorageHandler';
// ANTD
import { Menu, Dropdown, Tag, Button, Space } from 'antd';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';

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
  supporterType: '2',
  group_id: `${'10000' + i}`,
  group_name: 'コングラント株式会社',
  manager: 'CSR部 課長  鈴木 一郎',
  attributes: ['属性', '属性2'],
  email: `danghoangthien+${i}@gmail.com`,
  recent_donation_date: '2022-07-15',
  recent_donation: '3,000円',
  cumulative_donation: '12,000円',
  cumulative_donation_times: '4回',
}));

const columnMap = {
  group_id: {
    title: '法人No.',
    render: row => row.group_id,
    csvOutput: ({ group_id }) => group_id,
  },
  group_name: {
    title: '法人名',
    dataIndex: 'group_name',
    csvOutput: ({ group_name }) => group_name,
  },
  manager: {
    title: '担当者',
    dataIndex: 'manager',
    csvOutput: ({ manager }) => manager,
  },
  attributes: {
    title: '属性',
    render: ({ attributes }) => attributes.map(attribute => <Tag>{attribute}</Tag>),
    csvOutput: ({ attributes }) => attributes.map(attribute => attribute),
  },
  email: {
    title: 'メールアドレス',
    dataIndex: 'email',
    csvOutput: email => email,
  },
  recent_donation: {
    title: '直近の寄付',
    render: ({ recent_donation, recent_donation_date }) => (
      <>
        {recent_donation_date}
        <br />
        {recent_donation}
      </>
    ),
    csvOutput: recent_donation => recent_donation,
  },
  cumulative_donation: {
    title: '累計寄付',
    render: ({ cumulative_donation, cumulative_donation_times }) => (
      <>
        {cumulative_donation}
        <br />
        {cumulative_donation_times}
      </>
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
