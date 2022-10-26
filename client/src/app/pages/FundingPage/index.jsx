import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Received from './Received';
import Unclaimed from './Unclaimed';

const FundingPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Switch>
        <Route path={`${path}/unclaimed`} component={Unclaimed} />
        <Route path={`${path}`} component={Received} />
      </Switch>
    </>
  );
};

export default FundingPage;
