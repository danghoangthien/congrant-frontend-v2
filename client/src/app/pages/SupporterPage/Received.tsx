import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ReceivedTable from './components/ReceivedTable';
import Filters from './components/Filters';
import { PayCircleOutlined, SearchOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Badge, Input, Row, Radio } from 'antd';
import { SupporterPageLayout } from './SupporterPage.style';

const SupporterPage = (): JSX.Element => {
  const url = window.location.pathname?.split('/');

  const renderPageTitle = (): JSX.Element => {
    return (
      <>
        <Helmet>
          <title>{'Supporter Received'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <SupporterPageLayout>
        <div className="item mx-8 my-8">
          <Row justify="space-between">
            <Row align="middle">
              <div className="page-title">
                <PayCircleOutlined className="display-inline-flex" />
                <span className="ml-1">{'個人サポーター'}</span>
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
            <Row align="middle">
              <Button className="ml-4">
                <span>{'名寄せ候補'}</span>
                <Badge className="ml-1 display-inline-flex pb-1" count={99}></Badge>
              </Button>
              <span className="line ml-4 mr-4"></span>
              <Button icon={<PlusOutlined />} type="primary">
                {'新規追加'}
              </Button>
            </Row>
          </Row>
        </div>
        <div className="item">
          <Filters />
        </div>
        <div className="item">
          <ReceivedTable model="receivedSupporterList" />
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default SupporterPage;
