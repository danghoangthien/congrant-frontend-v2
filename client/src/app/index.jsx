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
import { NotFoundPage } from './pages/NotFoundPage';

import { URL } from 'utils/constant';
import { useTranslation } from 'react-i18next';
import CkeditorPage from './pages/CkeditorPage';
import CkeditorClassicPage from './pages/CkeditorClassicPage';

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
          <Route path={process.env.PUBLIC_URL + '/home'}>
            <AppLayout>
              <HomePage />
            </AppLayout>
          </Route>
          <Route path={process.env.PUBLIC_URL + '/funding'}>
            <AppLayout>
              <FundingPage />
            </AppLayout>
          </Route>
          <Route path={process.env.PUBLIC_URL + '/editor'}>
            <AppLayout>
              <EditorPage />
            </AppLayout>
          </Route>
          <Route path={process.env.PUBLIC_URL + '/ckeditor'}>
            <AppLayout>
              <CkeditorPage />
            </AppLayout>
          </Route>
          {/* <Route path={process.env.PUBLIC_URL + '/ckeditor_classic'}>
            <AppLayout>
              <CkeditorClassicPage />
            </AppLayout>
          </Route> */}
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
