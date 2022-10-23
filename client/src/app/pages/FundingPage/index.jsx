import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Received from './Received';
import Unclaimed from './Unclaimed';

const FundingPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Switch>
        <Route path={`${path}`} component={Received} />
        <Route path={`${path}/unclaimed`} component={Unclaimed} />
      </Switch>
    </>
  );
};

export default FundingPage;
