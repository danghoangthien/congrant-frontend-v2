import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Received from './Received';
import Unclaimed from './Unclaimed';

const DonationPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Switch>
        <Route exact path={`${path}/unpaid`} component={Unclaimed} />
        <Route path={`${path}/`} component={Received} />
      </Switch>
    </>
  );
};

export default DonationPage;
