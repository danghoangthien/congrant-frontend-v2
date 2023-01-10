import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Table from 'app/components/Table';
import SendMail from 'app/components/SendMail';
import Filters from './components/Filters';
import * as metaData from './mockData';
import Detail, { DETAIL_KEY_MAP } from './components/Detail';

import { Button, Input, Row, Col, Badge, Space, Dropdown, Menu } from 'antd';
import AddSupporter from './components/AddSupporter';
import AddAttribute from './components/AddAttribute';
import './Models/index';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { DANGER_COLOR } from 'styles/StyleConstants';

const MailButton = ({ selectedRowKeys }) => <SendMail />;

// 複数選択した時の操作バー
const contextDropdownItems = selectedRowKeys => [
  {
    key: '1',
    label: <AddAttribute />,
  },
  {
    key: '2',
    label: (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <span
          className="material-symbols-outlined fill-icon"
          style={{ color: DANGER_COLOR, fontSize: '16px', display: 'flex' }}
        >
          delete
        </span>
        <span style={{ color: DANGER_COLOR }}>{'削除'}</span>
      </Space>
    ),
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
          <Link to="/app/individuals-bulk-upload">
            <Space>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                upload
              </span>
              <span>{'一括アップロード'}</span>
            </Space>
          </Link>
        ),
      },
    ]}
  />
);

const IndividualPage = () => {
  const url = window.location.pathname?.split('/');
  const [filterOpen, setFilterOpen] = useState(false);

  // META情報
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'個人サポーター'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <div className="page-title">
                    <span className="material-symbols-outlined icon fill-icon">person</span>
                    <span className="ml-2">{'個人サポーター'}</span>
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
              <Space>
                <Link to={`/app/individuals-naming`}>
                  <Button className="icon-btn">
                    <span>{'名寄せ候補'}</span>
                    <Badge
                      className="ml-2"
                      style={{ backgroundColor: '#c72a32' }}
                      count={99}
                    ></Badge>
                  </Button>
                </Link>
                <AddSupporter />
                <Dropdown overlay={menu} placement="bottomRight" trigger={['hover']}>
                  <Button
                    className="more-menu-btn"
                    icon={<span className="material-symbols-outlined">more_horiz</span>}
                  />
                </Dropdown>
              </Space>
            </Col>
          </Row>
        </div>

        {/* フィルター・Filter */}
        <div className="item">
          <Filters open={filterOpen} />
        </div>

        {/* ページコンテンツ・Page Content */}
        <div>
          <Table
            style={{ minHeight: '2500px' }}
            key="supporterList"
            tableLayout="fixed"
            TableName="個人サポーター一覧"
            model="supporterList"
            metaData={metaData}
            Detail={<Detail activeKey={DETAIL_KEY_MAP.BASIC_INFO} />}
            contextButtons={[MailButton]}
            contextDropdownItems={contextDropdownItems}
            hasTableSetting
          />
        </div>
      </PageLayout>
    </>
  );
};

export default IndividualPage;
