import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import AddFunding from './components/AddFunding';
import Detail, { DETAIL_KEY_MAP } from '../SupporterPage/components/Detail';
import {
  PayCircleOutlined,
  SearchOutlined,
  FilterOutlined,
  MailOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Button, Badge, Input, Row, Col, Space } from 'antd';
import { FundingPageLayout } from './FundingPage.style';
import * as metaData from './mockDataReceived';
import './Models/received';

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

const FundingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'Funding Received'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <FundingPageLayout>
        <div className="item mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <div className="page-title">
                  <PayCircleOutlined className="display-inline-flex" />
                  <span className="ml-1">{'寄付決済'}</span>
                </div>
                <div className="switch-btn ml-8">
                  <Button className="active" type="primary">
                    {'受領済み'}
                  </Button>
                  <Link className="sidebar-link" to={`/donations/unclaimed`}>
                    <Button>
                      <span>{'未受領'}</span>
                      <Badge className="ml-1 display-inline-flex pb-1" count={99}></Badge>
                    </Button>
                  </Link>
                </div>
                <Input
                  className="ml-3 free-search"
                  placeholder="フリーワード検索"
                  prefix={<SearchOutlined />}
                />
                <Button
                  className="ml-1"
                  icon={<FilterOutlined />}
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  {'フィルタ'}
                </Button>
              </Row>
            </Col>
            {/* 右の部分・Right Part */}
            <Col>
              <Space>
                <AddFunding />
                <Button icon={<EllipsisOutlined />} />
              </Space>
            </Col>
          </Row>
        </div>
        <div className="item">
          <Filters open={filterOpen} />
        </div>
        <div className="item">
          <Table
            model="receivedFundingList"
            metaData={metaData}
            contextButtons={[MailButton]}
            Detail={<Detail activeKey={DETAIL_KEY_MAP.DONATION} />}
            TableName={'受領済みの寄付一覧'}
          />
        </div>
      </FundingPageLayout>
    </>
  );
};

export default FundingPage;
