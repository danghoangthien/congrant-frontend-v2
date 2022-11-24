import React, { useState } from 'react';
import { Row, Button, Space, Modal, Typography } from 'antd';

// STYLE
import { StyledModalTitle } from 'styles/Modal.style';

const Swap = () => {
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
      {/* 未受領の寄付とは？ Button */}
      <Typography.Text
        onClick={showModal}
        style={{
          color: '#63B233',
          cursor: 'pointer',
        }}
      >
        {'未受領の寄付とは？'}
      </Typography.Text>

      {/* 寄付の登録モーダル・ChangeAmount Modal */}
      <Modal
        title={<StyledModalTitle className="modal-title">{'未受領の寄付とは？'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={480}
        cancelText={false}
        okText="OK"
        closeIcon={<span class="material-symbols-outlined">close</span>}
      >
        <Row className="item mb-6">
          <Space>
            <Button>{'swap'}</Button>
          </Space>
        </Row>
      </Modal>
    </>
  );
};

export default Swap;
