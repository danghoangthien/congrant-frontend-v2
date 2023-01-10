import { Space } from 'antd';
import { TEXT_COLOR } from 'styles/StyleConstants';

const HEADER_BREADCUMD_DATA = [
  {
    id: 1,
    title: (
      <Space size={4}>
        <span
          className="material-symbols-outlined fill-icon icon"
          style={{ fontSize: '14px', color: TEXT_COLOR }}
        >
          receipt
        </span>
        <span>{'領収書一覧'}</span>
      </Space>
    ),
    //uri: '/app/receipts-create-history',
  },
  {
    id: 2,
    title: '領収書作成履歴',
    uri: '/app/receipts-create-history',
  },
];

const HeaderWithBreadcumd = ({ Breadcumd }) => (
  <Space
    className="px-9 py-6"
    style={{ background: '#ffffff', width: '100%', borderBottom: '1px solid #d9d9d7' }}
    direction="vertical"
  >
    {Breadcumd}
  </Space>
);

export { HEADER_BREADCUMD_DATA, HeaderWithBreadcumd };
