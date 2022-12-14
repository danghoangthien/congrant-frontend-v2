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
        <span>{'プロジェクト一覧'}</span>
      </Space>
    ),
    uri: '/app/projects',
  },
  {
    id: 2,
    title: 'プロジェクトトップ',
    uri: '',
  },
];

const SUMMARY_BREADCUMD_DATA = id => {
  return [
    {
      id: 1,
      title: 'サマリー',
      uri: 'summary',
    },
    {
      id: 2,
      title: '寄付決済',
      uri: 'donations',
    },
    parseInt(id) === 2 && {
      id: 3,
      title: 'コース別',
      uri: 'courses',
    },
  ];
};

const ProjectDetailHeader = ({ Link, Breadcumd }) => (
  <Space
    className="px-6 py-3"
    style={{ background: '#ffffff', width: '100%' }}
    direction="vertical"
  >
    <Space style={{ width: '100%' }} size={16}>
      {Link}
      {Breadcumd}
    </Space>
    <Space style={{ width: '100%' }}>
      <StyledStatusTag className={PROJECT_STATUS_CLASSES[1]}>{PROJECT_STATUSES[1]}</StyledStatusTag>
      <StyledProjectTitle>
        <div>{'NPO法人コングラントへのご支援をお願いします！'}</div>
      </StyledProjectTitle>
    </Space>
  </Space>
);

export { HEADER_BREADCUMD_DATA, SUMMARY_BREADCUMD_DATA, ProjectDetailHeader };
