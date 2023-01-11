import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminLayout from 'app/components/Layout/AdminLayout';

import OrganizationPage from 'app/pages/AdminPages/OrganizationPage';

const AdminPage = () => {
  const { path, ...rest } = useRouteMatch();
  console.log('[AdminPage] path', path, rest);
  return (
    <Switch>
      <AdminLayout>
        <Route path={`${path}/organization`}>
          <OrganizationPage />
        </Route>
      </AdminLayout>
    </Switch>
  );
};

export default AdminPage;
