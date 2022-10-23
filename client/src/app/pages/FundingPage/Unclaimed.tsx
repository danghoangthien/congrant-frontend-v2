import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button, Badge, Input, Row } from 'antd';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import { PayCircleOutlined, SearchOutlined, MailOutlined } from '@ant-design/icons';
import { FundingPageLayout } from './FundingPage.style';
import * as metaData from './mockData';
import './Models/unclaimed';

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

const FundingPage = (): JSX.Element => {
  const [filterOpen] = useState(false);

  const renderPageTitle = (): JSX.Element => {
    return (
      <>
        <Helmet>
          <title>{'Funding Unclaimed'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <FundingPageLayout>
        <div className="item mx-8 my-8">
          <Row align="middle">
            <div className="page-title">
              <PayCircleOutlined className="display-inline-flex" />
              <span className="ml-1">{'寄付決済'}</span>
            </div>
            <div className="switch-btn ml-8">
              <Link className="sidebar-link" to={`/funding/received`}>
                <Button>
                  <span>{'受領済み'}</span>
                  <Badge className="ml-1 display-inline-flex pb-1" count={88}></Badge>
                </Button>
              </Link>

              <Button className="active" type="primary">
                <span>{'未受領'}</span>
              </Button>
            </div>
            <Input
              className="ml-3 free-search"
              placeholder="フリーワード検索"
              prefix={<SearchOutlined />}
            />
          </Row>
        </div>
        <div className="item">
          <Filters open={filterOpen} />
        </div>
        <div className="item">
          <Table
            model="unclaimedFundingList"
            metaData={metaData}
            selectedItemsActions={[MailButton]}
          />
        </div>
      </FundingPageLayout>
    </>
  );
};

export default FundingPage;
