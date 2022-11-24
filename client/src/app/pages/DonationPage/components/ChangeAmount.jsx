import React, { useState } from 'react';
import { Row, Col, Space, Modal, DatePicker } from 'antd';
import moment from 'moment';
// COMPONENTS
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
  SettingTextarea,
} from 'app/pages/CorporationSettingPage/components/Sprites';
// STYLE
import { StyledModalTitle, StyledModal } from 'styles/Modal.style';

const ChangeAmount = () => {
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
      {/* 寄付の登録ボタン・ChangeAmount Button */}
      <span onClick={showModal}>{'寄付の登録'}</span>

      {/* 寄付の登録モーダル・ChangeAmount Modal */}
      <Modal
        title={<StyledModalTitle className="modal-title">{'金額を変更して消込'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={480}
        cancelText="キャンセル"
        okText="確定"
        closeIcon={<span class="material-symbols-outlined">close</span>}
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
            <Space>
              <SettingInput placeholder="3,000" suffix={'円'} style={{ width: '160px' }} />
              <SettingInput placeholder="1" suffix="口" style={{ width: '160px' }} />
              <span
                style={{
                  fontWeight: '600',
                }}
              >
                {'合計 3,000円'}
              </span>
            </Space>
          </SettingsInputContainer>
        </Row>

        {/* 入金日 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'入金日'} required />}>
            <DatePicker
              size="large"
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
