import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './mockData';
import Detail, { DETAIL_KEY_MAP } from 'app/pages/SupporterPage/components/Detail';
import { SearchOutlined, MailOutlined, EllipsisOutlined } from '@ant-design/icons';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Input, Row, Col, Space, Switch, Badge } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';

import './Models/index';

const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="ml-5"
      icon={<MailOutlined />}
      onClick={() => {
        console.log('selectedRowKeys', selectedRowKeys);
      }}
    >
      {'メールを送る'}
    </Button>
  );
};

const contextDropdownItems = metaData.menuItems;

const ContinuousContractPage = () => {
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
                    <CachedIcon style={{ fontSize: '32px' }} />
                    <span className="ml-1 page-title">{'継続契約'}</span>
                  </span>
                </Col>
                <Col className="mr-2">
                  <Input
                    className="free-search"
                    placeholder="フリーワード検索"
                    prefix={<SearchOutlined />}
                  />
                </Col>
                <Col>
                  <Button
                    className="filter-button"
                    icon={<FilterAltIcon />}
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
                <Badge
                  style={{ backgroundColor: '#C72A32' }}
                  className="ml-1 display-inline-flex pb-1"
                  count={99}
                ></Badge>
                <span>{'再決済待ちのレコードのみを表示'}</span>
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
            TableName="領収書一覧"
            model="continuousContractList"
            metaData={metaData}
            Detail={<Detail activeKey={DETAIL_KEY_MAP.RECURRING} />}
            contextButtons={[MailButton]}
            contextDropdownItems={contextDropdownItems}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default ContinuousContractPage;
