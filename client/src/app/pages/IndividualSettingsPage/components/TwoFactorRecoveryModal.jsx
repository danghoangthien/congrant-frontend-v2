import React, { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, Space, Card } from 'antd';
// STYLE
import styled from 'styled-components/macro';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
// CONTS
import { EXTRA_LIGHT_GRAY } from 'styles/StyleConstants';

export const StyledCard = styled(Card)`
  background: ${EXTRA_LIGHT_GRAY};
  border-radius: 0;
  border: none !important;
`;

export const StyledText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`;

const TwoFactorModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* ボタン */}
      <Button className="active" onClick={showModal}>
        <span>{'リカバリーコードを確認'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'リカバリーコード'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        cancelText="キャンセル"
        okText="OK"
      >
        <Row>
          <Col className="mb-4" span={24}>
            <div>
              スマートフォンの紛失・盗難などの理由でSMSが受け取れず、認証番号が確認できなくなった際に以下のリカバリーコードを使用してログインすることができます。
              <br />
              ※リカバリーコードはコピー・スクリーンショットを撮るなどして保管してください。
            </div>
          </Col>
          <Col span={24}>
            <StyledCard bodyStyle={{ padding: '16px 8px' }}>
              <StyledText>1234 5678 1234 5678</StyledText>
              <StyledText>1234 5678 1234 5678</StyledText>
            </StyledCard>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TwoFactorModal;
