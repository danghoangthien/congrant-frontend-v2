import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminLayout from 'app/components/Layout/AdminLayout';

import OrganizationPage from 'app/pages/AdminPages/OrganizationPage';
import OrganizationDetailPage from 'app/pages/AdminPages/OrganizationPage/Detail';
import NewsPage from 'app/pages/AdminPages/NewsPage';
import NewsDetailPage from 'app/pages/AdminPages/NewsPage/NewsDetail';
import DonationPage from 'app/pages/AdminPages/DonationPage';
import RecurringPage from 'app/pages/AdminPages/RecurringPage';
import LogPage from 'app/pages/AdminPages/LogPage';
import MailLogPage from 'app/pages/AdminPages/MailLogPage';
import Login from 'app/pages/AdminPages/LoginPage/Login';
import EmailVerify from 'app/pages/AdminPages/LoginPage/EmailVerify';
import ContractPlanPage from 'app/pages/AdminPages/ContractPlanPage';
import ProjectPage from 'app/pages/AdminPages//ProjectPage';
import ManagementUserPage from 'app/pages/AdminPages//ManagementUserPage';
import UserPage from 'app/pages/AdminPages//UserPage';
import AmountPage from 'app/pages/AdminPages/AmountPage';
import DepositPage from 'app/pages/AdminPages/AmountPage/Deposit';

const AdminPage = () => {
  const { path, ...rest } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/verify`}>
        <EmailVerify />
      </Route>
      <AdminLayout>
        <Route path={`${path}/organization/:id`}>
          <OrganizationDetailPage />
        </Route>
        <Route exact path={`${path}/organization`}>
          <OrganizationPage />
        </Route>
        <Route path={`${path}/project`}>
          <ProjectPage />
        </Route>
        <Route path={`${path}/management-user`}>
          <ManagementUserPage />
        </Route>
        <Route path={`${path}/user`}>
          <UserPage />
        </Route>
        <Route path={`${path}/news/:id`}>
          <NewsDetailPage />
        </Route>
        <Route exact path={`${path}/news`}>
          <NewsPage />
        </Route>
        <Route path={`${path}/donations`}>
          <DonationPage />
        </Route>
        <Route path={`${path}/contract-plan`}>
          <ContractPlanPage />
        </Route>
        <Route path={`${path}/recurring`}>
          <RecurringPage />
        </Route>
        <Route path={`${path}/amount`}>
          <AmountPage />
        </Route>
        <Route path={`${path}/amount-deposit`}>
          <DepositPage />
        </Route>
        <Route path={`${path}/using_log`}>
          <LogPage />
        </Route>
        <Route path={`${path}/mail_log`}>
          <MailLogPage />
        </Route>
      </AdminLayout>
    </Switch>
  );
};

export default AdminPage;
