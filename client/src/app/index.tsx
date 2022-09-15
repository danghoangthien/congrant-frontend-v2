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

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

import { URL } from 'utils/constant';
import { useTranslation } from 'react-i18next';

export function App() {
    const { i18n } = useTranslation();
    return (
        <BrowserRouter>
            <Helmet
                titleTemplate="%s - Congrant"
                defaultTitle="Congrant"
                htmlAttributes={{ lang: i18n.language }}
            >
                <meta name="description" content="A Congrant application." />
            </Helmet>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/home'} component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    );
}
