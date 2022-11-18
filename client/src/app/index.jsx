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
import LoginPage from './pages/LoginPage';
import VerificationPage from './pages/VerificationPage';
import RegisterCompletePage from './pages/LoginPage/Complete';
import RegisterReviewPage from './pages/VerificationPage/Review';
import RegisterStepsPage from './pages/VerificationPage/Steps';
import VerificationConfirmationPage from './pages/VerificationPage/Confirmation';
import VerificationCompletePage from './pages/VerificationPage/Complete';
import EmailVerifyPage from './pages/LoginPage/EmailVerify';
import DonationPage from './pages/DonationPage';
import EditorPage from './pages/EditorPage';
import BasicSettingsPage from './pages/BasicSettingsPage';
import CorporationSettingPage from './pages/CorporationSettingPage';
import IndividualSettingsPage from './pages/IndividualSettingsPage';
import IndividualPage from './pages/IndividualPage';
import IndividualNamingPage from './pages/IndividualPage/Naming';
import IndividualNamingDetailPage from './pages/IndividualPage/NamingDetail';
import CorporationPage from './pages/CorporationPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ReceiptPage from './pages/ReceiptPage';
import ReceiptBulkPage from './pages/ReceiptBulkPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ReccuringPage from './pages/ReccuringPage';

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
          <Route path={process.env.PUBLIC_URL + '/login'}>
            <LoginPage />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/register'}>
            <LoginPage />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/register/complete'}>
            <RegisterCompletePage />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/register/verify-email'}>
            <EmailVerifyPage />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/verification'}>
            <VerificationPage />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/register-review'}>
            <RegisterReviewPage />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/register-start'}>
            <RegisterStepsPage />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/verification/confirmation'}>
            <VerificationConfirmationPage />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/verification/complete'}>
            <VerificationCompletePage />
          </Route>

          <AppLayout>
            <Route path={process.env.PUBLIC_URL + '/home'}>
              <HomePage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/projects/:id'}>
              <ProjectDetailPage />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/projects'}>
              <ProjectPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/donations'}>
              <DonationPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/reccurings'}>
              <ReccuringPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/individuals'}>
              <IndividualPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/individuals-naming'}>
              <IndividualNamingPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/individuals-naming-detail'}>
              <IndividualNamingDetailPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/corporations'}>
              <CorporationPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/receipts'}>
              <ReceiptPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/receipts-bulk'}>
              <ReceiptBulkPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/settings'}>
              <BasicSettingsPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/corporation-settings'}>
              <CorporationSettingPage />
            </Route>
            <Route path={process.env.PUBLIC_URL + '/individuals-settings'}>
              <IndividualSettingsPage />
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
