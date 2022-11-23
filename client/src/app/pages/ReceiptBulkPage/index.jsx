import { Switch, Route, useRouteMatch } from 'react-router-dom';

import History from './History';
import Create from './Create';

const RceiptBulkPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Switch>
        <Route exact path={`${path}/history`} component={History} />
        <Route path={`${path}`} component={Create} />
      </Switch>
    </>
  );
};

export default RceiptBulkPage;
