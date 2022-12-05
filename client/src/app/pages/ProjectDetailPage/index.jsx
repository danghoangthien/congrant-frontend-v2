import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Layout } from 'antd';
import Summary from './Summary';
import Donation from './Donation';
import Course from './Course';
import Blog from './Blog';
import BlogEdit from './BlogEdit';
import Comment from './Comment';
import ProjectEditPage from './../ProjectEditPage';

const { Content } = Layout;

const DetailPage = () => {
  const { path } = useRouteMatch();
  console.log('path', path);
  return (
    <>
      <Layout>
        <Content>
          <Switch>
            <Route path={`${path}/summary`} component={Summary} />
            <Route path={`${path}/donations`} component={Donation} />
            <Route path={`${path}/courses`} component={Course} />
            <Route path={`${path}/blogs/:blogId/edit`} component={BlogEdit} />
            <Route path={`${path}/blogs/new-blog`} component={BlogEdit} />
            <Route path={`${path}/blogs`} component={Blog} />
            <Route path={`${path}/comments`} component={Comment} />
            <Route path={`${path}/edit`} component={ProjectEditPage} />
            <Route path={`/app/projects/new-project`} component={ProjectEditPage} />
          </Switch>
        </Content>
      </Layout>
    </>
  );
};

export default DetailPage;
