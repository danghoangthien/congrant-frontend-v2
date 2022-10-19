/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import AppLayout from 'app/components/Layout';

import HomePage from './pages/HomePage';
import FundingPage from './pages/FundingPage';
import EditorPage from './pages/EditorPage';
import SupporterPage from './pages/SupporterPage';
import SupporterNamingPage from './pages/SupporterPage/Naming';
import SupporterNamingDetailPage from './pages/SupporterPage/NamingDetail';
import GroupSupporterPage from './pages/GroupSupporterPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { useTranslation } from 'react-i18next';
import CkeditorPage from './pages/CkeditorPage';

export function App() {
  const { i18n } = useTranslation();
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - Congrant"
          defaultTitle="Congrant"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A Congrant application." />
        </Helmet>
        <Switch>
          <AppLayout>
            <Route path={process.env.PUBLIC_URL + '/home'}>
              <HomePage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/funding'}>
              <FundingPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/supporter'}>
              <SupporterPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/supporter-naming'}>
              <SupporterNamingPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/supporter-naming-detail'}>
              <SupporterNamingDetailPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/group-supporter'}>
              <GroupSupporterPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/editor'}>
              <EditorPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/ckeditor'}>
              <CkeditorPage />
            </Route>
          </AppLayout>
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
