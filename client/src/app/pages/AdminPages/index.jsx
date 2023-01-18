import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminLayout from 'app/components/Layout/AdminLayout';

import OrganizationPage from 'app/pages/AdminPages/OrganizationPage';
import OrganizationDetailPage from 'app/pages/AdminPages/OrganizationPage/Detail';
import NewsPage from 'app/pages/AdminPages/NewsPage';
import NewsDetailPage from 'app/pages/AdminPages/NewsPage/NewsDetail';
import DonationPage from 'app/pages/AdminPages/DonationPage';
import RecurringPage from 'app/pages/AdminPages/RecurringPage';
import ReceiptPage from 'app/pages/AdminPages/ReceiptPage';
import LogPage from 'app/pages/AdminPages/LogPage';
import MailLogPage from 'app/pages/AdminPages/MailLogPage';
import Login from 'app/pages/AdminPages/LoginPage/Login';
import EmailVerify from 'app/pages/AdminPages/LoginPage/EmailVerify';
import AgreementPage from 'app/pages/AdminPages/AgreementPage';
import ProjectPage from 'app/pages/AdminPages//ProjectPage';
import AdminUserPage from 'app/pages/AdminPages//AdminUserPage';
import UserPage from 'app/pages/AdminPages//UserPage';
import TelecomPage from 'app/pages/AdminPages/TelecomPage';
import PaymentPage from 'app/pages/AdminPages/PaymentPage';
import PaymentTemplatePage from 'app/pages/AdminPages/PaymentTemplatePage';
import ChangePaymentDate from 'app/pages/AdminPages/TelecomPage/ChangePaymentDatePage';

const AdminPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login/two-factor-auth`}>
        <EmailVerify />
      </Route>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <AdminLayout>
        {/* 団体 / 登録団体 / 詳細_基本情報・AD_002 */}
        <Route path={`${path}/organisations/:id`}>
          <OrganizationDetailPage />
        </Route>
        {/* 団体 / 登録団体・AD_001 */}
        <Route exact path={`${path}/organisations`}>
          <OrganizationPage />
        </Route>
        {/* プロジェクト */}
        <Route path={`${path}/projects`}>
          <ProjectPage />
        </Route>
        {/* ユーザー / 運営管理ユーザー・US_001 */}
        <Route path={`${path}/admin-users`}>
          <AdminUserPage />
        </Route>
        {/* ユーザー / 利用ユーザー・US_002 */}
        <Route path={`${path}/users`}>
          <UserPage />
        </Route>
        {/* お知らせ / 編集（基本設定）・NE_00２ */}
        <Route path={`${path}/news/:id`}>
          <NewsDetailPage />
        </Route>
        {/* お知らせ・NE_001 */}
        <Route exact path={`${path}/news`}>
          <NewsPage />
        </Route>
        {/* レコード / 寄付決済・RE_001 */}
        <Route path={`${path}/records/donations`}>
          <DonationPage />
        </Route>
        {/* レコード / 継続契約・RE_002 */}
        <Route path={`${path}/records/recurrings`}>
          <RecurringPage />
        </Route>
        {/* レコード / 領収書・RE_003 */}
        <Route path={`${path}/records/receipts`}>
          <ReceiptPage />
        </Route>
        {/* 契約プラン・AG_001 */}
        <Route path={`${path}/agreements`}>
          <AgreementPage />
        </Route>
        {/* テレコム / 金額変更・TE_001 */}
        <Route path={`${path}/telecom/change-amount`}>
          <TelecomPage />
        </Route>
        {/* テレコム / 入金日設定・TE_002 */}
        <Route path={`${path}/telecom/change-payment-date`}>
          <ChangePaymentDate />
        </Route>
        {/* 入金明細 PD_001 */}
        <Route exact path={`${path}/payment-details`}>
          <PaymentPage />
        </Route>
        {/* 入金明細 PM_001 */}
        <Route exact path={`${path}/payment-templates`}>
          <PaymentTemplatePage />
        </Route>
        {/* ログ / アクセス・操作ログ・LOG_001 */}
        <Route path={`${path}/logs`}>
          <LogPage />
        </Route>
        {/* ログ / 通知メールログ・LOG_002 */}
        <Route path={`${path}/mail-logs`}>
          <MailLogPage />
        </Route>
      </AdminLayout>
    </Switch>
  );
};

export default AdminPage;
