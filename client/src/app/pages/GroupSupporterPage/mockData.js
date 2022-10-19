import { Typography, Tag, Button } from 'antd';

import DrawerHandle from 'app/components/DrawerHandle';
import { getWithExpiry } from 'utils/localStorageHandler';

import {
  RECEIPT_METHODS,
  DONATION_TYPES,
  PLANS,
  RECEIPT_STATUSES,
  DONATION_TYPE_COLORS,
} from './consts';

const { Text } = Typography;

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  group_id: `${'20220730' + i}`,
  group_name: 'コングラント株式会社',
  manager: 'CSR部 課長  鈴木 一郎',
  attributes: ['meta', 'group'],
  email: `danghoangthien+${i}@gmail.com`,
  recent_donation: '3,000円',
  cumulative_donation: '4,000円',
}));

const columnMap = {
  group_id: {
    title: '法人ID',
    render: row => <Button type="link">{row.group_id} </Button>,
    csvOutput: ({ group_id }) => group_id,
  },
  group_name: {
    title: '氏名',
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
    dataIndex: 'recent_donation',
    csvOutput: recent_donation => recent_donation,
  },
  cumulative_donation: {
    title: '累計寄付',
    dataIndex: 'cumulative_donation',
    csvOutput: cumulative_donation => cumulative_donation,
  },
  operate: {
    title: '受領日',
    render: row => (
      <>
        <Button>{'...'}</Button>
      </>
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