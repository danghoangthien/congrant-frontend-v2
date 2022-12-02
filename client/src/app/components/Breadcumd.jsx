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
const Breadcumb = ({ active, data = [], separator = '/', style = null }) => {
  const breadCumdClassName = style === 'button' ? 'bread-crumb' : '';
  const breadCumdContentClassName = style === 'button' ? 'bread-crumb-content' : '';
  const breadCumdSeparator = style === 'button' ? null : separator;
  const breadCumdActiveStyle = style === 'button' ? null : { color: 'rgba(0, 0, 0, 0.5)' };
  return (
    <Breadcrumb className={breadCumdClassName} separator={breadCumdSeparator}>
      {data
        .filter(el => el)
        .map(breadcumb => (
          <Breadcrumb.Item>
            {active === breadcumb.id ? (
              <Space className={breadCumdContentClassName}>{breadcumb.title}</Space>
            ) : (
              <Link className={breadCumdContentClassName} to={breadcumb.uri}>
                <Space style={breadCumdActiveStyle}>{breadcumb.title}</Space>
              </Link>
            )}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};

export default Breadcumb;
