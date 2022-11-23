import { Row, Col } from 'antd';
import LoginHistoryTable from './LoginHistoryTable';

const LoginHistory = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'ログイン履歴'}</div>
      </Col>
      <Col span={24}>
        <LoginHistoryTable />
      </Col>
    </Row>
  );
};

export default LoginHistory;
