import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import Filters from './components/Filters';
import { Button, Input, Row, Col, Card, Space, Image, Tag, Divider, Menu, Dropdown } from 'antd';
import LaunchNewProject from './components/LaunchNewProject';
import {
  PROJECT_TYPES,
  PROJECT_TYPE_COLORS,
  PROJECT_PAYMENT_TYPES,
  PROJECT_PAYMENT_TYPE_COLORS,
  PROJECT_STATUSES,
  PROJECT_STATUS_CLASSES,
  DONATION_TYPES,
  DONATION_TYPE_CLASSES,
} from 'utils/consts';
import { DANGER_COLOR } from 'styles/StyleConstants';

import { PageLayout } from 'app/components/Layout/PageLayout.style';
import {
  StyledDonationTypeTag,
  StyledProjectTypeTag,
  StyledProjectPaymentTypeTag,
} from 'styles/Tag.style';
import { StyledStatusTag } from 'styles/StatusTag.style';
import {
  ProjectTitle as StyledProjectTitle,
  ProjectUrl as StyledProjectUrl,
  ProjectCard as StyledProjectCard,
} from './index.style';

const projectData = [
  {
    id: 1,
    title: 'NPO法人コングラントへのご支援をお願いします！',
    type: 1,
    status: 1,
    url: 'https://congrant.com/XXXXXXXXXXXXXXXXXXX',
    paymentType: 1,
    donationTypes: [1, 2, 3],
    totalDonation: '123,456',
    lastUpdated: '2022-08-01 12:34:45',
    donationTimes: '123',
  },
  {
    id: 2,
    title: 'NPO法人コングラントへのご支援をお願いします！',
    type: 1,
    status: 4,
    url: 'https://congrant.com/XXXXXXXXXXXXXXXXXXX',
    paymentType: 2,
    donationTypes: [1],
    totalDonation: '123,000',
    lastUpdated: '2022-08-01 12:34:45',
    donationTimes: '777',
  },
  {
    id: 3,
    title: 'NPO法人コングラントへのご支援をお願いします！',
    type: 1,
    status: 1,
    url: 'https://congrant.com/XXXXXXXXXXXXXXXXXXX',
    paymentType: 2,
    donationTypes: [1],
    totalDonation: '699,000',
    lastUpdated: '2022-08-01 12:34:45',
    donationTimes: '11',
  },
  {
    id: 4,
    title: 'NPO法人コングラントへのご支援をお願いします！',
    type: 2,
    status: 2,
    url: 'https://congrant.com/XXXXXXXXXXXXXXXXXXX',
    paymentType: 1,
    donationTypes: [1, 2, 3],
    totalDonation: '0',
    lastUpdated: '2022-08-01 12:34:45',
    donationTimes: '0',
  },
  {
    id: 5,
    title: 'NPO法人コングラントへのご支援をお願いします！',
    type: 3,
    status: 3,
    url: 'https://congrant.com/XXXXXXXXXXXXXXXXXXX',
    paymentType: 1,
    donationTypes: [1, 2, 3],
    totalDonation: '0',
    lastUpdated: '2022-08-01 12:34:45',
    donationTimes: '0',
  },
];

// アクション・Action Menu
const menu = (
  <Menu
    className="action-menu"
    items={[
      {
        key: '1',
        label: (
          <Space>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              content_copy
            </span>
            <span>{'複製'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle', color: DANGER_COLOR }}
            >
              delete
            </span>
            <span style={{ color: DANGER_COLOR }}>{'削除'}</span>
          </Space>
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
        {/* ヘッディング・Heading */}
        <div className="mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <div className="page-title">
                    <span className="material-symbols-outlined fill-icon icon">flag</span>
                    <span className="ml-2">{'プロジェクト'}</span>
                  </div>
                </Col>
                <Col className="mr-2">
                  <Input
                    className="free-search"
                    placeholder="フリー検索"
                    prefix={<span className="material-symbols-outlined">search</span>}
                  />
                </Col>
                <Col>
                  <Button
                    className="filter-button"
                    icon={<span className="material-symbols-outlined fill-icon">filter_alt</span>}
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
            className="project-card-wrapper"
          >
            {projectData.map(item => (
              <div className="project-card">
                <Row onClick={() => history.push(`projects/${item.id}/summary`)}>
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
                      <Space style={{ width: '100%' }}>
                        <StyledStatusTag className={PROJECT_STATUS_CLASSES[item.status]}>
                          {PROJECT_STATUSES[item.status]}
                        </StyledStatusTag>
                        <StyledProjectTitle>
                          <div>{item.title}</div>
                        </StyledProjectTitle>
                      </Space>
                    </div>
                    <div onClick={e => e.stopPropagation()}>
                      <StyledProjectUrl>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={e => e.stopPropagation()}
                        >
                          {`公開URL：${item.url}`}
                        </a>
                      </StyledProjectUrl>
                    </div>
                    <Space
                      className="mb-2"
                      split={<Divider type="vertical" style={{ backgroundColor: '#D9D9D7' }} />}
                    >
                      <StyledProjectPaymentTypeTag projectPaymentType={item.paymentType}>
                        {PROJECT_PAYMENT_TYPES[item.paymentType]}
                      </StyledProjectPaymentTypeTag>
                      <StyledProjectTypeTag projectType={item.type}>
                        {PROJECT_TYPES[item.type]}
                      </StyledProjectTypeTag>
                      <Space>
                        {item.donationTypes.map(donationType => (
                          <StyledDonationTypeTag className={DONATION_TYPE_CLASSES[donationType]}>
                            {DONATION_TYPES[donationType]}
                          </StyledDonationTypeTag>
                        ))}
                      </Space>
                    </Space>
                    <div>
                      <span className="project-sub-ttl">最終更新</span>
                      <span>{item.lastUpdated}</span>
                      <Divider type="vertical" />
                      <span className="project-sub-ttl">寄付総額</span>
                      <span className="mr-4">
                        {item.totalDonation}
                        {'円'}
                      </span>
                      <span className="project-sub-ttl">寄付件数</span>
                      <span>
                        {item.donationTimes}
                        {'件'}
                      </span>
                    </div>
                  </Col>
                  <Col flex="40px" onClick={e => e.stopPropagation()}>
                    <Dropdown overlay={menu} placement="bottomRight" trigger={['hover']}>
                      <Button
                        icon={<span className="material-symbols-outlined">more_horiz</span>}
                        className="more-menu-btn"
                      />
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
