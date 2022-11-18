import { Tag, Badge, Space } from 'antd';
import { EllipsisOutlined, CopyFilled, DeleteFilled, SendOutlined } from '@ant-design/icons';
import { getWithExpiry } from 'utils/localStorageHandler';
import { StyledBadgeDot } from 'app/pages/IndividualPage/components/ContinuousContract.style';
import SendIcon from '@mui/icons-material/Send';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

export const menuItems = selectedRowKeys => [
  {
    key: '1',
    label: (
      <Space onClick={() => {}}>
        <SendIcon style={{ color: 'black' }} />{' '}
        <span className="ml-2">{'再決済フォームを送る'}</span>
      </Space>
    ),
  },
  {
    key: '2',
    label: (
      <Space onClick={() => {}}>
        <CopyFilled style={{ color: 'black' }} />{' '}
        <span className="ml-2">{'再決済フォームのURLをコピー'}</span>
      </Space>
    ),
  },
];

const dataSource = [
  {
    key: '1',
    status: '継続中',
    frequency: '毎月',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
  },
  {
    key: '2',
    status: '継続中',
    frequency: '毎月',
    plan: 'ゴールドサポーター',
    amount: '10,000円/月',
  },
];
const columnMap = {
  status: {
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge status="success" text={status} />
      </StyledBadgeDot>
    ),
  },
  frequency: {
    title: '頻度',
    dataIndex: 'frequency',
    render: frequency => <Tag color="green">{frequency}</Tag>,
  },
  plan: {
    title: 'プラン',
    dataIndex: 'plan',
  },
  amount: {
    title: '金額',
    dataIndex: 'amount',
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'continuous_contract_list_column_setting';

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
