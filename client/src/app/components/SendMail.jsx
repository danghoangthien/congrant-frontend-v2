import React, { useState } from 'react';
import { Row, Modal, Button, Space } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
} from 'utils/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import styled from 'styled-components/macro';
export const StyledReceivers = styled(Space)`
  background: #fafaf8;
  border-radius: 4px;
  font-size: 12px;
  line-height: 22px;
  padding: 16px;
  gap: 8px;
  width: 100%;
`;

export const StyledDehighlightText = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

const SendMail = ({ selectedRowKeys }) => {
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
      <Button
        className="icon-btn"
        icon={<span className="material-symbols-outlined fill-icon">send</span>}
        onClick={e => {
          e.stopPropagation();
          showModal();
        }}
      >
        {'メッセージを送る'}
      </Button>
      <Modal
        title={<StyledModalTitle>{'メッセージを送る'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="送信する"
      >
        <Row className="item mb-4">
          <SettingsInputContainer label={<SettingLabel label={'送信先（12件）'} />}>
            <StyledReceivers direction="vertical">
              <span>{'araki@gmai.com（荒木 雄大）'}</span>
              <span>{'yamada@gmail.com（山田 花子）'}</span>
              <span>{'tanaka@gmail.com（田中 太郎）'}</span>
              <span>{'suzuki@gmail.com（鈴木 一郎）'}</span>
              <span>{'araki@gmai.com（荒木 雄大）'}</span>
            </StyledReceivers>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-4">
          <SettingsInputContainer label={<SettingLabel label={'テンプレート'} />}>
            <SettingSelect value={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-4">
          <SettingsInputContainer label={<SettingLabel label={'FROM'} />}>
            <span>{'noreply@congrant.com（寄付会費決済サービス「コングラント」）'}</span>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-4">
          <SettingsInputContainer label={<SettingLabel label={'CC:'} />}>
            <SettingInput placeholder={'info@*******.com'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-4">
          <SettingsInputContainer label={<SettingLabel label={'件名'} required />}>
            <SettingInput placeholder={'ご支援ありがとうございました'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-4">
          <SettingsInputContainer label={<SettingLabel label={'本文'} required />}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <StyledDehighlightText>{'XXXX様'}</StyledDehighlightText>
              &nbsp;
              <StyledDehighlightText>
                {'NPO法人コングラントからメッセージが届きました。'}
              </StyledDehighlightText>
              <StyledDehighlightText>
                {'--------------------------------------------------------'}
              </StyledDehighlightText>
              <SettingSelect value={'差込タグ'} style={{ width: '50%' }} />
              <SettingTextarea rows="10" />
            </Space>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default SendMail;
