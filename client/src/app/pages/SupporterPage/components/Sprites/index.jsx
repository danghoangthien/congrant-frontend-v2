import { Row, Col } from 'antd';

import { CopyOutlined } from '@ant-design/icons';

export const BoldLabel = ({ label }) => {
  return <span className="bold">{label}</span>;
};

export const CopiableText = ({ children }) => {
  return (
    <Row className="mt-2">
      <Col sm={24} md={12} lg={12}>
        {children}
      </Col>
      <Col type="flex" align="right" sm={24} md={12} lg={12}>
        <CopyOutlined
          className="display-inline-flex"
          style={{ color: '#c0c0c0' }}
          onClick={() => {}}
        />
      </Col>
    </Row>
  );
};
