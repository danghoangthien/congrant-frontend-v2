import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SupporterTable from './components/Table';
import Filters from './components/Filters';
import { PayCircleOutlined, SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Badge, Input, Row, Radio } from 'antd';
import { SupporterPageLayout } from './components/SupporterPage.style';

const SupporterPage = (): JSX.Element => {
  const url = window.location.pathname?.split('/');
  const [filterOpen, setFilterOpen] = useState(false);

  const renderPageTitle = (): JSX.Element => {
    return (
      <>
        <Helmet>
          <title>{'Supporter management'}</title>
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
          <Row align="middle">
            <div className="page-title">
              <PayCircleOutlined className="display-inline-flex" />
              <span className="ml-1">{'個人サポーター'}</span>
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
        </div>
        <div className="item">
          <Filters open={filterOpen} />
        </div>
        <div className="item">
          <SupporterTable model="supporterList" />
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default SupporterPage;
