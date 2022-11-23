import { Row, Col } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

export const BoldLabel = ({ label }) => {
  return <span className="bold">{label}</span>;
};

export const CopiableText = ({ children }) => {
  return (
    <Row>
      <Col sm={24} md={24} lg={24}>
        {children}
      </Col>
      {/* <Col type="flex" align="right" sm={24} md={12} lg={12}>
        <CopyOutlined
          className="display-inline-flex"
          style={{ color: '#c0c0c0' }}
          onClick={() => {}}
        />
      </Col> */}
    </Row>
  );
};
