import { Row, Col, Tag } from 'antd';

import styled from 'styled-components/macro';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const PageEdit = () => {
  return (
    <>
      <div className="item">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'ページ編集'}</span>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PageEdit;
