import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Layout, Button, Space } from 'antd';
import Summary from './Summary';
import Funding from './Funding';
import Course from './Course';
import Activity from './Activity';
import ActivityEdit from './ActivityEdit';
import Comment from './Comment';
import ProjectEditPage from './../ProjectEditPage';

const { Header, Content } = Layout;

const DetailPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Layout>
        <Content>
          <Switch>
            <Route path={`${path}/summary`} component={Summary} />
            <Route path={`${path}/funding`} component={Funding} />
            <Route path={`${path}/course`} component={Course} />
            <Route path={`${path}/activities/:id`} component={ActivityEdit} />
            <Route path={`${path}/activities`} component={Activity} />
            <Route path={`${path}/comments`} component={Comment} />
            <Route path={`${path}/edit`} component={ProjectEditPage} />
            <Route path={`/projects/new`} component={ProjectEditPage} />
          </Switch>
        </Content>
      </Layout>
    </>
  );
};

export default DetailPage;
