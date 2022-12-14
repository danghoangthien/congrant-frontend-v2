import React, { useState } from 'react';
import { Row, Col, Space, Modal, DatePicker } from 'antd';
import moment from 'moment';
// HOOKS
import useModalActions from 'hook/useModalActions';
// COMPONENTS
import { SettingsInputContainer, SettingLabel, SettingInput, SettingSelect } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'styles/Modal.style';

const ChangeAmount = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* 寄付の登録ボタン・ChangeAmount Button */}
      <span onClick={showModal}>{'金額を変更して消込'}</span>

      {/* 寄付の登録モーダル・ChangeAmount Modal */}
      <Modal
        title={<StyledModalTitle className="modal-title">{'金額を変更して消込'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        cancelText="キャンセル"
        okText="変更"
        closeIcon={<span className="material-symbols-outlined">close</span>}
      >
        {/* プラン */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'プラン'} required />}>
            <SettingSelect value={'未設定'} />
          </SettingsInputContainer>
        </Row>

        {/* 単価・口数 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'単価・口数'} required />}>
            <Row align="middle" justify="space-between">
              <Space>
                <SettingInput placeholder="3,000" suffix={'円'} style={{ width: '160px' }} />
                <SettingInput placeholder="1" suffix="口" style={{ width: '160px' }} />
              </Space>
              <span
                style={{
                  fontWeight: '600',
                }}
              >
                {'合計 3,000円'}
              </span>
            </Row>
          </SettingsInputContainer>
        </Row>

        {/* 入金日 */}
        <Row>
          <SettingsInputContainer label={<SettingLabel label={'入金日'} required />}>
            <DatePicker
              defaultValue={moment('2022-04-01', 'YYYY-MM-DD')}
              style={{ width: '100%' }}
            />
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default ChangeAmount;
