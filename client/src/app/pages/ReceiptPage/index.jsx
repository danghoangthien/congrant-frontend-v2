import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './mockData';
import Detail, { DETAIL_KEY_MAP } from 'app/pages/IndividualPage/components/Detail';
import { SearchOutlined, MailOutlined, EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import NewReceipt from './components/NewReceipt';
import { Button, Input, Row, Col, Space, Dropdown, Menu } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import SendIcon from '@mui/icons-material/Send';

import './Models/index';

// メッセージを送るボタン
const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="icon-btn"
      icon={<span className="material-symbols-outlined fill-icon">send</span>}
      onClick={() => {
        console.log('selectedRowKeys', selectedRowKeys);
      }}
    >
      {'メッセージを送る'}
    </Button>
  );
};

// その他の操作メニュー
const contextDropdownItems = metaData.menuItems;

const headerContextDropdownItems = [
  {
    key: '1',
    label: (
      <Link to={`receipts-bulk/history`}>
        <Space onClick={() => {}}>
          <span
            class="material-symbols-outlined"
            style={{ fontSize: '16px', verticalAlign: 'middle' }}
          >
            history
          </span>
          <span>{'一括作成履歴'}</span>
        </Space>
      </Link>
    ),
  },
];

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
        <div className="item mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <span className="page-title">
                    <span class="material-symbols-outlined fill-icon" style={{ fontSize: '30px' }}>
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
              <Space>
                <Link to={'/receipts-bulk'}>
                  <Button type="primary">
                    <PlusOutlined className="display-inline-flex" />
                    <span>{'領収書の一括作成'}</span>
                  </Button>
                </Link>
                <Dropdown
                  overlay={<Menu items={headerContextDropdownItems} />}
                  placement="bottomRight"
                >
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
        <div className="item">
          <Table
            TableName="領収書一覧"
            model="receiptList"
            metaData={metaData}
            Detail={<Detail activeKey={DETAIL_KEY_MAP.RECEIPT} />}
            contextButtons={[MailButton]}
            contextDropdownItems={contextDropdownItems}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default ReceiptPage;
