import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminLayout from 'app/components/Layout/AdminLayout';

import OrganizationPage from 'app/pages/AdminPages/OrganizationPage';
import NewsPage from 'app/pages/AdminPages/NewsPage';
import DonationPage from 'app/pages/AdminPages/DonationPage';
import RecurringPage from 'app/pages/AdminPages/RecurringPage';
import LogPage from 'app/pages/AdminPages/LogPage';

const AdminPage = () => {
  const { path, ...rest } = useRouteMatch();
  console.log('[AdminPage] path', path, rest);
  return (
    <Switch>
      <AdminLayout>
        <Route path={`${path}/organization`}>
          <OrganizationPage />
        </Route>
        <Route path={`${path}/news`}>
          <NewsPage />
        </Route>
        <Route path={`${path}/donations`}>
          <DonationPage />
        </Route>
        <Route path={`${path}/recurring`}>
          <RecurringPage />
        </Route>
        <Route path={`${path}/using_log`}>
          <LogPage />
        </Route>
      </AdminLayout>
    </Switch>
  );
};

export default AdminPage;
