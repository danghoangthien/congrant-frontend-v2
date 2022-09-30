import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ReceivedTable from './components/ReceivedTable';
import Filters from './components/Filters';
import { PayCircleOutlined, SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Badge, Input, Row, Radio } from 'antd';
import { FundingPageLayout } from './FundingPage.style';

const FundingPage = (): JSX.Element => {
  const url = window.location.pathname?.split('/');

  const renderPageTitle = (): JSX.Element => {
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
        <div className="item mx-8 my-8">
          <Row align="middle">
            <div className="page-title">
              <PayCircleOutlined className="display-inline-flex" />
              <span className="ml-1">{'寄付決済'}</span>
            </div>
            <div className="switch-btn ml-8">
              <Button className="active" type="primary">
                {'受領済み'}
              </Button>
              <Button>
                <span>{'未受領'}</span>
                <Badge className="ml-1 display-inline-flex pb-1" count={99}></Badge>
              </Button>
            </div>
            <Input
              className="ml-4 free-search"
              placeholder="フリーワード検索"
              prefix={<SearchOutlined />}
            />
            <Button className="ml-4" icon={<FilterOutlined />}>
              {'フィルタ'}
            </Button>
          </Row>
        </div>
        <div className="item">
          <Filters />
        </div>
        <div className="item">
          <ReceivedTable model="receivedFundingList" />
        </div>
      </FundingPageLayout>
    </>
  );
};

export default FundingPage;
