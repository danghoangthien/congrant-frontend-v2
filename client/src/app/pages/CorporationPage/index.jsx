import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './mockData';

import { Button, Input, Row, Col, Badge, Space, Dropdown, Menu } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Detail, { DETAIL_KEY_MAP } from '../IndividualPage/components/Detail';
import AddAttribute from './components/AddAttribute';

import AddSupporter from './components/AddSupporter';
// MODEL
import './Models/index';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';

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
          <Link to="/corporations-bulk-upload">
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

const CorporationPage = () => {
  const url = window.location.pathname?.split('/');
  const [filterOpen, setFilterOpen] = useState(false);
  const dispatch = useDispatch();
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'法人サポーター'}</title>
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
                    <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>
                      domain
                    </span>
                    <span className="ml-2">{'法人サポーター'}</span>
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
                <Link to={`/individuals-naming`}>
                  <Button>
                    <span>{'名寄せ候補'}</span>
                    <Badge
                      className="ml-1 display-inline-flex pb-1"
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
        <div className="item">
          <Filters open={filterOpen} />
        </div>
        <div className="item">
          <Table
            tableLayout="fixed"
            TableName="法人サポーター一覧"
            model="groupSupporterList"
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

export default CorporationPage;
