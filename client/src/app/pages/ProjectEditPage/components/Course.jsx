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
          <Col span={24}>
            <span className="page-title">{'コース'}</span>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col span={24}>
            <CourseTable />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={24}>
            <AddCourse />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Course;
