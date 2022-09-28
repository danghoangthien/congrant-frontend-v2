import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ReceivedTable from './components/ReceivedTable';
import { FundingPageLayout } from './FundingPage.style';

const FundingPage = ({ match }): JSX.Element => {
  const { t } = useTranslation();

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
      <Switch></Switch>
      <FundingPageLayout>
        <div className="item">
          <ReceivedTable model="receivedFundingList" />
        </div>
      </FundingPageLayout>
    </>
  );
};

export default FundingPage;
