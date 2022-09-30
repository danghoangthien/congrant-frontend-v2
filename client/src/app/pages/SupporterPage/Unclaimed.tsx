import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ReceivedTable from './components/ReceivedTable';
import { SupporterPageLayout } from './SupporterPage.style';

const SupporterPage = ({ match }): JSX.Element => {
  const { t } = useTranslation();

  const renderPageTitle = (): JSX.Element => {
    return (
      <>
        <Helmet>
          <title>{'Supporter Unclaimed'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <Switch></Switch>
      <SupporterPageLayout>
        <div className="item">
          <ReceivedTable model="receivedSupporterList" />
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default SupporterPage;
