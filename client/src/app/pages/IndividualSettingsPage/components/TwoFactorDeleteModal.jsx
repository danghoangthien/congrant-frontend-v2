import React from 'react';
import { Row, Col, Modal, Button } from 'antd';
import useModalActions from 'hook/useModalActions';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const TwoFactorModal = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* ボタン */}
      <Button className="active" type="danger" onClick={showModal}>
        <span>{'2段階認証を解除する'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'2段階認証の解除'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        cancelText="キャンセル"
        okText="解除する"
        okButtonProps={{ type: 'danger' }}
      >
        <Row>
          <Col span={24}>
            <div>2段階認証を解除すると、セキュリティのリスクが高まります。</div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TwoFactorModal;
