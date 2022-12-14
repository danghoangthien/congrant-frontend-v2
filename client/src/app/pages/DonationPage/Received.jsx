import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// ANTD
import { Button, Badge, Input, Row, Col, Space, Breadcrumb, Menu, Dropdown } from 'antd';
// COMPONENT
import Table from 'app/components/Table';
import SendMail from 'app/components/SendMail';
import Filters from './components/Filters';
import AddDonation from './components/AddDonation';
import Detail, { DETAIL_KEY_MAP } from '../IndividualPage/components/Detail';
import { DETAIL_MODE } from 'utils/consts';
import './Models/received';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// COLNST
import { RED_COLOR } from 'styles/StyleConstants';
// DATA
import * as metaData from './mockDataReceived';

// メッセージを送るボタン
const MailButton = ({ selectedRowKeys }) => <SendMail />;

// アクション・Action Menu
const menu = (
  <Menu
    className="action-menu"
    items={[
      {
        key: '1',
        label: (
          <Link to="/app/donations-bulk-upload">
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
                      <Link className="bread-crumb-content" to={`/app/donations/unpaid`}>
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
                <AddDonation />
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
        <div>
          <Filters open={filterOpen} />
        </div>

        {/* メインコンテンツ・Main Content */}
        <div>
          <Table
            className="clickable-table"
            tableLayout="fixed"
            model="receivedFundingList"
            metaData={metaData} // テーブル中身
            contextButtons={[MailButton]} // メッセージを送るボタン
            Detail={
              <Detail
                activeKey={DETAIL_KEY_MAP.DONATION}
                data={{ donation_id: 1 }}
                viewMode={DETAIL_MODE}
              />
            } // 詳細ページ
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
