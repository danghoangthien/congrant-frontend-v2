import { Button, DatePicker, Dropdown, Menu, Space } from 'antd';
import moment from 'moment';

import DrawerHandle from 'app/components/DrawerHandle';
import { getWithExpiry } from 'utils/localStorageHandler';
import Detail from '../IndividualPage/components/Detail';

import { DANGER_COLOR } from 'styles/StyleConstants';

import { PLANS } from './consts';
import ChangeAmount from './components/ChangeAmount';

const menuItems = selectedRowKeys => [
  {
    key: '1',
    label: <ChangeAmount />,
  },
  {
    key: '2',
    label: '非表示',
  },
  {
    key: '3',
    label: <span style={{ color: DANGER_COLOR }}>{'削除'}</span>,
  },
];

const dataSource = Array.from(Array(500).keys()).map(i => ({
  key: `${i}`,
  application_date: `2022-07-30`,
  supporter: `荒木 雄大 ${i}`,
  project: 'NPO法人コングラントへのご支援をお願いします！',
  plan: '0',
  amount: '3,000円',
  date_of_receipt: '',
}));

const columnMap = {
  application_date: {
    width: 150,
    title: '申込日',
    dataIndex: 'application_date',
    csvOutput: ({ application_date }) => application_date,
  },
  supporter: {
    width: 150,
    title: 'サポーター',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
    csvOutput: ({ supporter }) => supporter,
  },
  project: {
    title: 'プロジェクト',
    dataIndex: 'project',
    csvOutput: ({ project }) => project,
  },
  plan_and_amount: {
    width: 150,
    title: 'プラン・金額',
    render: ({ plan, amount }) => (
      <>
        {PLANS[plan] || ''}
        <br />
        {amount}
      </>
    ),
    csvOutput: ({ plan, amount }) => `${PLANS[plan] || ''} ${amount}`,
  },
  date_of_receipt: {
    width: 150,
    title: '入金日',
    dataIndex: 'date_of_receipt',
    render: date_of_receipt => (
      <DatePicker onClick={e => e.stopPropagation()} format={'YYYY-MM-DD'} />
    ),
    csvOutput: ({ date_of_receipt }) => date_of_receipt,
  },
  operate: {
    width: 150,
    title: 'アクション',
    render: row => (
      <Space onClick={e => e.stopPropagation()}>
        <Button type="primary">{'入金消込'}</Button>
        <Dropdown overlay={<Menu items={menuItems()} />} placement="bottomRight">
          <Button
            className="more-menu-btn"
            icon={<span className="material-symbols-outlined">more_horiz</span>}
          />
        </Dropdown>
      </Space>
    ),
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'unclaimed_funding_column_setting';

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
  limit: 10,
  total_items: Object.keys(dataSource).length,
  total_page: Math.ceil(Object.keys(dataSource).length / 10),
};

export {
  getRenderColumns,
  dataSource,
  pagination,
  COLUMN_SETTING_LOCALSTORAGE,
  columnMap,
  menuItems,
};
