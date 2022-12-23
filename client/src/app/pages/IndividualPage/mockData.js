import { Dropdown, Tag, Button, Menu, Tooltip, Space, Row } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { getWithExpiry } from 'utils/localStorageHandler';
// COMPONENT
import Detail from './components/Detail';
import DrawerHandle from '../../components/DrawerHandle';
// UTILS
import { randomOutput } from 'utils/helper';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';
// IMAGE
import noteIclon from 'styles/assets/note.svg';

// RECORD ACTION MENU
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
  personal_id: `${'10000' + i}`,
  full_name: randomOutput(['荒木 雄大', '田中 太郎', '山田 花子']),
  full_name_furigana: randomOutput(['たなか たろう', 'やまだ はなこ']),
  materials: randomOutput(['許可', '']),
  gender: randomOutput(['男性', '女性']),
  attributes: ['理事', 'ボランティア'],
  email: `danghoangthien+${i}@gmail.com`,
  phone: randomOutput(['08012345678', '08012345678']),
  address: randomOutput(['熊本県熊本市…', '大阪府大阪市…']),
  custom_field: randomOutput(['テキスト', '']),
  custom_field_multiple_lines: 'カスタム項目（複数行の場合）',
  recent_donation: 3000,
  cumulative_donation: 12000,
}));

const columnMap = {
  // 個人No.
  personal_id: {
    fixed: 'left',
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
    width: 160,
    title: '氏名',
    dataIndex: 'full_name',
    csvOutput: full_name => full_name,
  },
  // ふりがな
  full_name_furigana: {
    width: 160,
    title: 'ふりがな',
    dataIndex: 'full_name_furigana',
    csvOutput: full_name_furigana => full_name_furigana,
  },
  // 広報物への掲載
  materials: {
    width: 160,
    title: '広報物への掲載',
    dataIndex: 'materials',
    csvOutput: materials => materials,
  },
  // 性別
  gender: {
    width: 80,
    title: '性別',
    dataIndex: 'gender',
    csvOutput: gender => gender,
  },
  // 生年月日
  birthday: {
    width: 120,
    title: '生年月日',
    render: () => (
      <>
        <span>{'1991-01-01'}</span>
        <br />
        <span>{'（31歳）'}</span>
      </>
    ),
    csvOutput: () => randomOutput(['1991-01-01 （31歳）', '']),
  },
  // メールアドレス
  email: {
    width: 200,
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
  // 電話番号
  phone: {
    width: 160,
    title: '電話番号',
    dataIndex: 'phone',
    csvOutput: phone => phone,
  },
  // 住所
  address: {
    width: 160,
    title: '住所',
    dataIndex: 'address',
    csvOutput: address => address,
  },
  // 属性
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
  // アクション
  action: {
    width: 120,
    title: 'アクション',
    render: () => (
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
