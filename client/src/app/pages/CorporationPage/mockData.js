import { getWithExpiry } from 'utils/localStorageHandler';
// ANTD
import { Menu, Dropdown, Tag, Button, Space, Tooltip } from 'antd';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
// UTILS
import { randomOutput } from 'utils/helper';
// IMAGE
import noteIclon from 'styles/assets/note.svg';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Space>
            <span
              className="material-symbols-outlined fill-icon"
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
              className="material-symbols-outlined fill-icon"
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
              className="material-symbols-outlined fill-icon"
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
  group_id: `${'10000' + i}`,
  group_name: 'コングラント株式会社',
  group_name_furagana: 'りたわーくすかぶしきがいしゃ',
  materials: randomOutput(['許可', '']),
  department_in_charge: randomOutput(['営業部 部長', 'CSR部']),
  manager: 'CSR部 課長  鈴木 一郎',
  manager_furagana: randomOutput(['たなか たろう', 'やまだ はなこ']),
  attributes: ['属性', '属性2'],
  email: `danghoangthien+${i}@gmail.com`,
  phone: randomOutput(['08012345678', '08012345678']),
  address: randomOutput(['熊本県熊本市…', '大阪府大阪市…']),
  custom_field: randomOutput(['テキスト', '']),
  custom_field_multiple_lines: 'カスタム項目（複数行の場合）',
  recent_donation: 3000,
  cumulative_donation: 12000,
  supporterType: '2',
}));

const columnMap = {
  // 法人No.
  group_id: {
    fixed: 'left',
    width: 120,
    title: '法人No.',
    render: row => row.group_id,
    csvOutput: ({ group_id }) => group_id,
  },
  // 法人名
  group_name: {
    width: 160,
    title: '法人名',
    dataIndex: 'group_name',
    csvOutput: ({ group_name }) => group_name,
  },
  // 法人名（ふりがな）
  group_name_furagana: {
    width: 160,
    title: '法人名（ふりがな）',
    dataIndex: 'group_name_furagana',
    csvOutput: ({ group_name_furagana }) => group_name_furagana,
  },
  // 広報物への掲載
  materials: {
    width: 160,
    title: '広報物への掲載',
    dataIndex: 'materials',
    csvOutput: ({ materials }) => materials,
  },
  // 担当者部署・肩書き
  department_in_charge: {
    width: 160,
    title: '担当者部署・肩書き',
    dataIndex: 'department_in_charge',
    csvOutput: ({ department_in_charge }) => department_in_charge,
  },
  manager: {
    width: 160,
    title: '担当者',
    dataIndex: 'manager',
    csvOutput: ({ manager }) => manager,
  },
  manager_furagana: {
    width: 160,
    title: '担当者',
    dataIndex: 'manager_furagana',
    csvOutput: ({ manager_furagana }) => manager_furagana,
  },
  email: {
    width: 200,
    title: 'メールアドレス',
    dataIndex: 'email',
    csvOutput: email => email,
  },
  // 電話番号
  phone: {
    width: 160,
    title: '電話番号',
    dataIndex: 'phone',
    csvOutput: ({ phone }) => phone,
  },
  // 住所
  address: {
    width: 160,
    title: '住所',
    dataIndex: 'address',
    csvOutput: ({ address }) => address,
  },
  attributes: {
    width: 240,
    title: '属性',
    render: ({ attributes }) => attributes.map(attribute => <Tag>{attribute}</Tag>),
    csvOutput: ({ attributes }) => attributes.map(attribute => attribute),
  },
  // カスタム項目
  custom_field: {
    width: 160,
    title: 'カスタム項目',
    dataIndex: 'custom_field',
    csvOutput: custom_field => custom_field,
  },
  // カスタム項目（複数行の場合）
  custom_field_multiple_lines: {
    width: 160,
    title: 'カスタム項目',
    render: ({ custom_field_multiple_lines }) => {
      return (
        <div style={{ textAlign: 'center' }}>
          <Tooltip title={custom_field_multiple_lines}>
            <img src={noteIclon} alt="" />
          </Tooltip>
        </div>
      );
    },
    csvOutput: custom_field_multiple_lines => custom_field_multiple_lines,
  },
  // 直近の寄付
  recent_donation: {
    width: 120,
    title: '直近の寄付',
    dataIndex: 'recent_donation',
    render: recent_donation => (
      <>
        <span>{'2022-07-05'}</span>
        <br />
        <span>{recent_donation.toLocaleString()}円</span>
      </>
    ),
    csvOutput: recent_donation => `${recent_donation.toLocaleString()}円`,
  },
  // 累計寄付
  cumulative_donation: {
    width: 120,
    title: '累計寄付金額',
    dataIndex: 'cumulative_donation',
    render: cumulative_donation => <span>{cumulative_donation.toLocaleString()}円</span>,
    csvOutput: cumulative_donation => <span>{cumulative_donation.toLocaleString()}円</span>,
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
