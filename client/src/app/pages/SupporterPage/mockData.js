import { Dropdown, Tag, Button, Menu } from 'antd';
import { EllipsisOutlined, TagFilled, DeleteFilled, SendOutlined } from '@ant-design/icons';
import DrawerHandle from '../../components/DrawerHandle';
import { getWithExpiry } from 'utils/localStorageHandler';
import Detail from './components/Detail';

import {
  RECEIPT_METHODS,
  DONATION_TYPES,
  PLANS,
  RECEIPT_STATUSES,
  DONATION_TYPE_COLORS,
} from './consts';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <>
            <SendOutlined style={{ color: 'black' }} />{' '}
            <span className="ml-2">{'メッセージを送る'}</span>
          </>
        ),
      },
      {
        key: '2',
        label: (
          <>
            <TagFilled style={{ color: 'black' }} />{' '}
            <span className="ml-2">{'属性を設定する'}</span>
          </>
        ),
      },
      {
        key: '3',
        label: (
          <>
            <DeleteFilled style={{ color: 'red' }} /> <span className="ml-2">{'削除'}</span>
          </>
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
    csvOutput: email => email,
  },
  // 直近の寄付
  recent_donation: {
    title: '直近の寄付',
    dataIndex: 'recent_donation',
    csvOutput: recent_donation => recent_donation,
  },
  // 累計寄付
  cumulative_donation: {
    title: '累計寄付',
    dataIndex: 'cumulative_donation',
    csvOutput: cumulative_donation => cumulative_donation,
  },
  action: {
    title: 'アクション',
    render: row => (
      <Dropdown overlay={menu} placement="bottomRight">
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    ),
  },
};

const columnMap2 = {
  personal_id: {
    title: '個人No',
    render: row => <>{row.personal_id}</>,
    csvOutput: ({ personal_id }) => personal_id,
  },
  full_name: {
    title: '氏名',
    dataIndex: 'full_name',
    csvOutput: full_name => full_name,
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
    dataIndex: 'recent_donation',
    csvOutput: recent_donation => recent_donation,
  },
  cumulative_donation: {
    title: '累計寄付',
    dataIndex: 'cumulative_donation',
    csvOutput: cumulative_donation => cumulative_donation,
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
