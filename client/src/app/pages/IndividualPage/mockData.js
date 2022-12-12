import { Dropdown, Tag, Button, Menu, Tooltip, Space } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import DrawerHandle from '../../components/DrawerHandle';
import { getWithExpiry } from 'utils/localStorageHandler';
import Detail from './components/Detail';
import { randomOutput } from 'utils/helper';
import SubjectIcon from '@mui/icons-material/Subject';
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
  personal_id: `${'20220730' + i}`,
  full_name: randomOutput(['荒木 雄大', '田中 太郎', '山田 花子']),
  full_name_furagana: randomOutput(['たなか たろう', 'やまだ はなこ']),
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
  // ふりがな
  full_name_furagana: {
    title: '氏名',
    dataIndex: 'full_name_furagana',
    csvOutput: full_name => full_name,
  },
  // 広報物への掲載
  materials: {
    title: '広報物への掲載',
    render: () => randomOutput(['許可', '']),
    csvOutput: () => randomOutput(['許可', '']),
  },
  // 性別
  gender: {
    title: '性別',
    render: () => randomOutput(['男性', '女性']),
    csvOutput: () => randomOutput(['男性', '女性']),
  },
  // 生年月日
  birthday: {
    title: '生年月日',
    render: () => (
      <Space direction="vertical">
        <span>{'1991-01-01'}</span>
        <span>{'（31歳）'}</span>
      </Space>
    ),
    csvOutput: () => randomOutput(['1991-01-01 （31歳）', '']),
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
  // 電話番号
  phone: {
    title: '電話番号',
    render: () => randomOutput(['08012345678', '08012345678']),
    csvOutput: () => randomOutput(['男性', '女性']),
  },
  // 住所
  address: {
    title: '住所',
    render: () => randomOutput(['熊本県熊本市…', '大阪府大阪市…']),
    csvOutput: () => randomOutput(['熊本県熊本市…', '大阪府大阪市…']),
  },
  // 属性
  attributes: {
    title: '属性',
    render: ({ attributes }) => attributes.map(attribute => <Tag>{attribute}</Tag>),
    csvOutput: ({ attributes }) => attributes.map(attribute => attribute),
  },
  // カスタム項目
  custom_field: {
    title: 'カスタム項目',
    render: () => randomOutput(['text', 'another text']),
    csvOutput: () => randomOutput(['text', 'another text']),
  },
  // カスタム項目（複数行の場合）
  custom_field_multiple_lines: {
    title: 'カスタム項目（複数行の場合）',
    render: () => <SubjectIcon />,
    csvOutput: () => randomOutput(['...', 'another text']),
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
    title: '累計寄付金額',
    dataIndex: 'cumulative_donation',
    render: cumulative_donation => <span>{cumulative_donation}</span>,
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
