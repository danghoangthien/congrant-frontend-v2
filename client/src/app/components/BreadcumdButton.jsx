import { Breadcrumb, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { RED_COLOR } from 'styles/StyleConstants';

// Example BREADCUMD_DATA
// const BREADCUMD_DATA = [
//   {
//     id: 1,
//     name: 'Stripe決済',
//     uri: '/payments/stripe'
//   },
//   {
//     id:2,
//     name: 'テレコム決済',
//     uri: '/payments/telecom'
//   }
// ]
const Breadcumb = ({ active, data }) => {
  return (
    <Breadcrumb className="bread-crumb" separator="">
      {data.map(breadcumb => (
        <Breadcrumb.Item>
          {active === breadcumb.id ? (
            <span className="bread-crumb-content">{breadcumb.name}</span>
          ) : (
            <Link className="bread-crumb-content" to={breadcumb.uri}>
              {breadcumb.name}
              <Badge
                className="ml-1 roboto-mono"
                count={99}
                style={{ backgroundColor: RED_COLOR, boxShadow: 'none' }}
              ></Badge>
            </Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcumb;
