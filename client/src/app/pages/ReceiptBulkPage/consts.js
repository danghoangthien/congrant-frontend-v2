import { Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { StyledStatusTag } from 'styles/StatusTag.style';
import { ProjectTitle as StyledProjectTitle } from 'app/pages/ProjectPage/index.style';
import { PROJECT_STATUSES, PROJECT_STATUS_CLASSES } from 'utils/consts';
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
          flag
        </span>
        <span>{'領収書一覧'}</span>
      </Space>
    ),
    uri: '/app/projects',
  },
  {
    id: 2,
    title: '一括作成履歴',
    uri: '',
  },
];

const HEADER_BREADCUMD_DATA_STEPS = [
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
    uri: '/app/projects',
  },
  {
    id: 2,
    title: '一括作成履歴',
    uri: '',
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

export { HEADER_BREADCUMD_DATA, HEADER_BREADCUMD_DATA_STEPS, HeaderWithBreadcumd };
