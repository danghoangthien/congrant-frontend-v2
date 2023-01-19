import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './metaData';
import { Button, Input, Row, Col } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import './Models/index';

const contextDropdownItems = selectedRowKeys => [
  {
    key: '1',
    label: '完了にする',
  },
  {
    key: '2',
    label: '未完了に戻す',
  },
  {
    key: '3',
    label: '保留にする',
  },
];

const AmountPage = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'金額変更'}</title>
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
                  <div className="page-title">{'金額変更'}</div>
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
            TableName="金額変更申請一覧"
            model="@admin//amountList"
            metaData={metaData}
            contextDropdownItems={contextDropdownItems}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default AmountPage;
