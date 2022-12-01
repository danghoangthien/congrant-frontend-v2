/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { GlobalStyle } from '../styles/global-styles';

import AppLayout from 'app/components/Layout';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterCompletePage from './pages/LoginPage/Complete';
import RegisterReviewPage from './pages/VerificationPage';
import RegisterStepsPage from './pages/VerificationPage/Steps';
import VerificationConfirmationPage from './pages/VerificationPage/Confirmation';
import VerificationCompletePage from './pages/VerificationPage/Complete';
import EmailVerifyPage from './pages/LoginPage/EmailVerify';
import DonationPage from './pages/DonationPage';
import DonationBulkUploadPage from './pages/DonationPage/BulkUpload';
import EditorPage from './pages/EditorPage';
import BasicSettingsPage from './pages/BasicSettingsPage';
import CorporationSettingPage from './pages/CorporationSettingPage';
import IndividualSettingsPage from './pages/IndividualSettingsPage';
import IndividualPage from './pages/IndividualPage';
import IndividualBulkUpload from './pages/IndividualPage/BulkUpload';
import IndividualNamingPage from './pages/IndividualPage/Naming';
import IndividualNamingDetailPage from './pages/IndividualPage/NamingDetail';
import CorporationPage from './pages/CorporationPage';
import CorporationBulkUpload from './pages/CorporationPage/BulkUpload';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ReceiptPage from './pages/ReceiptPage';
import ReceiptBulkPage from './pages/ReceiptBulkPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ReccuringPage from './pages/ReccuringPage';
import ProjectClientPage from './pages/ProjectClientPage';
import PaymentPage from './pages/PaymentPage';
import PaymentManagePage from './pages/PaymentPage/PaymentManage';
import { useTranslation } from 'react-i18next';
import CkeditorPage from './pages/CkeditorPage';
import ScrollToTop from 'app/components/ScrollToTop';

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
            {/* [FO_003] メールアドレス認証 */}
            <Route exact path={process.env.PUBLIC_URL + '/register/verify_email'}>
              <EmailVerifyPage />
            </Route>
            {/* [FO_004] コングラントID登録 */}
            <Route exact path={process.env.PUBLIC_URL + '/register/complete'}>
              <RegisterCompletePage />
            </Route>
            {/* [FO_005] 利用審査 */}
            <Route exact path={process.env.PUBLIC_URL + '/verification'}>
              <RegisterReviewPage />
            </Route>
            {/* [FO_006] 利用審査 / 団体情報 */}
            <Route exact path={process.env.PUBLIC_URL + '/verification/organisation'}>
              <RegisterStepsPage />
            </Route>
            {/* [FO_010] 利用審査 / 確認画面  */}
            <Route exact path={process.env.PUBLIC_URL + '/verification/confirmation'}>
              <VerificationConfirmationPage />
            </Route>
            {/* [FO_011] 利用審査 / 審査開始画面 */}
            <Route exact path={process.env.PUBLIC_URL + '/verification/complete'}>
              <VerificationCompletePage />
            </Route>
            {/* [FO_001] ログイン */}
            <Route path={process.env.PUBLIC_URL + '/login'}>
              <LoginPage />
            </Route>
            {/* [FO_002] お試し登録 */}
            <Route path={process.env.PUBLIC_URL + '/register'}>
              <LoginPage />
            </Route>

            <Route exact path={process.env.PUBLIC_URL + '/project/client_name/:id'}>
              <ProjectClientPage />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/payment'}>
              <PaymentPage />
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
              <Route path={process.env.PUBLIC_URL + '/donations-bulk-upload'}>
                <DonationBulkUploadPage />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/reccurings'}>
                <ReccuringPage />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/individuals'}>
                <IndividualPage />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/individuals-bulk-upload'}>
                <IndividualBulkUpload />
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
              <Route path={process.env.PUBLIC_URL + '/corporations-bulk-upload'}>
                <CorporationBulkUpload />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/receipts'}>
                <ReceiptPage />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/receipts-bulk-create'}>
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
              <Route path={process.env.PUBLIC_URL + '/payments'}>
                <PaymentManagePage />
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
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}
