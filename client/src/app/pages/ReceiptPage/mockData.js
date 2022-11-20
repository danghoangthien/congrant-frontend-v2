import { Dropdown, Button, Menu, Badge, Space } from 'antd';
import { EllipsisOutlined, TagFilled, DeleteFilled, SendOutlined } from '@ant-design/icons';
import { getWithExpiry } from 'utils/localStorageHandler';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { StyledBadgeDot } from 'styles/global-styles';

import {
  RECEIPT_METHODS,
  DONATION_TYPES,
  PLANS,
  RECEIPT_STATUSES,
  DONATION_TYPE_COLORS,
} from './consts';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

export const menuItems = selectedRowKeys => [
  {
    key: '1',
    label: (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <SendOutlined style={{ color: 'black' }} />{' '}
        <span className="ml-2">{'領収書URLを送る'}</span>
      </Space>
    ),
  },
  {
    key: '2',
    label: (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <TagFilled style={{ color: 'black' }} /> <span className="ml-2">{'領収書URLをコピー'}</span>
      </Space>
    ),
  },
  {
    key: '3',
    label: (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <KeyboardReturnIcon style={{ color: 'black' }} />{' '}
        <span className="ml-2">{'未発行にもどす'}</span>
      </Space>
    ),
  },
  {
    key: '4',
    label: (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <DeleteFilled style={{ color: 'red' }} /> <span className="ml-2">{'削除'}</span>
      </Space>
    ),
  },
];

const dataSource = Array.from(Array(10).keys()).map(i => ({
  key: `${i}`,
  receipt_no: `${'20220730' + i}`,
  issuing_status: randomOutput(['発行済み', '未発行']),
  issuing_date: randomOutput(['2023-04-01', '2023-11-05', '2023-03-05']),
  template: randomOutput(['標準領収書']),
  amount: '3,000円',
  supporter: randomOutput(['田中 太郎', '山田 花子']),
}));

const columnMap = {
  receipt_no: {
    width: '80',
    title: '領収書No',
    dataIndex: 'receipt_no',
    csvOutput: ({ receipt_no }) => receipt_no,
  },
  issuing_status: {
    title: '発行ステータス',
    dataIndex: 'issuing_status',
    render: issuing_status => (
      <StyledBadgeDot>
        <Badge status="success" text={issuing_status} />
      </StyledBadgeDot>
    ),
    csvOutput: ({ issuing_status }) => issuing_status,
  },
  issuing_date: {
    title: '属発行日性',
    render: ({ issuing_date }) => issuing_date,
    csvOutput: ({ issuing_date }) => issuing_date,
  },
  template: {
    title: 'テンプレート',
    dataIndex: 'template',
    csvOutput: ({ template }) => template,
  },
  supporter: {
    title: 'サポーター',
    render: row => <Button type="link">{row.supporter}</Button>,
    csvOutput: ({ supporter }) => supporter,
  },
  amount: {
    width: 150,
    title: '金額',
    dataIndex: 'amount',
  },
  action: {
    title: 'アクション',
    render: row => (
      <Dropdown overlay={<Menu items={menuItems([row.key])} />} placement="bottomRight">
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    ),
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'receipt_list_column_setting';

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
