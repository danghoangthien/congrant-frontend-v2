import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Summary from './components/Summary';
import Funding from './components/Funding';
import Course from './components/Course';
import ProjectEditPage from './../ProjectEditPage';

const DetailPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Switch>
        <Route path={`${path}/summary`} component={Summary} />
        <Route path={`${path}/funding`} component={Funding} />
        <Route path={`${path}/course`} component={Course} />
        <Route path={`${path}/edit`} component={ProjectEditPage} />
      </Switch>
    </>
  );
};

export default DetailPage;
