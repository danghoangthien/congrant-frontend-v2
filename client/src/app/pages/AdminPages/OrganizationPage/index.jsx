import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './mockData';
import { Button, Input, Row, Col, Space, Switch, Badge } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';

import './Models/index';

const ContinuousContractPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'登録団体'}</title>
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
                  <div className="page-title">{'登録団体'}</div>
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
            model="organizationList"
            metaData={metaData}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default ContinuousContractPage;
