import { Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { TEXT_COLOR } from 'styles/StyleConstants';

export const LIST_MODE = 0;
export const DETAIL_MODE = 1;
export const EDIT_MODE = 2;

const RECEIPT_METHODS = {
  1: 'カード決済',
};

const DONATION_TYPES = {
  1: '単発',
  2: '毎月',
  3: '毎年',
};

const DONATION_TYPE_COLORS = {
  1: 'blue',
  2: 'green',
  3: 'orange',
};

const RECEIPT_STATUSES = {
  0: '未発行',
  1: '発行済み',
};

const RECEIPT_STATUS_COLOR = {
  0: 'warning',
  1: 'success',
  2: '',
};

const PLANS = {
  0: '-',
  1: 'ゴールドサポーター',
};

const HEADER_BREADCUMD_DATA = [
  {
    id: 1,
    title: (
      <Space size={4}>
        <span
          className="material-symbols-outlined fill-icon icon"
          style={{ fontSize: '14px', color: TEXT_COLOR }}
        >
          flag
        </span>
        <span>{'領収書一覧'}</span>
      </Space>
    ),
    uri: '/app/receipts',
  },
  {
    id: 2,
    title: '領収書作成履歴',
    uri: '/app/receipts-create-history',
  },
];

const HeaderWithBreadcumd = ({ Breadcumd }) => (
  <Space
    className="px-6 py-3"
    style={{ background: '#ffffff', width: '100%' }}
    direction="vertical"
  >
    <Space style={{ width: '100%' }} size={16}>
      <Link to="/app/receipts">
        <Button
          className="icon-btn less-shadow-btn"
          icon={<span className="material-symbols-outlined fill-icon">chevron_left</span>}
        >
          {'一覧へもどる'}
        </Button>
      </Link>
      {Breadcumd}
    </Space>
  </Space>
);

export {
  RECEIPT_METHODS,
  DONATION_TYPES,
  RECEIPT_STATUSES,
  PLANS,
  DONATION_TYPE_COLORS,
  RECEIPT_STATUS_COLOR,
  HEADER_BREADCUMD_DATA,
  HeaderWithBreadcumd,
};
