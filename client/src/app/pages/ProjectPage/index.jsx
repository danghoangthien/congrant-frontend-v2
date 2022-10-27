import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Filters from './components/Filters';
import {
  SearchOutlined,
  MailOutlined,
  PlusOutlined,
  EllipsisOutlined,
  CopyFilled,
  DeleteFilled,
} from '@ant-design/icons';
import PersonIcon from '@mui/icons-material/Person';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { Button, Input, Row, Col, Card, Space, Image, Tag, Divider, Menu, Dropdown } from 'antd';

import LaunchNewProject from './components/LaunchNewProject';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import {
  StatusTag as StyledStatusTag,
  ProjectTitle as StyledProjectTitle,
  ProjectUrl as StyledProjectUrl,
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
  const url = window.location.pathname?.split('/');
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
                    <PersonIcon style={{ fontSize: '32px' }} />
                    <span className="ml-1 page-title">{'プロジェクト'}</span>
                  </span>
                </Col>
                <Col className="mr-2">
                  <Input
                    className="free-search"
                    placeholder="フリーワード検索"
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

        <Card
          title={<span className="bold">{'法人サポーター'}</span>}
          style={{ minWidth: '1000px' }}
        >
          {Array.from(Array(3).keys()).map(i => (
            <Row style={{ minWidth: '1000px' }} className="mb-5">
              <Col flex="160px">
                <Image
                  width={160}
                  height={104}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
              <Col flex="auto" style={{ maxWidth: '900px' }}>
                <Space className="ml-5" style={{ width: '100%', height: '33%' }}>
                  <StyledStatusTag>{'公開中'}</StyledStatusTag>
                  <StyledProjectTitle>
                    {'NPO法人コングラントへのご支援をお願いします！'}
                  </StyledProjectTitle>
                </Space>
                <Space className="ml-5" style={{ width: '100%', height: '33%' }} align="start">
                  <StyledProjectUrl>
                    {'公開URL：https://congrant.com/XXXXXXXXXXXXXXXXXXX'}
                  </StyledProjectUrl>
                </Space>
                <Space className="ml-5" style={{ width: '100%', height: '33%' }}>
                  <Tag style={{ marginRight: '0px' }} color="success">
                    {'クラウドファンディング'}
                  </Tag>
                  <Divider type="vertical" />
                  <Tag color="processing">{'単発'}</Tag>
                  <Tag color="error">{'毎月'}</Tag>
                  <Tag color="magenta">{'毎年'}</Tag>
                  <Divider type="vertical" />
                  <span>{'最終更新 2022-08-01 12:34:45'}</span>
                  <Divider type="vertical" />
                  <span>{'寄付総額 123,456円 寄付件数 123件'}</span>
                </Space>
              </Col>
              <Col align="right" flex="auto">
                <Dropdown overlay={menu} placement="bottomRight">
                  <Button icon={<EllipsisOutlined />} className="ml-2" />
                </Dropdown>
              </Col>
            </Row>
          ))}
        </Card>
      </PageLayout>
    </>
  );
};

export default ProjectPage;
