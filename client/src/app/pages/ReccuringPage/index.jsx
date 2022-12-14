import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table';
import SendMail from 'app/components/SendMail';
import Filters from './components/Filters';
import * as metaData from './mockData';
import Detail, { DETAIL_KEY_MAP } from 'app/pages/IndividualPage/components/Detail';
import { DETAIL_MODE } from 'utils/consts';
import { Button, Input, Row, Col, Space, Switch, Badge } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';

import './Models/index';

const MailButton = ({ selectedRowKeys }) => <SendMail />;

const contextDropdownItems = metaData.menuItems;

const OrganizationPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'継続契約'}</title>
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
                  <span className="page-title">
                    <span className="material-symbols-outlined icon">autorenew</span>
                    <span className="ml-2 page-title">{'継続契約'}</span>
                  </span>
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
              <Space align="center" size={8}>
                <Badge
                  style={{ backgroundColor: '#C72A32' }}
                  className="roboto-mono"
                  count={99}
                ></Badge>
                <span style={{ fontWeight: '300', fontSize: '14px' }}>
                  {'再決済待ちのレコードのみを表示'}
                </span>
                <Switch defaultChecked />
              </Space>
            </Col>
          </Row>
        </div>

        {/* フィルター・Filter */}
        <div className="item">
          <Filters open={filterOpen} />
        </div>

        {/* ページコンテンツ・Page Content */}
        <div className="item">
          <Table
            className="clickable-table"
            tableLayout="fixed"
            TableName="継続契約一覧"
            model="continuousContractList"
            metaData={metaData}
            Detail={
              <Detail
                activeKey={DETAIL_KEY_MAP.RECURRING}
                data={{ recurring_id: 1 }}
                viewMode={DETAIL_MODE}
              />
            }
            contextButtons={[MailButton]}
            contextDropdownItems={contextDropdownItems}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default OrganizationPage;
