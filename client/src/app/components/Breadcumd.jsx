import { Breadcrumb, Space } from 'antd';
import { Link } from 'react-router-dom';
import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const Breadcumb = ({
  active,
  data = [],
  separator = <span style={{ verticalAlign: 'top', color: TEXT_GRAY_COLOR }}>/</span>,
  style = null,
}) => {
  const breadCumdClassName = style === 'button' ? 'bread-crumb' : '';
  const breadCumdContentClassName = style === 'button' ? 'bread-crumb-content' : '';
  const breadCumdSeparator = style === 'button' ? null : separator;
  const breadCumdActiveStyle = style === 'button' ? null : { color: 'rgba(0, 0, 0, 0.5)' };

  return (
    <Breadcrumb
      style={{ display: 'flex' }}
      className={breadCumdClassName}
      separator={breadCumdSeparator}
    >
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
