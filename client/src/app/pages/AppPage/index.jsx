import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AppLayout from 'app/components/Layout';

import HomePage from 'app/pages/HomePage';
import LoginPage from 'app/pages/LoginPage';
import RegisterCompletePage from 'app/pages/LoginPage/Complete';
import RegisterReviewPage from 'app/pages/VerificationPage';
import RegisterStepsPage from 'app/pages/VerificationPage/Steps';
import VerificationConfirmationPage from 'app/pages/VerificationPage/Confirmation';
import VerificationCompletePage from 'app/pages/VerificationPage/Complete';
import EmailVerifyPage from 'app/pages/LoginPage/EmailVerify';
import DonationPage from 'app/pages/DonationPage';
import DonationBulkUploadPage from 'app/pages/DonationPage/BulkUpload';
import EditorPage from 'app/pages/EditorPage';
import BasicSettingsPage from 'app/pages/BasicSettingsPage';
import CorporationSettingPage from 'app/pages/CorporationSettingPage';
import IndividualSettingsPage from 'app/pages/IndividualSettingsPage';
import IndividualPage from 'app/pages/IndividualPage';
import IndividualBulkUpload from 'app/pages/IndividualPage/BulkUpload';
import IndividualNamingPage from 'app/pages/IndividualPage/Naming';
import IndividualNamingDetailPage from 'app/pages/IndividualPage/NamingDetail';
import CorporationPage from 'app/pages/CorporationPage';
import CorporationBulkUpload from 'app/pages/CorporationPage/BulkUpload';
import ProjectPage from 'app/pages/ProjectPage';
import ProjectDetailPage from 'app/pages/ProjectDetailPage';
import ReceiptPage from 'app/pages/ReceiptPage';
import CreateReceipt from 'app/pages/ReceiptPage/CreateReceipt';
import CreateReceiptHistory from 'app/pages/ReceiptPage/History';
import ReceiptHistoryDetail from 'app/pages/ReceiptPage/HistoryDetail';
import ReceiptBulkPage from 'app/pages/ReceiptBulkPage';
import ReccuringPage from 'app/pages/ReccuringPage';
import CkeditorPage from 'app/pages/CkeditorPage';
import PaymentManagePage from 'app/pages/PaymentPage/PaymentManage';
import LearningPage from 'app/pages/LearningPage';
import DiscountPage from 'app/pages/DiscountPage';

const AppPage = () => {
  const { path, ...rest } = useRouteMatch();
  console.log('[AppPage] path', path, rest);
  return (
    <Switch>
      {/* [FO_003] メールアドレス認証 */}
      <Route exact path={`${path}/register/verify_email`}>
        <EmailVerifyPage />
      </Route>
      {/* [FO_004] コングラントID登録 */}
      <Route exact path={`${path}/register/complete`}>
        <RegisterCompletePage />
      </Route>
      {/* [FO_005] 利用審査 */}
      <Route exact path={`${path}/verification`}>
        <RegisterReviewPage />
      </Route>
      {/* [FO_006] 利用審査 / 団体情報 */}
      <Route exact path={`${path}/verification/organisation`}>
        <RegisterStepsPage />
      </Route>
      {/* [FO_010] 利用審査 / 確認画面  */}
      <Route exact path={`${path}/verification/confirmation`}>
        <VerificationConfirmationPage />
      </Route>
      {/* [FO_011] 利用審査 / 審査開始画面 */}
      <Route exact path={`${path}/verification/complete`}>
        <VerificationCompletePage />
      </Route>
      {/* [FO_001] ログイン */}
      <Route path={`${path}/login`}>
        <LoginPage />
      </Route>
      {/* [FO_002] お試し登録 */}
      <Route path={`${path}/register`}>
        <LoginPage />
      </Route>
      <Route path={`${path}/learning`}>
        <LearningPage />
      </Route>
      <AppLayout>
        <Route path={`${path}/home`}>
          <HomePage />
        </Route>
        <Route path={`${path}/projects/:id`}>
          <ProjectDetailPage />
        </Route>
        <Route exact path={`${path}/projects`}>
          <ProjectPage />
        </Route>
        <Route path={`${path}/donations`}>
          <DonationPage />
        </Route>
        <Route path={`${path}/donations-bulk-upload`}>
          <DonationBulkUploadPage />
        </Route>
        <Route path={`${path}/reccurings`}>
          <ReccuringPage />
        </Route>
        <Route path={`${path}/individuals`}>
          <IndividualPage />
        </Route>
        <Route path={`${path}/individuals-bulk-upload`}>
          <IndividualBulkUpload />
        </Route>
        <Route path={`${path}/individuals-naming`}>
          <IndividualNamingPage />
        </Route>
        <Route path={`${path}/individuals-naming-detail`}>
          <IndividualNamingDetailPage />
        </Route>
        <Route path={`${path}/corporations`}>
          <CorporationPage />
        </Route>
        <Route path={`${path}/corporations-bulk-upload`}>
          <CorporationBulkUpload />
        </Route>
        <Route path={`${path}/receipts`}>
          <ReceiptPage />
        </Route>
        <Route path={`${path}/receipts-create`}>
          <CreateReceipt />
        </Route>
        <Route path={`${path}/receipts-create-history`} component={CreateReceiptHistory} />
        <Route path={`${path}/receipts-create-history-detail`} component={ReceiptHistoryDetail} />
        <Route path={`${path}/receipts-bulk-create`}>
          <ReceiptBulkPage />
        </Route>
        <Route path={`${path}/settings`}>
          <BasicSettingsPage />
        </Route>
        <Route path={`${path}/corporation-settings`}>
          <CorporationSettingPage />
        </Route>
        <Route path={`${path}/individuals-settings`}>
          <IndividualSettingsPage />
        </Route>
        <Route path={`${path}/payment-details`}>
          <PaymentManagePage />
        </Route>
        <Route path={`${path}/discount`}>
          <DiscountPage />
        </Route>
        <Route path={`${path}/editor`}>
          <EditorPage />
        </Route>
        <Route path={`${path}/ckeditor`}>
          <CkeditorPage />
        </Route>
      </AppLayout>
    </Switch>
  );
};

export default AppPage;
