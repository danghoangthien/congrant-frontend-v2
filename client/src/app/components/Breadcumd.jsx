import { Breadcrumb, Space } from 'antd';
import { Link } from 'react-router-dom';

// Example BREADCUMD_DATA
// const BREADCUMD_DATA = [
//   {
//     id: 1,
//     title: 'Stripe決済',
//     uri: '/payments/stripe'
//   },
//   {
//     id:2,
//     title: 'テレコム決済',
//     uri: '/payments/telecom'
//   }
// ]
const Breadcumb = ({ active, data = [], separator = '/' }) => {
  return (
    <Breadcrumb separator={separator}>
      {data.map(breadcumb => (
        <Breadcrumb.Item>
          {active === breadcumb.id ? (
            <Space>{breadcumb.title}</Space>
          ) : (
            <Link to={breadcumb.uri}>
              <Space style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{breadcumb.title}</Space>
            </Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcumb;
