import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Antd
import { Button, Badge, Input, Row, Col, Space, Breadcrumb, Menu, Dropdown } from 'antd';
// Components
import Table from 'app/components/Table';
import Filters from './components/Filters';
import AddFunding from './components/AddFunding';
import Detail, { DETAIL_KEY_MAP } from '../IndividualPage/components/Detail';
import './Models/received';
// Styles
// import { FundingPageLayout } from './FundingPage.style';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { RED_COLOR } from 'styles/StyleConstants';
// Meta
import * as metaData from './mockDataReceived';

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

// アクション・Action Menu
const menu = (
  <Menu
    className="action-menu"
    items={[
      {
        key: '1',
        label: (
          <Link to="/donations-bulk-upload">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              upload
            </span>
            <span className="ml-2">{'一括アップロード'}</span>
          </Link>
        ),
      },
    ]}
  />
);

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'寄付決済'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

const FundingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

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
                    <span className="material-symbols-outlined fill-icon icon">favorite</span>
                    <span className="ml-2">{'寄付決済'}</span>
                  </div>
                </Col>

                <Col className="mr-2">
                  <Breadcrumb className="bread-crumb" separator="">
                    <Breadcrumb.Item>
                      <span className="bread-crumb-content">受領済み</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <Link className="bread-crumb-content" to={`/donations/unclaimed`}>
                        未受領
                        <Badge
                          className="ml-1 roboto-mono"
                          count={99}
                          style={{ backgroundColor: RED_COLOR, boxShadow: 'none' }}
                        ></Badge>
                      </Link>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>

                {/* フリー検索 */}
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
                <AddFunding />
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

        {/* フィルタ・Filter */}
        <div className="item">
          <Filters open={filterOpen} />
        </div>

        {/* メインコンテンツ・Main Content */}
        <div className="item">
          <Table
            tableLayout="fixed"
            model="receivedFundingList"
            metaData={metaData} // テーブル中身
            contextButtons={[MailButton]} // メッセージを送るボタン
            Detail={<Detail activeKey={DETAIL_KEY_MAP.DONATION} />} // 詳細ページ
            TableName={'受領済みの寄付一覧'} // テーブルタイトル
            contextDropdownItems={metaData.menuItems} //　選択時のメニュー
            hasTableSetting // テーブル表示設定
          />
        </div>
      </PageLayout>
    </>
  );
};

export default FundingPage;
