import { Row, Col, Tag } from 'antd';
import styled from 'styled-components/macro';
import LoginHistoryTable from './LoginHistoryTable';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const LoginHistory = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'ログイン履歴'}</span>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={12} md={12} lg={12}>
            <LoginHistoryTable />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginHistory;
