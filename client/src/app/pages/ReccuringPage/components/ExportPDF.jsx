import React, { useState } from 'react';
import { Row, Col, Modal, Button, Radio, Space, Input, Checkbox } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInfoLabel,
  SettingTextarea,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const ExportPDF = ({ title }) => {
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
        onClick={e => {
          e.stopPropagation();
          showModal();
        }}
        type="primary"
      >
        <span>{'PDFF'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'領収書ダウンロードURLの送信'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="送信する"
      >
        <Row className="item mb-2">
          <Col sm="24" md="24" lg="24">
            <span>{'領収書のダウンロードURLを送信します。'}</span>
          </Col>
          <SettingsInputContainer label={<SettingLabel label={'送信対象'} />}>
            <p>{'・田中太郎（tanaka@gmail.com)'} </p>
            <p>{'・山田花子（yamada@gmail.com）'}</p>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'件名'} required />}>
            <SettingInput value={'領収書ダウンロードURLのご案内'} />
          </SettingsInputContainer>

          <SettingsInputContainer label={<SettingLabel label={'本文'} required />}>
            <Row>
              <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                {'XXXX様\nNPO法人コングラントからメッセージが届きました。'}
                <br />
                {'--------------------------------------------------------'}
              </p>
              <SettingTextarea
                rows="5"
                value={
                  'いつも当団体を応援してくださりありがとうございます\n先日いただいたご支援の領収書をお送りします。\nお手数をおかけしますが、以下のURLからダウンロードしてください。\n今後とも応援よろしくお願いいたします。'
                }
              />
              <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                {'--------------------------------------------------------'}
                <br />
                {'領収書ダウンロードURL（他の人に教えないでください'}
                <br />
                {
                  'https://***********************************************************************************'
                }
                <br />
                {'--------------------------------------------------------'}
              </p>
            </Row>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default ExportPDF;
