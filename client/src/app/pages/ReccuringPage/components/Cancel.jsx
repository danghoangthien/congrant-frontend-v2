import React from 'react';
import { Row, Space, Modal, Button, Col, Checkbox } from 'antd';
import styled from 'styled-components/macro';
// HOOKS
import useModalActions from 'hook/useModalActions';
// COMPONENTS
import { SettingsInputContainer, SettingLabel, SettingTextarea } from 'utils/Sprites';
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

const options = [
  { label: '寄付による成果が見えた', value: 1 },
  { label: '寄付が支援につながっている実感が持てない', value: 2 },
  { label: '団体からの活動報告が不十分', value: 3 },
  { label: '団体の活動に共感できなくなった', value: 4 },
  { label: '団体の対応に不満がある', value: 5 },
  { label: '寄付先の変更', value: 6 },
  { label: '生活環境の変化', value: 7 },
  { label: 'その他', value: 8 },
];

const Cancel = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* 解約 Button */}
      <Button className="active" type="danger" onClick={showModal}>
        <span>{'解約'}</span>
      </Button>

      {/* 継続契約の解約 Modal */}
      <Modal
        title={<StyledModalTitle className="modal-title">{'継続契約の解約'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            {'キャンセル'}
          </Button>,
          <Button key="ok" className="active" type="danger" onClick={handleOk}>
            <span>{'金額を変更する'}</span>
          </Button>,
        ]}
        closeIcon={<span className="material-symbols-outlined">close</span>}
      >
        <Row className="item mb-2">
          <p>
            <span>{'以下のサポーターの継続契約を解約します。'}</span>
            <br />
            <span style={{ color: '#C72A32' }}>{'※解約は取り消せません。'}</span>
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
        <Row className="item mb-6">
          <SettingsInputContainer
            label={<SettingLabel label={'解約理由（複数選択可）'} required />}
          >
            <Row align="middle" justify="space-between">
              <Col sm={24} md={24} lg={24}>
                <Checkbox.Group options={options} defaultValue={[1]} />
              </Col>
            </Row>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'解約理由詳細'} />}>
            <SettingTextarea rows="5" placeholder={''} />
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default Cancel;
