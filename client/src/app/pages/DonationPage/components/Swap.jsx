import React, { useState } from 'react';
import { Row, Button, Space, Modal, Typography } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
import styled from 'styled-components/macro';
// STYLE
import { StyledModalTitle } from 'styles/Modal.style';

const StyledSwapModal = styled(Modal)`
  & .ant-modal-footer {
    .ant-btn-default {
      display: none;
    }
  }
`;
const Swap = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

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
      <StyledSwapModal
        title={<StyledModalTitle className="modal-title">{'未受領の寄付とは？'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={480}
        cancelText={false}
        okText="OK"
        closeIcon={<span className="material-symbols-outlined">close</span>}
      >
        <Row className="item mb-6">
          <Space>
            <Button>{'swap'}</Button>
          </Space>
        </Row>
      </StyledSwapModal>
    </>
  );
};

export default Swap;
