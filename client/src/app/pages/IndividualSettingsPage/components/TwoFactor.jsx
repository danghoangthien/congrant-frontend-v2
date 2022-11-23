import { Row, Col, Space } from 'antd';
import TwoFactorRecoveryModal from './TwoFactorRecoveryModal';
import TwoFactorDeleteModal from './TwoFactorDeleteModal';
import TwoFactorModal from './TwoFactorModal';

const TwoFactor = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'2段階認証'}</div>
      </Col>

      <Col span={24} className="mb-4">
        <div>SMSでの2段階認証を設定できます。</div>
      </Col>
      <Col className="mb-6" span={24}>
        <TwoFactorModal />
      </Col>
      <Col span={24}>
        <Space>
          <TwoFactorDeleteModal />
          <TwoFactorRecoveryModal />
        </Space>
      </Col>
    </Row>
  );
};

export default TwoFactor;
