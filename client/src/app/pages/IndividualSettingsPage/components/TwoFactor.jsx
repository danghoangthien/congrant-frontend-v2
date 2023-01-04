// ANTD
import { Row, Col, Space } from 'antd';
// COMPONENT
import TwoFactorRecoveryModal from './TwoFactorRecoveryModal';
import TwoFactorDeleteModal from './TwoFactorDeleteModal';
import TwoFactorModal from './TwoFactorModal';
// STYLE
import styled from 'styled-components/macro';
import { EXTRA_LIGHT_GRAY_COLOR } from 'styles/StyleConstants';

const StyledBox = styled.div`
  padding: 24px;
  border-radius: 4px;
  background-color: ${EXTRA_LIGHT_GRAY_COLOR};
  width: 100%;
  max-width: 600px;
`;

const TwoFactor = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'2段階認証'}</div>
      </Col>
      <Col span={24} className="mb-4">
        <div>SMSでの2段階認証を設定できます。</div>
      </Col>
      <Col span={24} className="mb-4">
        <StyledBox>
          2段階認証とは、ログイン時にメールアドレス・パスワードでの認証に加えて、電話番号を利用して認証を行う仕組みです。2段階認証を設定することでコングラントをより安全にご利用いただけます。
        </StyledBox>
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
