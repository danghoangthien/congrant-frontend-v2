import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// ANTD
import { Button, Badge, Input, Row, Col, Space, Breadcrumb, Menu, Dropdown } from 'antd';
// COMPONENT
import Table from 'app/components/Table';
import SendMail from 'app/components/SendMail';
import Swap from './components/Swap';
import Detail, { DETAIL_KEY_MAP } from 'app/pages/IndividualPage/components/Detail';
// CONST
import { DETAIL_MODE } from 'utils/consts';
import { RED_COLOR } from 'styles/StyleConstants';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// DATA
import * as metaData from './mockData';
// MODEL
import './Models/unclaimed';

const MailButton = ({ selectedRowKeys }) => <SendMail />;

// アクション・Action Menu
const menu = (
  <Menu
    className="action-menu"
    items={[
      {
        key: '1',
        label: (
          <>
            <span className="ml-2">{'非表示のレコードを表示する'}</span>
          </>
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
                <div className="page-title mr-6">
                  <span className="material-symbols-outlined fill-icon icon">favorite</span>
                  <span className="ml-2">{'寄付決済'}</span>
                </div>

                <Breadcrumb className="bread-crumb mr-2" separator="">
                  <Breadcrumb.Item>
                    <Link className="bread-crumb-content" to={`/app/donations/paid`}>
                      受領済み
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <span className="bread-crumb-content">
                      未受領
                      <Badge
                        className="ml-1 roboto-mono"
                        count={99}
                        style={{ backgroundColor: RED_COLOR, boxShadow: 'none' }}
                      ></Badge>
                    </span>
                  </Breadcrumb.Item>
                </Breadcrumb>

                {/* フリー検索 */}
                <Input
                  className="free-search mr-2"
                  placeholder="フリー検索"
                  prefix={<span className="material-symbols-outlined">search</span>}
                />
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Space>
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

        {/* メインコンテンツ・Main Content */}
        <div className="item">
          <Table
            className="clickable-table"
            tableLayout="fixed"
            model="unclaimedFundingList"
            metaData={metaData}
            contextButtons={[MailButton]}
            Detail={
              <Detail
                activeKey={DETAIL_KEY_MAP.DONATION}
                data={{ donation_id: 1 }}
                viewMode={DETAIL_MODE}
              />
            } // 詳細ページ
            TableName={'未受領の寄付一覧'}
            showDownLoad={false}
            ExtraTitle={<Swap />}
            contextDropdownItems={metaData.menuItems} //　選択時のメニュー
          />
        </div>
      </PageLayout>
    </>
  );
};

export default FundingPage;
