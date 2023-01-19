import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './metaData';
import { Button, Input, Row, Col, Space, Switch, Badge } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Download from './components/Download';

import './Models/index';

const Page = () => {
  const [filterOpen, setFilterOpen] = useState(true);

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'入金明細'}</title>
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
                  <div className="page-title">{'入金明細'}</div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Download />
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
            TableName="入金明細一覧"
            model="paymentList"
            metaData={metaData}
            showRowSelection={false}
            showDownLoad={false}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
