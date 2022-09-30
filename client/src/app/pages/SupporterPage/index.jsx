import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Received from './Received';
import Unclaimed from './Unclaimed';

const SupporterPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Switch>
        <Route path={`${path}/received`} component={Received} />
        <Route path={`${path}/unclaimed`} component={Unclaimed} />
      </Switch>
    </>
  );
};

export default SupporterPage;
