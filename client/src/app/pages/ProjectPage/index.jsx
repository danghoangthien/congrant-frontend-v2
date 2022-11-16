import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import Filters from './components/Filters';
import {
  SearchOutlined,
  MailOutlined,
  PlusOutlined,
  EllipsisOutlined,
  CopyFilled,
  DeleteFilled,
} from '@ant-design/icons';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FlagIcon from '@mui/icons-material/Flag';

import { Button, Input, Row, Col, Card, Space, Image, Tag, Divider, Menu, Dropdown } from 'antd';

import LaunchNewProject from './components/LaunchNewProject';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import {
  StatusTag as StyledStatusTag,
  ProjectTitle as StyledProjectTitle,
  ProjectUrl as StyledProjectUrl,
  ProjectCard as StyledProjectCard,
} from './index.style';

const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="ml-5"
      icon={<MailOutlined />}
      onClick={() => {
        console.log('selectedRowKeys', selectedRowKeys);
      }}
    >
      {'メールを送る'}
    </Button>
  );
};

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <>
            <CopyFilled /> <span className="ml-2">{'複製'}</span>
          </>
        ),
      },
      {
        key: '2',
        label: (
          <>
            <DeleteFilled style={{ color: 'red' }} /> <span className="ml-2">{'削除'}</span>
          </>
        ),
      },
    ]}
  />
);

const ProjectPage = () => {
  const history = useHistory();
  const [filterOpen, setFilterOpen] = useState(false);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'プロジェクト'}</title>
          <meta name="description" content={'プロジェクト'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="item mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <span className="page-title">
                    <FlagIcon style={{ fontSize: '32px' }} />
                    <span className="ml-1 page-title">{'プロジェクト'}</span>
                  </span>
                </Col>
                <Col className="mr-2">
                  <Input
                    className="free-search"
                    placeholder="フリー検索"
                    prefix={<SearchOutlined />}
                  />
                </Col>
                <Col>
                  <Button
                    className="filter-button"
                    icon={<FilterAltIcon />}
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    {'フィルタ'}
                  </Button>
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <LaunchNewProject />
            </Col>
          </Row>
        </div>

        {/* フィルター・Filter */}
        <div className="item">
          <Filters open={filterOpen} />
        </div>

        {/* ページコンテンツ・Page Content */}
        <StyledProjectCard>
          <Card
            title={<span className="bold">{'プロジェクト一覧'}</span>}
            style={{ minWidth: '1000px' }}
            className="project-card-wrapper"
          >
            {Array.from(Array(3).keys()).map(i => (
              <div className="project-card">
                <Row onClick={() => history.push(`projects/${i + 1}/summary`)}>
                  <Col flex="160px">
                    <div className="thumb-image" style={{ height: '104px' }}>
                      <Image
                        preview={false}
                        src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                      />
                    </div>
                  </Col>
                  <Col flex="calc(100% - 200px)" className="px-6">
                    <div className="project-head">
                      <div style={{ width: '66px' }} className="pt-1">
                        <StyledStatusTag>
                          <span>{'公開中'}</span>
                        </StyledStatusTag>
                      </div>
                      <div style={{ width: 'calc(100% - 66px)' }} className="pl-2">
                        <StyledProjectTitle>
                          <div>{'NPO法人コングラントへのご支援をお願いします！'}</div>
                        </StyledProjectTitle>
                      </div>
                    </div>
                    <div>
                      <StyledProjectUrl>
                        <a
                          href="https://congrant.com/XXXXXXXXXXXXXXXXXXX"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {'公開URL：https://congrant.com/XXXXXXXXXXXXXXXXXXX'}
                        </a>
                      </StyledProjectUrl>
                    </div>
                    <div>
                      <Tag style={{ marginRight: '0px' }} color="success">
                        {'クラウドファンディング'}
                      </Tag>
                      <Divider type="vertical" />
                      <Tag color="processing">{'単発'}</Tag>
                      <Tag color="error">{'毎月'}</Tag>
                      <Tag color="magenta">{'毎年'}</Tag>
                      <Divider type="vertical" />
                      <span className="project-sub-ttl">最終更新</span>
                      <span>{'2022-08-01 12:34:45'}</span>
                      <Divider type="vertical" />
                      <span className="project-sub-ttl">寄付総額</span>
                      <span className="mr-4">{'123,456円'}</span>
                      <span className="project-sub-ttl">寄付件数</span>
                      <span>{'123件'}</span>
                    </div>
                  </Col>
                  <Col flex="40px" onClick={e => e.stopPropagation()}>
                    <Dropdown overlay={menu} placement="bottomRight">
                      <Button icon={<EllipsisOutlined />} className="ml-2" />
                    </Dropdown>
                  </Col>
                </Row>
              </div>
            ))}
          </Card>
        </StyledProjectCard>
      </PageLayout>
    </>
  );
};

export default ProjectPage;
