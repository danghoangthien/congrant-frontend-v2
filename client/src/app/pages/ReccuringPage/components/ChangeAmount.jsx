import React from 'react';
import { Row, Space, Modal, Button, Col } from 'antd';
import styled from 'styled-components/macro';
// HOOKS
import useModalActions from 'hook/useModalActions';
// COMPONENTS
import { SettingsInputContainer, SettingLabel, SettingInput, SettingSelect } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'styles/Modal.style';

const StyledHighlightSpace = styled(Space)`
  width: 100%;
  background: #fafaf8;
  border-radius: 4px;
  padding: 16px;

  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
  .inactive {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const ChangeAmount = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* 寄付の登録ボタン・ChangeAmount Button */}
      <Button onClick={showModal}>{'金額変更'}</Button>

      {/* 寄付の登録モーダル・ChangeAmount Modal */}
      <Modal
        title={<StyledModalTitle className="modal-title">{'継続契約の金額変更'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        cancelText="キャンセル"
        okText="金額を変更する"
        closeIcon={<span className="material-symbols-outlined">close</span>}
      >
        <Row className="item mb-2">
          <p>
            {'以下のサポーターの決済金額を変更します。'}
            <br />
            {'※設定した変更は、'} <span style={{ color: '#C72A32' }}>{'来月以降の決済日'}</span>
            {'から反映されます'}
          </p>
        </Row>
        <Row className="item mb-6">
          <Col xs={24}>
            <StyledHighlightSpace>
              <span className="inactive">{'サポーター'}</span>
              <span className="active">{'田中 太郎'}</span>
            </StyledHighlightSpace>
          </Col>
        </Row>
        {/* プラン */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'プラン'} />}>
            <SettingSelect value={'ゴールドサポーター'} />
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
      </Modal>
    </>
  );
};

export default ChangeAmount;
