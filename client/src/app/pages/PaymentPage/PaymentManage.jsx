import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Stripe from './Stripe';
import StripeDetail from './StripeDetail';
import Telecom from './Telecom';

const PaymentPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Switch>
        <Route exact path={`${path}/stripe`} component={Stripe} />
        <Route exact path={`${path}/telecom`} component={Telecom} />
        <Route path={`${path}/stripe/:yyyymm`} component={StripeDetail} />
      </Switch>
    </>
  );
};

export default PaymentPage;
