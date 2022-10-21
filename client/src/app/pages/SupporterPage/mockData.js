import { Typography, Tag } from 'antd';

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

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  personal_id: `${'20220730' + i}`,
  full_name: '荒木 雄大',
  attributes: ['abc', 'xyz'],
  email: `danghoangthien+${i}@gmail.com`,
  phone: `${'0938354758' + i}`,
  recent_donation: '3,000円',
  cumulative_donation: '4,000円',
}));

const columnMap = {
  personal_id: {
    title: '個人ID',
    render: row => (
      <DrawerHandle drawerTitle={row.full_name} drawerComponent={<Detail data={row} />}>
        {row.personal_id}
      </DrawerHandle>
    ),
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
  phone: {
    title: '電話番号',
    dataIndex: 'phone',
    csvOutput: phone => phone,
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

const columnMap2 = {
  personal_id: {
    title: '個人ID',
    render: row => (
      <DrawerHandle drawerTitle={row.full_name} drawerComponent={<Detail data={row} />}>
        {row.personal_id}
      </DrawerHandle>
    ),
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
  phone: {
    title: '電話番号',
    dataIndex: 'phone',
    csvOutput: phone => phone,
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

export {
  getRenderColumns,
  dataSource,
  pagination,
  COLUMN_SETTING_LOCALSTORAGE,
  columnMap,
  columnMap2,
};
