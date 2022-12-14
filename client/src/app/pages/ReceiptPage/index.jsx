import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Table from 'app/components/Table';
import SendMail from 'app/components/SendMail';
import Filters from './components/Filters';
import * as metaData from './mockData';
import Detail, { DETAIL_KEY_MAP } from 'app/pages/IndividualPage/components/Detail';
import { DETAIL_MODE } from 'utils/consts';
import { Button, Input, Row, Col, Space, Dropdown, Menu } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';

import './Models/index';

// メッセージを送るボタン
const MailButton = ({ selectedRowKeys }) => <SendMail />;

// その他の操作メニュー
const contextDropdownItems = metaData.menuItems;

const ReceiptPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'領収書'}</title>
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
                    <span
                      className="material-symbols-outlined fill-icon"
                      style={{ fontSize: '30px' }}
                    >
                      receipt
                    </span>
                    <span className="ml-2 page-title">{'領収書'}</span>
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
              <Link to="/app/receipts-create-history">
                <Button
                  className="icon-btn"
                  icon={<span className="material-symbols-outlined fill-icon">history</span>}
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  {'領収書作成履歴'}
                </Button>
              </Link>
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
            TableName="領収書一覧"
            tableLayout="fixed"
            model="receiptList"
            metaData={metaData}
            Detail={
              <Detail
                activeKey={DETAIL_KEY_MAP.RECEIPT}
                data={{ receipt_id: 1 }}
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

export default ReceiptPage;
