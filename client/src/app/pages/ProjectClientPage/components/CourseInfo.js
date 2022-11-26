import { CourseInfoStyle } from './CourseInfo.style';
import { Card, Row, Col, Button, Select, Form, Input, DatePicker } from 'antd';

const CourseInfo = () => {
  return (
    <CourseInfoStyle>
      <Row>
        <Col span={24} className="mb-5">
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={24} className="mb-5">
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={24} className="mb-5">
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={24} className="mb-5">
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </CourseInfoStyle>
  );
};

export default CourseInfo;
