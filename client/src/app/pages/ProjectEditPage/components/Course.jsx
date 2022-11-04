import { Row, Col, Tag } from 'antd';
import styled from 'styled-components/macro';
import CourseTable from './CourseTable';
import AddCourse from './AddCourse';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const Course = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'コース'}</span>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={12} md={12} lg={12}>
            <CourseTable />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={12} md={12} lg={12}>
            <AddCourse />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Course;
