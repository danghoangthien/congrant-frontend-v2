/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// STYLE
import { GlobalStyle } from '../styles/global-styles';
// PAGE
import AppPage from './pages/AppPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ProjectClientPage from './pages/ProjectClientPage';
import PaymentPage from './pages/PaymentPage';
// OTHER
import { useTranslation } from 'react-i18next';
import ScrollToTop from 'app/components/ScrollToTop';
import IframeBoxPage from './pages/ProjectClientPage/IframeBoxPage';

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
        <ScrollToTop>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/project_iframe/client_name/:id'}>
              <IframeBoxPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/project/client_name/:id/:tabId'}>
              <ProjectClientPage />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/payment/:id'}>
              <PaymentPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/app'}>
              <AppPage />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}
